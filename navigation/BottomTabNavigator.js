import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import TabBarIcon from "../components/TabBarIcon";
import Lounge from "../screens/Lounge";
import CameraScreen from "../screens/CameraScreen";
import HomeScreen from "../screens/HomeScreen";
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import MapScreen from "../screens/MapScreen";

import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Camera";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  React.useLayoutEffect(() => {
    const navigationOptions = { headerTitle: getHeaderTitle(route) };
    const image = require("../assets/bitmojiFace.png");

    if (getHeaderTitle(route) === "Stories") {
      navigationOptions.headerRight = () => (
        <TouchableOpacity
          style={styles.Circle}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Ionicons
            name={"person-circle-outline"}
            size={40}
            style={{ marginRight: 5 }}
            color={Colors.snapblue}
          />
        </TouchableOpacity>
      );
    } else {
      navigationOptions.headerRight = null;
    }

    if (getHeaderTitle(route) === "Lounge") {
        //navigation.setOptions({headerShown: false});
        navigationOptions.headerShown = false;
          // navigationOptions.headerRight = () => (
          //   <TouchableOpacity
          //     style={styles.Circle}
          //     onPress={() => {
          //       navigation.navigate("Profile");
          //     }}
          //   >
          //     <Ionicons
          //       name={"person-circle-outline"}
          //       size={40}
          //       style={{ marginRight: 5 }}
          //       color={Colors.snapblue}
          //     />
          //   </TouchableOpacity>
          // );
          // navigationOptions.headerLeft = () => (
          //   <TouchableOpacity
          //     style={styles.Circle}
          //     onPress={() => {
          //       navigation.navigate("Profile");
          //     }}
          //   >
          //     <Image source={image} style={styles.image}></Image>
          //   </TouchableOpacity>
          // );
        } else {
      navigationOptions.headerShown = true;
    }
    navigation.setOptions(navigationOptions);
  }, [navigation, route]);

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tintColor,
        showLabel: true,
        style: {
          backgroundColor: "black",
          paddingTop: 5,
          borderColor: "black",
        },
      }}
    >
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Snap Map",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="map-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={HomeScreen}
        options={{
          title: "Your Chats",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="chatbox-ellipses-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: "Camera",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="camera-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Stories"
        component={StoriesScreen}
        options={{
          title: "Your Stories",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="people-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Spotlight"
        component={SpotlightScreen}
        options={{
          title: "Spotlight",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="play-outline" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Map":
      return "Map";
    case "Chats":
      return "Chats";
    case "Chat":
      return "Chat";
    case "Profile":
      return "Profile";
    case "Stories":
      return "Stories";
    case "Camera":
      return "Camera";
    case "Friends":
      return "Friends";
    case "Lounge":
      return "Lounge";
    case "LoungeIntro":
      return "LoungeIntro";
    case "Spotlight":
      return "Spotlight";
    case "QuestionOne":
      return "QuestionOne";
    case "QuestionTwo":
      return "QuestionTwo";
  }
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "black",
  },
  lounge: {
    flex: 1,
    backgroundColor: "#ACACCA",
    paddingTop: StatusBar.currentHeight,
  },
  loungeHeader: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
  },
});
