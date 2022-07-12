import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const navBotao = createStackNavigator();

import ListarFrutas from './Frutas/ListarFrutas';
import CadastrarFruta from './Frutas/CadastrarFrutas';
import AlterarFrutas from './Frutas/AlterarFrutas';

export default function()