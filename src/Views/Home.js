import React, { useState } from "react";
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
import Colors from "./Colors";
import { TextInput } from "react-native-gesture-handler";
import AllProducts from "./AllProducts";
import Logo from "../Image/imageBonsai.jpeg";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
const Home = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const AllProductss = [
    {
      Arroz: {
        name: "Arroz Pimco",
        image: require("../Image/arrozpico.jpeg"),
        description: "5 LB.",
        price: "30.00",

        Iberia: {
          name: "Arroz Pimco",
          image: require("../Image/arrozpico.jpeg"),
          description: "5 LB.",
          price: "20.00",
        },
        Zagluz: {
          name: "Arroz Pimco",
          image: require("../Image/arrozpico.jpeg"),
          description: "5 LB.",
          price: "19.00",
        },
        Jumbo: {
          name: "Arroz Pimco",
          image: require("../Image/arrozpico.jpeg"),
          description: "5 LB.",
          price: "25.99",
        },
        SuperExito: {
          name: "Arroz Pimco",
          image: require("../Image/arrozpico.jpeg"),
          description: "5 LB.",
          price: "17.00",
        },
      },
    },
    {
      Aceite: {
        name: "Aceite crisol",
        image: require("../Image/aceitecrisol.jpeg"),
        description: "Crisol 15.oz",
        price: "30.00",
      },
    },
    { jambo: {} },
    { espaguetti: {} },
    { pasta: {} },
    { sazones: {} },
    { cepillo: {} },
  ];

  const productsArray = AllProductss;
  const looksmore = [];
  const ww = [];

  for (let dates in productsArray) {
    looksmore.push(productsArray[dates]);
  }

  console.log("----------products------------");
  console.log(looksmore);

  const ListCategories = () => {
    const categories = [
      { id: "1", name: "Vegetales", image: require("../Image/vegetales.jpeg") },
      { id: "2", name: "Carne", image: require("../Image/carnes.jpeg") },
      { id: "3", name: "Bebidas", image: require("../Image/bebidas.jpeg") },
      { id: "4", name: "Frutas", image: require("../Image/frutas.jpeg") },
      { id: "5", name: "Cereales", image: require("../Image/cereales.jpeg") },
    ];
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
        onPress={() => setSelectedCategoryIndex(index)}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? "#32CD32" : "#F0F0F0",
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: "cover",
                    borderRadius: 15,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 6,
                  color:
                    selectedCategoryIndex == index ? Colors.white : "#32CD32",
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ products }) => {
    //console.log("----------Card------------");
    // console.log(products);

    const arra = Object.getOwnPropertyNames(products);
    //console.log(arra);
    const dateseemoreee = [];
    for (let u = 0; u < arra.length; u++) {
      if (arra[u] !== "Nameproducts") {
        //console.log(informs[arra[u]]);
        dateseemoreee.push(products[arra[u]]);
      }
    }
    //console.log(dateseemoreee[0]["name"], "fdfdfd");
    console.log(dateseemoreee[0], "Cards");

    return (
      <TouchableHighlight
        underlayColor="white"
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("DetailsProducts", {
            name: "DetailsProducts",
            params: dateseemoreee[0],
          })
        }
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: -10 }}>
            <Image
              source={dateseemoreee[0]["image"]}
              style={{ height: 120, width: 120 }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {dateseemoreee[0]["name"]}
            </Text>
            <Text style={{ fontSize: 14, color: "gray", marginTop: 2 }}>
              {products.description}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 15,
              marginTop: 10,
              marginHorizontal: 29,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              RD${products.price}
            </Text>
            <View style={styles.addToCartBtn}>
              <Ionicons color="white" name="add-outline" size={32} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const Header = ({ name, openDrawer }) => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => openDrawer()}>
        <Ionicons style={{ color: "#32CD32" }} name="ios-menu" size={32} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
          <Ionicons
            style={{ marginLeft: 150, color: "#32CD32" }}
            name="ios-cart"
            size={32}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.container}>
        <Header name="Inicio" openDrawer={navigation.openDrawer} />
        <View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={Logo}
                style={{
                  height: 70,
                  width: 165,
                  resizeMode: "cover",

                  borderBottomRightRadius: 35,
                  borderTopRightRadius: 35,
                  marginTop: -15,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{ marginTop: 24, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          <Ionicons
            style={{ marginLeft: 10 }}
            name="search-outline"
            size={28}
          />
          <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Buscar" />
        </View>
        <View style={styles.sortBtn}>
          <Ionicons size={28} name="filter-outline" color="white" />
        </View>
      </View>

      <View>
        <ListCategories />
      </View>

      {selectedCategoryIndex == 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={looksmore}
          renderItem={({ item }) => <Card products={item} />}
        />
      ) : (
        <View></View>
      )}
    </SafeAreaView>
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
    marginTop: 20,
  },
  container: {
    backgroundColor: "#fff",
    borderTopColor: "#fff",
  },
  inputContainer: {
    flex: 0.99,
    height: 45,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#32CD32",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesListContainer: {
    paddingVertical: 30,
    marginBottom: -10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
    marginTop: -15,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 9,
    marginTop: 30,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "#fff",
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: "#32CD32",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: -4,
  },
});

export default Home;
