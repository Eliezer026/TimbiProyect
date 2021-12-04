import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ name, openDrawer }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => openDrawer()}>
      <Ionicons name="ios-menu" size={32} />
    </TouchableOpacity>

    <Text>{name}</Text>
    <Text style={{ width: 50 }}></Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Header;
