import { StyleSheet, Text,TouchableOpacity,FlatList} from 'react-native';
import React, {useState,useEffect} from 'react';
import { cores } from '../theme';

const Rodadas = ({onSelectRodada}) => {
    const [select, setSelect] = useState(0);
    const [rodadas,setRodadas] = useState([]);


    useEffect(()=>{
        const criaRodadas = () => {
        let arrRodadas = [];
        for(let i=1;i<=38;i++){
            let rodada = {id:i,title: 'Rodada '+i};
            arrRodadas.push(rodada);
        }
        setRodadas(arrRodadas);
        }
        criaRodadas();
        
    }, []);


    return (
        <FlatList
            data={rodadas}
            horizontal
            keyExtractor={(item)=>item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
                return (
                    <TouchableOpacity style={[styles.container,index===select?styles.containerSelected:'']} onPress={() =>{setSelect(index);onSelectRodada(item.id)}}>
                        <Text style={{color:index===select?cores.white:cores.black}}>{item.title}</Text>
                    </TouchableOpacity>
                );
            }}
        />
      )
}

export default Rodadas

const styles = StyleSheet.create({
    container:{
     alignItems: 'center',
     justifyContent:'center',
     paddingHorizontal:10,
     height: 30,
     borderRadius:8,
     marginHorizontal: 4,
     backgroundColor: cores.lightGrey,
     marginBottom:5,
    },
    containerSelected:{
     backgroundColor: cores.blue,
    }
 })