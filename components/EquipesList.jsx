import { StyleSheet, Text,TouchableOpacity,FlatList} from 'react-native';
import React, {useState,} from 'react';
import { cores } from '../theme';
import NetWorkImage from './reusable/NetWorkImage';
import { useTheme } from '@react-navigation/native';

const EquipesList = ({onSelectEquipe,equipes,select,setSelect}) => {
    const {colors,darkMode} = useTheme();
    
  return (
    <FlatList
        data={equipes}
        horizontal
        keyExtractor={(item)=>item.team_key}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
            return (
                <TouchableOpacity style={[styles.container,index===select?styles.containerSelected:'']} onPress={() =>{setSelect(index);onSelectEquipe(item.team_key)}}>
                    <NetWorkImage height={50} width={50} source={item.team_badge}/>
                    <Text style={{color:colors.text}}>{item.team_name}</Text>
                </TouchableOpacity>
            );
        }}
    />
  )
}

export default EquipesList

const styles = StyleSheet.create({
    container:{
     alignItems: 'center',
     justifyContent:'center',
     paddingHorizontal:10,
     height: 80,
     minWidth: 80,
     borderRadius:8,
     marginHorizontal: 4,
     borderColor: cores.lightGrey,
     borderWidth: 1,
     marginBottom:30,
     
    },
    containerSelected:{
     borderWidth: 2,
     borderColor: cores.blue,
    }
 })