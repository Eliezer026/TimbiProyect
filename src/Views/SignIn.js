import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const SignIn = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    checkText: false,
    secureTextEntry: true,
  });

  const ChangeTextEmail = (name, value) => {
    if (value.length !== 0) {
      setState({ ...state, [name]: value, checkText: true });
    } else {
      setState({ ...state, [name]: value, checkText: false });
    }
  };

  const ChangeTextPassword = (name, value) => {
    if (value.length !== 0) {
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const secureTextEntry = () => {
    setState({
      secureTextEntry: !state.secureTextEntry,
      email: state.email,
      password: state.password,
      checkText: true,
    });
  };

  console.log(state);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Bienvenido a Timbi!</Text>
      </View>
      <Animatable.View
        duration={2000}
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <Text style={styles.textfooter}>Correo</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#32CD32" size={20} />
          <TextInput
            keyboardType="email-address"
            placeholder="Digites su Correo"
            style={styles.textInput}
            onChangeText={(value) => ChangeTextEmail("email", value)}
          />
          {state.checkText ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : null}
        </View>
        <Text style={[styles.textfooter, { marginTop: 35 }]}>Contraseña</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#32CD32" size={20} />
          {state.secureTextEntry ? (
            <TextInput
              placeholder="Digites su Contraseña"
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={(value) => ChangeTextPassword("password", value)}
            />
          ) : (
            <TextInput
              placeholder="Digites su Contraseña"
              style={styles.textInput}
              onChangeText={(value) => ChangeTextPassword("password", value)}
            />
          )}

          <TouchableOpacity onPress={() => secureTextEntry()}>
            {state.secureTextEntry ? (
              <Feather name="eye-off" color="gray" size={20} />
            ) : (
              <Feather name="eye" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#32CD32", marginTop: 15 }}>
          Olvide mi Contraseña{" "}
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.push("Profiles")}
            style={styles.signIn}
          >
            <LinearGradient
              colors={["#32CD32", "#32CD32"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSignin,
                  {
                    color: "white",
                  },
                ]}
              >
                Entrar
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push("Signup")}
            style={[
              styles.signIn,
              {
                borderColor: "#32CD32",
                borderWidth: 1,
                marginTop: 25,
              },
            ]}
          >
            <Text
              style={[
                styles.textSignin,
                {
                  color: "#32CD32",
                },
              ]}
            >
              Registrarme
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32CD32",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textheader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  textfooter: {
    color: "gray",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "gray",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },

  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSignin: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
