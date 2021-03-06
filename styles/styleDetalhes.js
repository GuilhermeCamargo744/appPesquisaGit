/* Feito por Guilherme Henrique de Camargo e Silva */

import React from "react"
import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
	container:{
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
		margin: 20,
		borderRadius: 10,

	},
	View:{
		backgroundColor: "#722FE0",
		height: 240,
		width: 240,
		borderRadius: 50,
		marginBottom: 20,
		justifyContent: 'center',
		marginHorizontal: 10,
		alignItems: 'center'
	},
	texto:{
		color: '#FFF',
		fontWeight: 'bold',

	},
	titulo:{
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: 10
	},
	voltar:{
		color: '#722FE0',
		fontWeight: 'bold',
	},
	ViewAvatar:{
		flex: 1
	},
	ImageAvatar:{
		flex: 2,
		width: 200,
		margin: 15,
		borderRadius: 15
	}
})

export default style