/* Feito por Guilherme Henrique de Camargo e Silva */

import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer} from '@react-navigation/native'
import Routes from './routes/routes';

function App() {
	return (
	<NavigationContainer>
		<Routes/>
	</NavigationContainer>
	)
}


export default App