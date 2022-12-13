import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import style from "../styles/styleDetalhes";

const WebViewIssues = (props) => {
  console.log("props", props);
  const { issues } = props?.route?.params;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{ margin: 20 }}
      >
        <View>
          <FontAwesome5 name="github" size={60} color="#722FE0" />
          <Text style={style.voltar}>Voltar</Text>
        </View>
      </TouchableOpacity>
      <WebView
        source={{
          uri: issues,
        }}
        style={{ marginTop: 10 }}
      />
    </>
  );
};

export default WebViewIssues;
