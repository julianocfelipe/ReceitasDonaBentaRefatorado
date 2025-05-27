import { StatusBar } from "expo-status-bar";
import Header from "../ReceitasDonaBentaRefatorado/components/Header";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { KeyboardView, Title, Container, Input, ButtonSubmit, TextSubmit } from "./screens/Login/styles";
import React from "react";
import { Provider as PaperProvider, Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import RecipesPattern from "./components/RecipesPattern";

// Definindo os tipos das rotas
type RootStackParamList = {
  'Tela de Login': undefined;
  'Receitas Fodas': undefined;
  'Petit Gateau do Jacquin': undefined;
  'Bolinho de Chuva da Palmirinha': undefined;
  'Bolo de Milho da Ana Maria': undefined;
};

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Tela de Login'>;
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Receitas Fodas'>;
type ReceitaProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

function Login({ navigation }: LoginProps) {
  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Input
          placeholder="Usuário"
        />
        <Input
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit onPress={() => navigation.navigate('Receitas Fodas')}>
          <TextSubmit>Entrar</TextSubmit>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
      <PaperProvider>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <RecipesPattern
              style={{ borderWidth: 5, borderColor: "black", marginBottom: 32 }}
              image="https://img.cybercook.com.br/receitas/434/petit-gateau-840x480.jpeg?q=75"
              title="Petit Gateau do Jacquin"
            >
              <Text style={{ marginVertical: 10 }} >Receita do Mestre, confia!</Text>
              <Button mode="contained" onPress={() => navigation.navigate('Petit Gateau do Jacquin')}>
                Tentar Reproduzir essa Obra de Arte
              </Button>
            </RecipesPattern>

            <RecipesPattern
              style={{ borderWidth: 5, borderColor: "black", marginBottom: 32 }}
              image="https://vovopalmirinha.com.br/wp-content/uploads/2020/03/vovo-palmirinha-bolinho-de-chuva.jpg"
              title="Bolinho de Chuva da Palmirinha"
            >
              <Text style={{ marginVertical: 10 }}>Mermão, é da fodendo Palmirinha, quer mais o que?</Text>
              <Button mode="contained" onPress={() => navigation.navigate('Bolinho de Chuva da Palmirinha')}>
                Bora Fazer!
              </Button>
            </RecipesPattern>

            <RecipesPattern
              style={{ borderWidth: 5, borderColor: "black", marginBottom: 32 }}
              image="https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/Bolo-de-milho-500x375.jpg"
              title="Bolo de Milho da Ana Maria Braga"
            >
              <Text style={{ marginVertical: 10 }}>O Louro se foi, mas as receitas ficaram, não perca...</Text>
              <Button mode="contained" onPress={() => navigation.navigate('Bolo de Milho da Ana Maria')}>
                Acorda Meninaaaaaaaaa!
              </Button>
            </RecipesPattern>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </View>
  );
}

function Receita1({ navigation }: ReceitaProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text style={{ fontSize: 21, marginVertical: 16, marginHorizontal: 16, }}>
          Ingredientes: {`\n`}
          {"\n"}
          - 200 gramas de chocolate meio amargo{`\n`}
          - 2 colheres de manteiga sem sal{`\n`}
          - 2 ovos{`\n`}
          - 2 gemas{`\n`}
          - Meia xícara de chá de açúcar{`\n`}
          - 2 colheres de sopa de farinha de trigo{`\n`}
          {`\n`}
          Modo de Preparo: {`\n`}
          {"\n"}
          1. Derreta em banho-maria 200 gramas de chocolate meio amargo e 2 colheres de sopa sem sal. Reserve. {`\n`}{"\n"}
          2. Na bateira, coloque 2 ovos, 2 gemas, meia xícara de chá de açúcar. Bata até obter um creme claro. {`\n`}{"\n"}
          3. Em seguida, adicione a mistura de chocolate, 2 colheres de sopa de farinha de trigo e misture. {`\n`}{"\n"}
          4. Transfira a mistura para forminhas untadas com manteiga e enfarinhadas. {`\n`}{"\n"}
          5. Leve para assar em forno preaquecido a 200 graus Celsius de 6 a 10 minutos. {`\n`}{"\n"}
          6. Desenforme ainda quente e sirva com sorvete de creme. {`\n`}{"\n"}
        </Text>
        <Button mode="contained" onPress={() => navigation.goBack()}>
          Ver outras receitas
        </Button>
      </ScrollView>
    </View>
  );
}

