import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signup from "../Views/SignUp";
import Signin from "../Views/SignIn";
import Profiles from "../Views/Profiles";
import Home from "../Views/Home";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profiles" component={Profiles} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
