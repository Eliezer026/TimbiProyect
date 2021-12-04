import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AllProducts from "./AllProducts";

const CartScreen = ({ navigation }) => {
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>
            {item.description}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            RD${item.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
          <View style={styles.actionBtn}>
            <Ionicons
              onPress={() => console.log("going down")}
              name="remove-outline"
              size={25}
              color="white"
            />
            <Ionicons
              onPress={() => console.log("going up")}
              name="add-outline"
              size={25}
              color="white"
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              marginVertical: 15,
              marginLeft: 113,
              fontSize: 25,
              fontWeight: "bold",
              color: "#32CD32",
            }}
          >
            <Ionicons name="chevron-back-outline" size={24} color="#32CD32" />
            Atras
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={AllProducts}
        renderItem={({ item }) => <CartCard item={item} />}
      />
      <View style={{ marginVertical: 15, marginHorizontal: 30 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log("button")}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Precio Total
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                RD$1,359{" "}
              </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Paga Ahora!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#32CD32",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    backgroundColor: "#32CD32",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CartScreen;
