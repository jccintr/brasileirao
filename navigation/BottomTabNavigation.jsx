import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabela from '../screens/Tabela';
import Jogos from '../screens/Jogos';
import Equipes from '../screens/Equipes';
import Live from '../screens/Live';
import { cores } from '../theme';
import { Ionicons,MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    
    borderRadius:10,
    height: 64,
    position: 'absolute',
    bottom:10,
    left:20,
    right:20,
    paddingBottom:5,
}

const tabBarLabelStyle = {
    fontSize: 14,
    fontWeight: 'bold',
    
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center'
}

// activeColor='#EB6A58'
// inactiveColor='#3e2465'
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator   initialRouteName='Tabela'  tabBarHideKeyboard={true} headerShown={false} >

         <Tab.Screen name='Tabela' component={Tabela} 
          options={
            {   
                tabBarStyle:tabBarStyle,headerShown:false,
                tabBarIcon: ({focused})=> (<Ionicons name={focused?'trophy':'trophy-outline'} color={focused? cores.blue:cores.gray} size={26}/>),
                tabBarLabel:({focused})=><Text style={[styles.tabLabel,{color:focused?cores.blue:cores.gray}]}>Tabela</Text>
            }
            }
        />

        <Tab.Screen name='Jogos' component={Jogos} 
          options={
            {   
                tabBarStyle:tabBarStyle,headerShown:false,
                tabBarIcon: ({focused})=> (<Ionicons name={focused?'football':'football-outline'} color={focused? cores.blue:cores.gray} size={26}/>),
                tabBarLabel:({focused})=><Text style={[styles.tabLabel,{color:focused?cores.blue:cores.gray}]}>Jogos</Text>
            }
            }
        />

       <Tab.Screen name='Equipes' component={Equipes} 
          options={
            {   
                tabBarStyle:tabBarStyle,headerShown:false,
                tabBarIcon: ({focused})=> (<MaterialCommunityIcons name={focused?'police-badge':'police-badge-outline'} color={focused? cores.blue:cores.gray} size={26}/>),
                tabBarLabel:({focused})=><Text style={[styles.tabLabel,{color:focused?cores.blue:cores.gray}]}>Equipes</Text>
            }
            }
        />

        <Tab.Screen name='Live' component={Live} 
          options={
            {   
                tabBarStyle:tabBarStyle,headerShown:false,
                tabBarIcon: ({focused})=> (<MaterialCommunityIcons name={'antenna'} color={focused? cores.blue:cores.gray} size={26}/>),
                tabBarLabel:({focused})=><Text style={[styles.tabLabel,{color:focused?cores.blue:cores.gray}]}>Ao Vivo</Text>
            }
            }
        />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
    tabLabel:{
        fontSize:14,
        color: cores.gray,
        fontWeight: 'bold',
        alignContent:'center'
    },
    selected: {
        color: cores.blue,
    }
})