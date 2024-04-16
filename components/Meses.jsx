import { StyleSheet, Text,TouchableOpacity,FlatList} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import { cores } from '../theme';
import { useTheme } from '@react-navigation/native';


const Meses = ({onSelectMonth,month}) => {
  const {colors,darkMode} = useTheme();
    const [select, setSelect] = useState(month-4);
    
    const meses = [
    {
      id:4,
      nome:'Abril',
      start:'2024-04-01',
      end:'2024-04-30'
    },
    {
        id:5,
        nome:'Maio',
        start:'2024-05-01',
        end:'2024-05-31'
      },
      {
        id:6,
        nome:'Junho',
        start:'2024-06-01',
        end:'2024-06-30'
      },
      {
        id:7,
        nome:'Julho',
        start:'2024-07-01',
        end:'2024-07-31'
      },
      {
        id:8,
        nome:'Agosto',
        start:'2023-08-01',
        end:'2023-08-31'
      },
      {
        id:9,
        nome:'Setembro',
        start:'2024-09-01',
        end:'2024-09-30'
      },
      {
        id:10,
        nome:'Outubro',
        start:'2024-10-01',
        end:'2024-10-31'
      },
      {
      id:11,
      nome:'Novembro',
      start:'2024-11-01',
      end:'2024-11-30'
    },
    {
        id:12,
        nome:'Dezembro',
        start:'2024-12-01',
        end:'2024-12-31'
      },
]

/*
useEffect(()=>{
  scroll2Index();
},[]);

const getItemLayout = (data, index) => ({
  length: 50,
  offset: 50 * index,
  index,
})

const scroll2Index = () =>{
  flatListRef.current.scrollToIndex({index: month-4, animated: true})
}
 */

return (
    <FlatList
        //getItemLayout={getItemLayout}
        //ref={flatListRef}
        data={meses}
        horizontal
        keyExtractor={(item)=>item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
            return (
                <TouchableOpacity style={[styles.container,index===select?styles.containerSelected:'']} onPress={() =>{setSelect(index);onSelectMonth(item)}}>
                    <Text style={{color:index===select?cores.white:cores.black}}>{item.nome}</Text>
                </TouchableOpacity>
            );
        }}
    />
  )


}

export default Meses

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