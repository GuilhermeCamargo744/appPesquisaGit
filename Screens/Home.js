import React, {useState, useRef, useEffect} from 'react'
import { 
	StatusBar,
	StyleSheet,
	Text, 
	View, 
	SafeAreaView, 
	TextInput, 
	TouchableOpacity, 
	ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import axios from "axios";



function Home() {
	const [nome, setNome] = useState([])
	const [posts, setPosts] = useState([])
	const [res, setarTexto] = useState(0);

async function pesquisar(){
	axios.get(`https://api.github.com/users/${nome}/repos`)
	.then((response) =>{
		setPosts(response.data)
	})
	.catch(() =>{
		console.log("Repositório não encontrado!")
	})

}
	
			




	
	

	return (
		<SafeAreaView style={style.container}>
			<StatusBar 
			hidden={true}
			/>
			
				<ScrollView>
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
							<TouchableOpacity onPress={()=>{
								
								}}>
								<View style={style.modalView} key={post.id}>
									<FontAwesome5 name="github" size={50} color="#722FE0" />
									<Text style={style.modalText}>{post.name}</Text>
								</View>
							</TouchableOpacity>
							)
						})}
					</View>
					
				</ScrollView>
			<View style={style.footer}></View>
		</SafeAreaView>
	)
}


const style = StyleSheet.create({
	container:{
		flex: 1,
	},
	cabec:{
		flex: 1,
		flexDirection: 'row',
		backgroundColor: "#722FE0",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	pesqui:{
		flex: 3,
	},
	texto1:{
		fontWeight: 'bold',
		color: "#722FE0",
		marginTop: 30,
		marginLeft: 30,
		fontSize: 25
	},
	texto2:{
		fontWeight: 'bold',
		color: "#722FE0",
		marginLeft: 40,
		fontSize: 25
	},
	input:{
		backgroundColor: '#eee',
		height: 40,
		paddingHorizontal: 1,
		margin: 10,
		marginTop: 30,
		borderRadius: 7
	},
	search:{
		alignItems: 'center'
	},
	footer:{
		backgroundColor: "#722FE0",
		padding: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20
	},
	modalView:{
		backgroundColor: "#eee",
		flex: 1,
		margin: 20,
		borderRadius: 10,
		height: 150,
		width: 230,
		justifyContent: 'center',
		alignItems: 'center'
		
	},
	modalText:{
		fontWeight: 'bold',
		color: '#722FE0',
		fontSize: 20,
		textAlign: 'center'
	}

})


export default Home