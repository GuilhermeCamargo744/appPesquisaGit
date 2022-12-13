import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Detalhes from "../Screens/Detalhes";
import WebViewIssues from "../Screens/WebView";

const Stack = createNativeStackNavigator();

function routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WebView"
        component={WebViewIssues}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default routes;
