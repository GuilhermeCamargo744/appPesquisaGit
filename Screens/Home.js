/* Feito por Guilherme Henrique de Camargo e Silva */

import React, {useState, useEffect} from 'react'
import { 
	StatusBar,
	Text, 
	View, 
	SafeAreaView, 
	TextInput, 
	TouchableOpacity, 
	ScrollView,
	Animated
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios";
import style from '../styles/styleHome';


export default function Home(props) {
	const [offset] = useState(new Animated.ValueXY({x: 0, y:200}));
	const [nome, setNome] = useState([])
	const [posts, setPosts] = useState([])

async function pesquisar(){
	axios.get(`https://api.github.com/users/${nome}/repos`)
	.then((response) =>{
		setPosts(response.data)
	})
	.catch((error) =>{
		alert('Repositório não encontrado!')
		console.log(error)
	})

}
	
	useEffect(() =>{
		Animated.spring(offset.y, {
			toValue: 0,
			speed: 0.5,
		}).start();
	}, [])

	return (
		<SafeAreaView style={style.container}>
			<StatusBar 
			hidden={true}
			/>
				<Animated.ScrollView style={[
				
				{
					transform:[
						
							{ translateY: offset.y}
						
					]
				}
			]}>
					<View style={style.cabec}>
						<FontAwesome5 name="github" size={70} color="#FFF" />
					</View>
					<View style={style.pesqui}>
						<Text style={style.texto1}>
							Pesquisar
						</Text>
						<Text style={style.texto2}>
							Repositórios:
						</Text>
						<TextInput 
						style={style.input} 
						placeholder={"Buscar repositorios Git..."}
						onChangeText={setNome}
						>

						</TextInput>

						<View style={style.search}>
							<TouchableOpacity 
							onPress={pesquisar}
							>
								<MaterialCommunityIcons name="card-search" size={100} color="#722FE0"/>
							</TouchableOpacity>
						</View>
					</View>
					<View>
						{posts.map((post, key) =>{
							return(
								<Animated.View style={{flex: 1, alignItems: 'center'}}>
									<TouchableOpacity onPress={()=> 
									props.navigation.navigate('Detalhes', 
									{nome: post.name, 
									descricao: post.description,
									login: post.owner.login,
									avatar: post.owner.avatar_url,
									issues: post.issues_url,
									linguagem: post.language
									})}>
										<View style={style.modalView} key={post.id}>
											<FontAwesome5 name="github" size={50} color="#722FE0" />
											<Text style={style.modalText}>{post.name}</Text>
										</View>
									</TouchableOpacity>
								</Animated.View>
							
							)
						})}
					</View>
				</Animated.ScrollView>
			
			<View style={style.footer}></View>
		</SafeAreaView>
	)
}


/* Feito por Guilherme Henrique de Camargo e Silva */