function Receita2({ navigation }: ReceitaProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text style={{ fontSize: 21, marginVertical: 16, marginHorizontal: 16, }}>
          Ingredientes: {`\n`}
          - 2 ovos{`\n`}
          - ¾ de xícara de açúcar{`\n`}
          - 2 colheres de manteiga{`\n`}
          - ½ colher de sal{`\n`}
          - 1 colher de fermento em pó{`\n`}
          - 1 xícara de leite{`\n`}
          - 2 xícaras de farinha de trigo{`\n`}
          - óleo para fritar{`\n`}
          - açúcar e canela em pó para polvilhar{`\n`}
          {`\n`}
          Modo de Preparo{`\n`}
          {"\n"}
          1. Numa tigela, junte os ovos, a manteiga, o açúcar e o sal e misture muito bem. {`\n`}{"\n"}
          2. Acrescente alternadamente à mistura o leite e a farinha de trigo, mexendo sempre com uma colher. {`\n`}{"\n"}
          3. Junte o fermento e misture bem. {`\n`}{"\n"}
          4. Numa panela média, coloque bastante óleo e leve ao fogo alto para aquecer. {`\n`}{"\n"}
          5. Quando o óleo estiver quente, abaixe o fogo. {`\n`}{"\n"}
          6. Com duas colheres de sobremesa, modele os bolinhos. Encha uma das colheres com a massa e passe de uma colher para a outra, até que a massa fique com um formato arredondado. {`\n`}{"\n"}
          7. Com cuidado, coloque pequenas porções de bolinhos no óleo quente. Deixe fritar até que os bolinhos fiquem dourados. {`\n`}{"\n"}
          8. Com uma escumadeira, retire os bolinhos e coloque sobre um prato forrado com papel-toalha. {`\n`}{"\n"}
          9. Num prato fundo, coloque açúcar e canela em pó e misture bem. Passe os bolinhos por essa mistura até envolvê-los completamente. Sirva a seguir. {`\n`}{"\n"}
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={{ marginBottom: 10, marginHorizontal: 10 }}
        >
          Ver outras receitas
        </Button>
      </ScrollView>
    </View>
  );
}

function Receita3({ navigation }: ReceitaProps) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ fontSize: 21, marginVertical: 16, marginHorizontal: 16, }}>
          Ingredientes: {`\n`}
          {"\n"}
          – 1 lata de milho sem água{`\n`}
          – 1 lata de leite integral{`\n`}
          – 3 ovos{`\n`}
          – 1/2 lata de óleo{`\n`}
          – 1 lata de açúcar{`\n`}
          – 1 lata de fubá fino ou mimoso{`\n`}
          – 1 col sopa de fermento químico{`\n`}
          {`\n`}
          Modo de Preparo{`\n`}
          {"\n"}
          Bate tudo no liquidificador deixando o fermento por ultimo (bata pouco só pra misturar),
          coloque em forma de 21 a 24cm de diâmetro e leve para assar em 180ºC em forno preaquecido por aproximadamente 50 min.
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 10, marginBottom: 20 }}
        >
          Ver outras receitas
        </Button>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela de Login">
          <Stack.Screen name="Tela de Login" component={Login} />
          <Stack.Screen name="Receitas Fodas" component={HomeScreen} />
          <Stack.Screen name="Petit Gateau do Jacquin" component={Receita1} />
          <Stack.Screen name="Bolinho de Chuva da Palmirinha" component={Receita2} />
          <Stack.Screen name="Bolo de Milho da Ana Maria" component={Receita3} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}