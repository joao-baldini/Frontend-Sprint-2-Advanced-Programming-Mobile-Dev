import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alerta, NivelSeveridade, StatusAlerta, TipoAlerta } from "../types/Alerta";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Cadastro">;

function Selector<T extends string>({ label, opcoes, selecionado, onSelect, cores }: { label:string; opcoes:T[]; selecionado:T; onSelect:(v:T)=>void; cores?:Record<string,string> }) {
  return (
    <View style={{ marginBottom:16 }}>
      <Text style={s.label}>{label}</Text>
      <View style={{ flexDirection:"row", flexWrap:"wrap", gap:8 }}>
        {opcoes.map(op => {
          const ativo = op === selecionado;
          const cor = cores?.[op] ?? "#E53935";
          return (
            <TouchableOpacity key={op} style={[s.selBtn, ativo && { backgroundColor:cor, borderColor:cor }]} onPress={() => onSelect(op)}>
              <Text style={[s.selText, ativo && { color:"#fff" }]}>{op.replace(/_/g," ")}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export function CadastroAlertaScreen({ navigation, route }: Props) {
  const { onSalvar } = route.params;
  const [tipo, setTipo] = useState<TipoAlerta>("SEM_CAPACETE");
  const [nivel, setNivel] = useState<NivelSeveridade>("MEDIO");
  const [status, setStatus] = useState<StatusAlerta>("ABERTO");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [cameraId, setCameraId] = useState("");

  const salvar = () => {
    if (!descricao.trim() || !localizacao.trim() || !cameraId.trim()) { Alert.alert("Campos obrigatórios", "Preencha todos os campos."); return; }
    const novo: Alerta = { id:Date.now(), tipo, descricao:descricao.trim(), nivelSeveridade:nivel, localizacao:localizacao.trim().toUpperCase().replace(/ /g,"_"), cameraId:cameraId.trim().toUpperCase(), status, dataHoraAlerta:new Date().toISOString(), dataHoraRegistro:new Date().toISOString() };
    onSalvar(novo);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={{ padding:20, paddingBottom:40 }} showsVerticalScrollIndicator={false}>
        <Text style={s.titulo}>Novo Alerta</Text>
        <Selector label="Tipo" opcoes={["SEM_CAPACETE","SEM_COLETE","SEM_LUVA","POSTURA_RISCO","ZONA_PERIGOSA"]} selecionado={tipo} onSelect={setTipo} />
        <Selector label="Severidade" opcoes={["BAIXO","MEDIO","ALTO","CRITICO"]} selecionado={nivel} onSelect={setNivel} cores={{ BAIXO:"#4CAF50", MEDIO:"#FF9800", ALTO:"#F44336", CRITICO:"#B71C1C" }} />
        <Selector label="Status" opcoes={["ABERTO","EM_ANALISE","RESOLVIDO","IGNORADO"]} selecionado={status} onSelect={setStatus} cores={{ ABERTO:"#F44336", EM_ANALISE:"#FF9800", RESOLVIDO:"#4CAF50", IGNORADO:"#757575" }} />
        <Text style={s.label}>Descrição *</Text>
        <TextInput style={[s.input,{height:90,textAlignVertical:"top"}]} placeholder="Descreva o que foi detectado..." placeholderTextColor="#444" value={descricao} onChangeText={setDescricao} multiline />
        <Text style={s.label}>Localização *</Text>
        <TextInput style={s.input} placeholder="Ex: SETOR_A" placeholderTextColor="#444" value={localizacao} onChangeText={setLocalizacao} autoCapitalize="characters" />
        <Text style={s.label}>ID da Câmera *</Text>
        <TextInput style={s.input} placeholder="Ex: CAM-001" placeholderTextColor="#444" value={cameraId} onChangeText={setCameraId} autoCapitalize="characters" />
        <TouchableOpacity style={s.btnSalvar} onPress={salvar}><Text style={s.btnSalvarText}>Registrar Alerta</Text></TouchableOpacity>
        <TouchableOpacity style={s.btnCancelar} onPress={() => navigation.goBack()}><Text style={s.btnCancelarText}>Cancelar</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex:1, backgroundColor:"#0D0D0D" },
  titulo: { color:"#fff", fontSize:24, fontWeight:"800", marginBottom:24 },
  label: { color:"#AAA", fontSize:11, fontWeight:"600", marginBottom:8, textTransform:"uppercase", letterSpacing:0.5 },
  input: { backgroundColor:"#1A1A1A", borderRadius:10, borderWidth:1, borderColor:"#2A2A2A", color:"#fff", fontSize:15, paddingHorizontal:14, paddingVertical:12, marginBottom:16 },
  selBtn: { borderRadius:8, borderWidth:1, borderColor:"#2A2A2A", paddingHorizontal:12, paddingVertical:8, backgroundColor:"#1A1A1A" },
  selText: { color:"#777", fontSize:12, fontWeight:"600" },
  btnSalvar: { backgroundColor:"#E53935", borderRadius:12, paddingVertical:16, alignItems:"center", marginTop:8, marginBottom:12 },
  btnSalvarText: { color:"#fff", fontSize:16, fontWeight:"700" },
  btnCancelar: { borderRadius:12, paddingVertical:14, alignItems:"center", borderWidth:1, borderColor:"#2A2A2A" },
  btnCancelarText: { color:"#777", fontSize:15, fontWeight:"600" },
});