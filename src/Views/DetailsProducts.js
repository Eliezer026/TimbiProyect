import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const DetailsProducts = ({ route, navigation }) => {
  const items = route.params.params;
  console.log("-------detailProducts------");
  console.log(items["Jumbo"]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View stysle={styles.header}>
        <View>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text
              style={{
                marginTop: 30,
                marginLeft: 125,
                fontSize: 25,
                fontWeight: "bold",
                color: "#32CD32",
              }}
            >
              <Ionicons color="#32CD32" name="chevron-back-outline" size={24} />
              Atras
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}></View>

        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Ionicons
            style={{ marginLeft: 15, color: "#32CD32" }}
            name="ios-cart"
            size={32}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={items.image} style={{ height: 200, width: 200 }} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              {items.name}
            </Text>
            <View style={styles.iconContainer}>
              <Ionicons name="heart-outline" color="#32CD32" size={25} />
            </View>
          </View>
          <Text style={styles.detailsText}>{items.description}</Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            RD${items.price}
          </Text>
          <View
            style={{
              marginRight: 20,
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.actionBtn}>
              <Ionicons
                onPress={() => console.log("going down")}
                name="remove-outline"
                size={25}
                color="#32CD32"
              />
              <Ionicons
                onPress={() => console.log("going up")}
                name="add-outline"
                size={25}
                color="#32CD32"
              />
            </View>
            <Text
              style={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 18,
                color: "white",
              }}
            >
              1
            </Text>
          </View>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <TouchableOpacity>
              <View
                style={{ ...styles.btnContainer, backgroundColor: "white" }}
              >
                <Text style={{ ...styles.title, color: "#32CD32" }}>
                  Agregar al Carrito
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: "#32CD32",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 20,
    lineHeight: 22,
    fontSize: 16,
    color: "white",
  },
  title: { color: "white", fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: "#32CD32",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailsProducts;
