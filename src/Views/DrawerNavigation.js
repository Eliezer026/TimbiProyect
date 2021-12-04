/*import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";*/

import Sidebar from "./Sidebar";
import Home from "./Home";
import Profile from "./ProfilesUsers";
import Settings from "./Settings";
import Address from "./Address";
import History from "./History";
import Pays from "./Pays";
import DetailsProducts from "./DetailsProducts";
import CartScreen from "./CartScreen";
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{ marginTop: 32 }}
      drawerContent={(props) => <Sidebar {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Address" component={Address} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Pays" component={Pays} />
      <Drawer.Screen name="DetailsProducts" component={DetailsProducts} />
      <Drawer.Screen name="CartScreen" component={CartScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

/*const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
    Address: { screen: Address },
    History: { screen: History },
    Pays: { screen: Pays },
    DetailsProducts: { screen: DetailsProducts },
  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    navigationOptions: {
      headerTitle: false,

      headerStyle: {
        backgroundColor: "#fff",
        height: 35,
      },
    },

    contentComponent: (props) => <Sidebar {...props} />,
    drawerPosition: "left",
    getCustomActionCreators: (_route, key) => ({
      openLeftDrawer: () => DrawerActions.openDrawer({ key }),
      closeLeftDrawer: () => DrawerActions.closeDrawer({ key }),
      toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key }),
    }),
  }
);

const AppNavigator = createStackNavigator({
  Drawer: { screen: Drawer },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;*/
