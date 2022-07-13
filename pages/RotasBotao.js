import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const navBotao = createStackNavigator();

import ListarFrutas from './Frutas/ListarFrutas';
import CadastrarFruta from './Frutas/CadastrarFrutas';
import AlterarFrutas from './Frutas/AlterarFrutas';

export default function RotasBotao(){

return(
    <navBotao.Navigator>

    <navBotao.Screen name="Lista" component={ListaFrutas} options ={{headerShow:false}}/>
    <navBotao.Screen name="Cadastrar" component={ListaFrutas} options ={{headerShow:false}}/>
    <navBotao.Screen name="Alterar" component={ListaFrutas} options ={{headerShow:false}}/>  
    
    </navBotao.Navigator>
     );

  }