import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../screens/onboarding/Splash";
import SignIn from "../screens/onboarding/SignIn";
import SignUp from "../screens/onboarding/SignUp";
import Home from "../screens/home/Home";
import BusinessInfo from "../screens/home/BusinessInfo";
import OrderSuccess from "../screens/home/OrderSuccess";
import MyOrders from "../screens/home/MyOrders";
import CustomDrawerContent from "./CustomDrawer";
import OrderDetails from "../screens/home/OrderDetails";
import ShipersHome from "../screens/shipersHome/ShipersHome";
import AssignOrders from "../screens/shipersHome/AssignOrders";

import SCREEN_KEYS from "../themes/SCREEN_KEYS";
import React from "react";
import Payment from "../screens/home/Payment";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_KEYS.SPLASH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_KEYS.SPLASH} component={SplashScreen} />
      <Stack.Screen name={SCREEN_KEYS.SIGNIN} component={SignIn} />
      <Stack.Screen name={SCREEN_KEYS.SIGNUP} component={SignUp} />
     </Stack.Navigator>
  );
};

const HomeNavigator = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName={SCREEN_KEYS.HOMESCREEN}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={SCREEN_KEYS.HOMESCREEN} component={Home} />
      <Drawer.Screen name={SCREEN_KEYS.MYORDERS} component={MyOrders} />
     </Drawer.Navigator>
  );
};

const RootStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={SCREEN_KEYS.HOMESTACK}
            screenOptions={{
            headerShown: false,
            }}
        >
            <Stack.Screen
            name={SCREEN_KEYS.ONBOARDINGSTACK}
            component={OnboardingNavigator}
            />
            <Stack.Screen name={SCREEN_KEYS.HOMESTACK} component={HomeNavigator} />
            <Stack.Screen name={SCREEN_KEYS.BUSINESSINFO} component={BusinessInfo} />
            <Stack.Screen name={SCREEN_KEYS.ORDERSUCCESS} component={OrderSuccess} />
            <Stack.Screen name={SCREEN_KEYS.ORDERDETAILS} component={OrderDetails} />
            <Stack.Screen name={SCREEN_KEYS.PAYMENT} component={Payment} />
            <Stack.Screen name={SCREEN_KEYS.SHIPERSHOME} component={ShipersHome} />
            <Stack.Screen name={SCREEN_KEYS.ASSIGNORDERS} component={AssignOrders} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
