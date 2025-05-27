// import { useState, useEffect } from "react";
// import React from "react";
// import { KeyboardView, Title, Container, Input, ButtonSubmit, TextSubmit } from "./styles";
// import Header from "../../components/Header";

// import { Formik } from "formik";

// import * as Yup from "yup";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const salvarUsuario = async usuarioData => {
//   try {
//     const jsonValue = JSON.stringify(usuarioData);
//     await AsyncStorage.setItem("@usuario", jsonValue);
//     return true;
//   } catch (err) {

//   }
//   return false;
// };

// const getUsuario = async () => {
//   try {

//     const jsonValue = await AsyncStorage.getItem("@usuario");
//     if (jsonValue !== null) {

//       const usuarioRecuperado = JSON.parse(jsonValue);

//       return usuarioRecuperado;
//     }
//   } catch (e) {
    
//   }

//   return {
//     nomeCompleto: "",
//     usuario: "",
//     senha: "",
//   };
// };

// const UsuarioSchema = Yup.object().shape({
//   nomeCompleto: Yup.string().min(2, "Mínimo de 2 letras").required("Campo nome obrigatório"),
//   usuario: Yup.string().string("Usuário inválido").required("Campo usuário obrigatório"),
//   senha: Yup.string().min(8, "Mínimo 8 digitos necessárias").required("Campo senha obrigatório"),
// });

// function MyTextInput({ error = null, ...props }) {
//   return (
//     <View style={{ paddingBottom: 6 }}>
//       <TextInput error={!!error} {...props} />
//       {!!error && typeof error === "string" && <Text style={styles.formInputError}>{error}</Text>}
//     </View>
//   );
// }

// export default function Cadastro({ navigation }) {
//   return (
//     <KeyboardView>
//       <Header />
//       <Container>
//         <Title>Cadastro</Title>
//         <Input 
//         placeholder="Nome Completo"
//         />
//         <Input 
//         placeholder="Usuário"
//         />
//         <Input 
//         placeholder="Senha"
//         secureTextEntry
//         />
//         <ButtonSubmit>
//           <TextSubmit>Cadastrar</TextSubmit>
//         </ButtonSubmit>
//       </Container>
//     </KeyboardView>
//   );
// }
