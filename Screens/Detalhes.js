/* Feito por Guilherme Henrique de Camargo e Silva */

import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import style from "../styles/styleDetalhes";

export default function Detalhes(props) {
  const { login, nome, avatar, descricao, issues, linguagem } =
    props?.route?.params;

  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <View>
            <FontAwesome5 name="github" size={60} color="#722FE0" />
            <Text style={style.voltar}>Voltar</Text>
          </View>
        </TouchableOpacity>
        <View style={style.View}>
          <Text style={style.titulo}>Nome diretório:</Text>
          <Text style={style.texto}>{nome}</Text>
        </View>
        <View style={style.View}>
          <Text style={style.titulo}>avatar:</Text>
          <View style={style.ViewAvatar}>
            <Image style={style.ImageAvatar} source={{ uri: avatar }} />
          </View>
        </View>
        <View style={style.View}>
          <Text style={style.titulo}>Descrição:</Text>
          <Text style={style.texto}>{descricao}</Text>
        </View>
        <View style={style.View}>
          <Text style={style.titulo}>Login:</Text>
          <Text style={style.texto}>{login}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("WebView", {
              issues: issues,
            });
          }}
        >
          <View style={style.View}>
            <Text style={style.titulo}>Issues:</Text>
            <Text style={style.texto}>{issues}</Text>
          </View>
        </TouchableOpacity>
        <View style={style.View}>
          <Text style={style.titulo}>Linguagem:</Text>
          <Text style={style.texto}>{linguagem}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

/* Feito por Guilherme Henrique de Camargo e Silva */
