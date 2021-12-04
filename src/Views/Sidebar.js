import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Sidebar = ({ navigation }) => {
  const state = {
    routes: [
      {
        name: "Home",
        nametwo: "Inicio",
        icon: "ios-newspaper-outline",
      },
      {
        name: "Profile",
        nametwo: "Perfil",
        icon: "ios-person-outline",
      },
      {
        name: "Settings",
        nametwo: "Configuracion",
        icon: "ios-settings-outline",
      },

      {
        name: "Address",
        nametwo: "Direccion",
        icon: "ios-home-outline",
      },
      {
        name: "History",
        nametwo: "Historial",
        icon: "ios-clipboard-outline",
      },
      {
        name: "Pays",
        nametwo: "Pago",
        icon: "ios-card-outline",
      },
      {
        name: "OutSession",
        nametwo: "Cerra Session",
        icon: "ios-exit-outline",
      },
    ],
  };

  const Item = ({ item, navigate }) => {
    console.log(item.name);
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigate(item.name)}
      >
        <Ionicons style={{ color: "#32CD32" }} name={item.icon} size={30} />
        <Text style={styles.title}>{item.nametwo}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "#32CD32" }}>
        <View
          style={{
            backgroundColor: "#ff0505",
            borderBottomRightRadius: 120,
            borderTopLeftRadius: 120,
          }}
        >
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Ionicons
              name="close-outline"
              style={{
                marginLeft: 250,
                marginTop: 2,
                marginVertical: -3,
                fontSize: 28,
                color: "#fff",
              }}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 70, marginBottom: 10 }}>
            <Image
              source={require("../Image/profiles.jpeg")}
              style={styles.profileImg}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 28,
                marginTop: 5,
                marginLeft: 8,
                color: "#fff",
              }}
            >
              Janna Doe
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={{ width: "100%", marginLeft: 30 }}
        data={state.routes}
        renderItem={({ item }) => (
          <Item item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 57,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginLeft: 40,
    color: "gray",
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginTop: 2,
  },
});

export default Sidebar;
