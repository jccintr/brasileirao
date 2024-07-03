import React, { useState,useContext } from 'react'
import { StyleSheet, Text,Modal,View, TextInput, TouchableOpacity} from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeightSpacer from './reusable/HeightSpacer';
import { ApiKeyContext } from '../context/ApiKeyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';


const ModalChave = ({visible,setVisible}) => {
    const {colors,darkMode} = useTheme();
    const {apiKey,setApiKey} = useContext(ApiKeyContext);

    const onSalvar = async () => {
          if(apiKey.trim().length > 0){
             await AsyncStorage.setItem('apiKey', apiKey);
             
          }
          setVisible(false);
    }

  return (
    <Modal visible={visible} animationType="none" statusBarTranslucent={true} transparent={true} onRequestClose={()=>setVisible(false)}>
        <View style={styles.modalBackground}>
            <View style={[styles.modalContainer,{backgroundColor: colors.background,borderColor:colors.title}]}>

                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={[styles.title,{color:colors.title}]}>Chave de Api</Text>
                    <TouchableOpacity onPress={()=>setVisible(false)}>
                        <AntDesign name="close" size={16} color={colors.title} />
                    </TouchableOpacity>
                </View>
               
                <HeightSpacer h={10}/>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.title}}>
                    <TextInput
                        style={{color:colors.title}}
                        placeholder="Informe a chave da api"
                        value={apiKey}
                        onChangeText={t=>setApiKey(t)}
                        placeholderTextColor={'#a1a1a1'}
                    />
                </View>
                <HeightSpacer h={20}/>
                <TouchableOpacity onPress={()=>onSalvar()} style={{backgroundColor: '#00f',height:40,alignItems:'center',justifyContent:'center',borderRadius:10}}>
                    <Text style={{color:colors.title,fontSize:14,fontWeight:'bold'}}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </View>
     </Modal>
  )
}

export default ModalChave

const styles = StyleSheet.create({
    modalBackground:{
       flex:1,
       backgroundColor: 'rgba(0,0,0,0.1)',
       justifyContent: 'center',
       alignItems:'center',
    },
    modalContainer:{
        width: '90%',
       // backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:15,
        elevation:20,
        borderWidth:1,
    },
    title:{
       fontSize: 16,
      
    },
    mensagem:{
        width: '100%',
        textAlign: 'center',
        fontSize:14,
        
    }
})