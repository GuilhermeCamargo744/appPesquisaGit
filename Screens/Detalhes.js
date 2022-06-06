/* Feito por Guilherme Henrique de Camargo e Silva */

import React,{useState} from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons'; 
import style from '../styles/styleDetalhes';
import { WebView } from 'react-native-webview'

export default function Detalhes (props) {
	const [url, setUrl] = useState([])



		axios.get(`https://api.github.com/repos/${props.route.params.login}/${props.route.params.nome}/issues`)
		.then((response) =>{
			setUrl(response.data)
		})
		.catch((error) =>{
			alert('Erro ao Acessar o site!')
			console.log(error)
		})
	
	

		


		return (
			<View style={style.container}>
				<ScrollView>
					<TouchableOpacity onPress={() =>{
						props.navigation.navigate('Home')
					}}>
						<View>
							<FontAwesome5 name="github" size={60} color="#722FE0" />
							<Text style={style.voltar}>Voltar</Text>
						</View>
					</TouchableOpacity>
					<View style={style.View}>
						<Text style={style.titulo}>Nome diretório:</Text>
						<Text style={style.texto}>{props.route.params.nome}</Text>
					</View>
					<View style={style.View}>	
						<Text style={style.titulo}>Descrição:</Text>
						<Text style={style.texto}>{props.route.params.descricao}</Text>
					</View>
					<View style={style.View}>
						<Text style={style.titulo}>Login:</Text>
						<Text style={style.texto}>{props.route.params.login}</Text>
					</View>
					<View style={style.View}>
						<Text style={style.titulo}>avatar:</Text>
						<Text style={style.texto}>{props.route.params.avatar}</Text>
					</View>
					<TouchableOpacity onPress={()=>{
						return(
						<WebView
						source={{ uri: url}}
						/>
					)
					}}>
						<View style={style.View}>
							<Text style={style.titulo}>Issues:</Text>	
							<Text style={style.texto}>{props.route.params.issues}</Text>
						</View>
					</TouchableOpacity>
					<View style={style.View}>
						<Text style={style.titulo}>Linguagem:</Text>
						<Text style={style.texto}>{props.route.params.linguagem}</Text>
					</View>
				</ScrollView>
			</View>
		)
	}


/* Feito por Guilherme Henrique de Camargo e Silva */

