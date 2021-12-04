import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";
import { LinearGradient } from "expo-linear-gradient";

const Address = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={["#32CD32", "#32CD32"]}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={{ marginHorizontal: 20, paddingVertical: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  marginTop: 30,
                  marginLeft: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                <Ionicons name="chevron-back-outline" color="white" size={24} />
                Mis Direcciones
              </Text>
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ marginTop: 510, marginBottom: 40 }}>
        <TouchableOpacity>
          <View style={{ ...styles.btnContainer, backgroundColor: "#32CD32" }}>
            <Text style={{ ...styles.title, color: "white" }}>
              Agregar Direccion
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopColor: "#fff",
  },
  title: { color: "white", fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: "#32CD32",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Address;
