import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AlertaCard } from "../components/AlertaCard";
import { alertasMock } from "../data/alertasMock";
import { Alerta } from "../types/Alerta";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Lista">;

export function ListaAlertasScreen({ navigation }: Props) {
  const [alertas, setAlertas] = useState<Alerta[]>(alertasMock);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <View>
          <Text style={s.titulo}>🏭 SPI Alert</Text>
          <Text style={s.sub}>{alertas.length} alertas registrados</Text>
        </View>
        <TouchableOpacity style={s.btnNovo} onPress={() => navigation.navigate("Cadastro", { onSalvar: (a) => setAlertas(prev => [a, ...prev]) })}>
          <Text style={s.btnNovoText}>+ Novo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={alertas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AlertaCard alerta={item} onPress={() => navigation.navigate("Detalhe", { alerta: item })} />}
        contentContainerStyle={{ padding:16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex:1, backgroundColor:"#0D0D0D" },
  header: { flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20, paddingTop:20, paddingBottom:16, borderBottomWidth:1, borderBottomColor:"#1F1F1F" },
  titulo: { color:"#fff", fontSize:22, fontWeight:"800" },
  sub: { color:"#666", fontSize:13, marginTop:2 },
  btnNovo: { backgroundColor:"#E53935", paddingHorizontal:16, paddingVertical:10, borderRadius:10 },
  btnNovoText: { color:"#fff", fontWeight:"700", fontSize:14 },
});