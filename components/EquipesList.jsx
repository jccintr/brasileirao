import { StyleSheet, Text,TouchableOpacity,FlatList} from 'react-native';
import React, {useState,} from 'react';
import { cores } from '../theme';
import NetWorkImage from './reusable/NetWorkImage';

const EquipesList = ({onSelectEquipe,equipes,select,setSelect}) => {
    
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
                    <Text style={{color:index===select?cores.black:cores.black}}>{item.team_name}</Text>
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
     //backgroundColor: cores.blue,
     borderWidth: 2,
     borderColor: cores.blue,
    }
 })