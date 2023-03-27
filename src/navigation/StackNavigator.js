import React from 'react';

import ColaboradoresScreen from '../screens/ColaboradoresScreen';
import ConcursosScreen from '../screens/ConcursosScreen';
import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import ConferenciasScreen from '../screens/ConferenciasScreen';
import EspaciosAsignadosScreen from '../screens/EspaciosAsignadosScreen';
import EventosScreen from '../screens/EventosScreen';
import ParticipantesScreen from '../screens/ParticipantesScreen';
import PresentadoresScreen from '../screens/PresentadoresScreen';
import TalleresScreen from '../screens/TalleresScreen';
import UsuariosScreen from '../screens/UsuariosScreen';
import AsignaConcursosScreen from '../screens/AsignaConcursosScreen';
import AsignaTallConfScreen from '../screens/AsignaTallConfScreen';
import AsignaTallScreen from '../screens/AsignaTallScreen';
import LoginScreen from "../screens/LoginScreen";

const StackNavigatior = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: colors.blueDark,
        },
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen
        name='ColaboradoresScreen'
        component={ColaboradoresScreen}
      />
      <Stack.Screen name='ConcursosScreen' component={ConcursosScreen} />
      <Stack.Screen name='ConferenciasScreen' component={ConferenciasScreen} />
      <Stack.Screen
        name='EspaciosAsignadosScreen'
        component={EspaciosAsignadosScreen}
      />
      <Stack.Screen name='EventosScreen' component={EventosScreen} />
      <Stack.Screen
        name='ParticipantesScreen'
        component={ParticipantesScreen}
      />
      <Stack.Screen
        name='PresentadoresScreen'
        component={PresentadoresScreen}
      />
      <Stack.Screen name='TalleresScreen' component={TalleresScreen} />
      <Stack.Screen name='UsuariosScreen' component={UsuariosScreen} />
      <Stack.Screen
        name='AsignaConcursosScreen'
        component={AsignaConcursosScreen}
      />
      <Stack.Screen
        name='AsignaTallConfScreen'
        component={AsignaTallConfScreen}
      />
      <Stack.Screen name='AsignaTallScreen' component={AsignaTallScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigatior;
