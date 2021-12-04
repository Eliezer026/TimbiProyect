import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Button,
  PixelRatio,
} from "react-native";
import { Dimensions, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";
import imagens from "../Image/imageBonsai.jpeg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 375;

const nomarlize = (size) => {
  const newSize = size * scale;

  if (Platform.OS == "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 20;
  }
};

const ProfilesUsers = ({ navigation }) => {
  console.log(navigation);

  const [text, setText] = useState("");
  return (
    <View>
      <LinearGradient
        colors={["#32CD32", "#32CD32"]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={{ marginHorizontal: 20, paddingVertical: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" color="white" size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View>
              <Image
                source={imagens}
                style={{
                  width: nomarlize(120),
                  height: nomarlize(120),
                  borderRadius: 70,
                }}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 12,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 28 }}>Abel Diaz</Text>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Abeldiaz@gmail.com
            </Text>
          </View>
        </View>
      </LinearGradient>

      <Text
        style={{
          color: "#32CD32",
          marginLeft: 15,
          marginTop: 10,
          fontSize: 24,
        }}
      >
        Mi datos
      </Text>
      <View
        style={{
          padding: 15,
          paddingBottom: 30,
          marginTop: 15,
          marginRight: 15,
          marginLeft: 15,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#32CD32", fontSize: 20 }}>Nombre</Text>
        <TextInput
          style={{
            height: 40,
            fontSize: 16,
            borderBottomColor: "#32CD32",
            borderBottomWidth: 0.5,
          }}
          placeholder="Nombre"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={{ color: "#32CD32", fontSize: 20 }}>Apellido</Text>
        <TextInput
          style={{
            height: 40,
            fontSize: 16,
            borderBottomColor: "#32CD32",
            borderBottomWidth: 0.5,
          }}
          placeholder="Apellido"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={{ color: "#32CD32", fontSize: 20 }}>Correo</Text>
        <TextInput
          style={{
            height: 40,
            fontSize: 16,
            borderBottomColor: "#32CD32",
            borderBottomWidth: 0.5,
          }}
          placeholder="E-mail"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>

      {text.length > 0 ? (
        <TouchableOpacity
          onPress={() => console.log("my god")}
          style={{
            padding: 10,
            marginTop: 50,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 15,
            backgroundColor: "#32CD32",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 42,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              backgroundColor: "#32CD32",
              marginRight: 5,
            }}
          >
            {text
              .split("~")
              .map((word) => {
                return word && "Guardar";
              })
              .join("")}
          </Text>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 120,
    marginTop: -10,
    shadowColor: "#000",
    shadowOffset: { height: 3, width: 1 },
  },
});

export default ProfilesUsers;
