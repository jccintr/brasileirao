import { StyleSheet, FlatList, View,ActivityIndicator, TouchableOpacity, StatusBar,Text } from 'react-native';
import React, {useState,useEffect} from 'react';
import { cores } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import AssetImage from '../components/reusable/AssetImage';
import WidthSpacer from '../components/reusable/WidthSpacer';
import ReusableText from '../components/reusable/ReusableText';
import reusable from '../components/reusable/resusable.style';
//import Api from '../Api';
import Api from '../Api2';
import CardTable from '../components/cards/CardTable';
import CardTable2 from '../components/cards/CardTable2';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { Feather } from '@expo/vector-icons';
import Separator from '../components/reusable/Separator';



const Tabela = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [tabela,setTabela] = useState([]);
  
  useEffect(()=>{
     getTabela2();
  },[]);



const getTabela2 = async () => {
  setIsLoading(true);
  let json = await Api.getTable();

  for(let i=0;i<json.length;i++){

    if(json[i].team_id=='551'){
      json[i].team_name = 'Athlético-PR'
    }
    if(json[i].team_id=='1865'){
      json[i].team_name = 'Atlético-MG'
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
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={cores.white} barStyle="dark-content"/>
      <View style={reusable.rowWithSpace('space-between')}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AssetImage mode={'contain'} width={40} height={40}  source={(require('../assets/logo445.png'))}/>
                <WidthSpacer w={5}/>
                <ReusableText text={'Brasileirão 2023'} size={20} color={cores.blue} />
            </View>
            {isLoading?<ActivityIndicator size={'large'} color={cores.blue}/>:<TouchableOpacity onPress={onRefreshTable}>
                <Feather name="refresh-cw" size={26} color={cores.blue} />
            </TouchableOpacity>}
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
 </SafeAreaView>
  )
}

export default Tabela

const styles = StyleSheet.create({
  container: {
    backgroundColor: cores.white,
    flex:1,
    paddingTop: 10,
    paddingHorizontal:15,
    paddingBottom:80,
}
});
