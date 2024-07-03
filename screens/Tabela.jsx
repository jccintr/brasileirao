import { StyleSheet, FlatList, View,ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native';
import React, {useState,useEffect,useContext} from 'react';
import { cores } from '../theme';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AssetImage from '../components/reusable/AssetImage';
import WidthSpacer from '../components/reusable/WidthSpacer';
import ReusableText from '../components/reusable/ReusableText';
import reusable from '../components/reusable/resusable.style';
import Api from '../Api2';
import CardTable2 from '../components/cards/CardTable2';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { Feather } from '@expo/vector-icons';
import Separator from '../components/reusable/Separator';
import { FontAwesome5 } from '@expo/vector-icons';
import ModalChave from '../components/ModalChave';
import { ApiKeyContext } from '../context/ApiKeyContext';



const Tabela = () => {
  const {colors,darkMode} = useTheme();
  const [isLoading,setIsLoading] = useState(false);
  const [tabela,setTabela] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  const {apiKey} = useContext(ApiKeyContext);
  
  useEffect(()=>{
     getTabela2();
  },[]);



const getTabela2 = async () => {
  setIsLoading(true);
  let json = await Api.getTable(apiKey);

  for(let i=0;i<json.length;i++){

    if(json[i].team_id=='551'){
      json[i].team_name = 'Athlético-PR'
    }
    if(json[i].team_id=='1865'){
      json[i].team_name = 'Atlético-MG'
    }
    if(json[i].team_id=='1929'){
      json[i].team_name = 'Atlético-GO'
    }
    if(json[i].team_id=='1748'){
      json[i].team_name = 'Vitória'
    }
    if(json[i].team_id=='1802'){
      json[i].team_name = 'Criciúma'
    }
    if(json[i].team_name=='America Mineiro'){
      json[i].team_name = 'América-MG'
    }
    if(json[i].team_name=='Vasco da Gama'){
      json[i].team_name = 'Vasco'
    }
    if(json[i].team_name=='Sao Paulo'){
      json[i].team_name = 'São Paulo'
    }
    if(json[i].team_name=='Cuiaba'){
      json[i].team_name = 'Cuiabá'
    }
    if(json[i].team_name=='Gremio'){
      json[i].team_name = 'Grêmio'
    }
    if(json[i].team_name=='Goias'){
      json[i].team_name = 'Goiás'
    }

  }
  setTabela(json);
  setIsLoading(false);
}


  const onRefreshTable = () => {
      getTabela2();
  }

  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors.background}]}>
      <StatusBar animated={true} backgroundColor={colors.background} barStyle={darkMode?'light-content':'dark-content'}/>
      <View style={reusable.rowWithSpace('space-between')}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AssetImage mode={'contain'} width={40} height={40}  source={(require('../assets/logo445.png'))}/>
                <WidthSpacer w={5}/>
                <ReusableText text={'Brasileirão 2024'} size={20} color={colors.title} />
            </View>
            <View style={{flexDirection: 'row', gap:10,alignItems:'center'}}>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                      <FontAwesome5 name="key" size={20} color={colors.title} />
                </TouchableOpacity>
                {isLoading?<ActivityIndicator size={'large'} color={colors.title}/>:<TouchableOpacity onPress={onRefreshTable}>
                    <Feather name="refresh-cw" size={26} color={colors.title} />
                </TouchableOpacity>}
            </View>
      </View>
      <HeightSpacer h={10} />
      <FlatList
            data={tabela}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.overall_league_position}
            ItemSeparatorComponent={<Separator/>}
            renderItem={({item})=>(
                <CardTable2 item={item}/>
            )}
          />
       <ModalChave visible={modalVisible} setVisible={setModalVisible} />
 </SafeAreaView>
  )
}

export default Tabela

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 10,
    paddingHorizontal:15,
    paddingBottom:80,
}
});
