/* Feito por Guilherme Henrique de Camargo e Silva */

import React from "react"
import { StyleSheet } from 'react-native'


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



export default style