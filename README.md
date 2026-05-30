# SPI Alert Mobile 📱

Aplicativo mobile desenvolvido em **React Native + Expo** como parte do **SPI Innovation Challenge 2026** — Sprint 2.

Simula o frontend do sistema de **Visão Computacional para Proteção Ativa de Funcionários em Ambientes Industriais**, utilizando dados mockados (sem integração com backend nesta sprint).

---

## 📱 O que o app faz

O app permite **visualizar, cadastrar e consultar alertas de risco industrial** gerados por câmeras de visão computacional em ambiente de fábrica.

- Lista todos os alertas com indicação visual de severidade e status
- Cadastra novos alertas via formulário completo
- Exibe o detalhe completo de cada alerta
- Dados salvos em estado local (`useState`) durante a sessão

---

## 💾 Como os dados estão mockados

Os dados estão em `src/data/alertasMock.ts` — um array estático com 5 alertas pré-cadastrados que simulam respostas reais da API REST (Sprint 1).

O estado é gerenciado com `useState`:

```typescript
const [alertas, setAlertas] = useState<Alerta[]>(alertasMock);
```

Novos alertas criados na tela de Cadastro são adicionados ao estado e refletem imediatamente na lista.

> **Próxima sprint:** os dados mockados serão substituídos por chamadas reais à API REST.

---

## 🚀 Como rodar o app

### Pré-requisitos
- Node.js 18+
- Expo Go instalado no celular (iOS ou Android)

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/joao-baldini/Frontend-Sprint-2-Advanced-Programming-Mobile-Dev.git
cd Frontend-Sprint-2-Advanced-Programming-Mobile-Dev
```

**2. Instale as dependências**
```bash
npm install
```

**3. Inicie o servidor**
```bash
npx expo start --tunnel
```

**4. Abra no celular**
- Abra o app **Expo Go**
- Escaneie o QR Code que aparece no terminal

---

## 🗂️ Estrutura do projeto

```typscript
src/
types/        → Tipagem TypeScript (espelha entidade do backend)
data/         → Dados mockados
components/   → AlertaCard (componente reutilizável)
screens/      → ListaAlertas, CadastroAlerta, DetalheAlerta
App.tsx         → Navegação principal
```
---

## 🏭 Tecnologias

- React Native + Expo SDK 54
- TypeScript
- React Navigation
- useState para gerenciamento de estado
