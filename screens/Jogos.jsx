import { StyleSheet, FlatList, View,ActivityIndicator, TouchableOpacity, StatusBar } from 'react-native';
import React, {useState,useEffect} from 'react';
import { cores } from '../theme';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AssetImage from '../components/reusable/AssetImage';
import WidthSpacer from '../components/reusable/WidthSpacer';
import ReusableText from '../components/reusable/ReusableText';
import reusable from '../components/reusable/resusable.style';
import Api from '../Api2';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { Feather } from '@expo/vector-icons';
import CardPartida2 from '../components/cards/CardPartida2';
import Separator from '../components/reusable/Separator';
import Meses from '../components/Meses';

const Jogos = () => {
  const {colors,darkMode} = useTheme();
  const [isLoading,setIsLoading] = useState(false);
  const [jogos,setJogos] = useState([]);
  const [month,setMonth] = useState(new Date().getMonth()+1);

  useEffect(()=>{
    let dt = new Date();
   // setMonth(dt.getMonth()+1);
    getJogos(dt.getMonth()+1);
  },[]);

 const getJogos = async (mes) => {
   setIsLoading(true);
   let json = await Api.getJogos(mes,lastday(2023,mes));
   for (let i=0;i<json.length;i++){

      if(json[i].match_hometeam_id=='2015'){
        json[i].match_hometeam_name = 'RB Bragantino';
      }
      if(json[i].match_hometeam_id=='1877'){
        json[i].match_hometeam_name = 'Vasco';
      }
      if(json[i].match_hometeam_id=='1736'){
        json[i].match_hometeam_name = 'América-MG';
      }
      if(json[i].match_hometeam_id=='551'){
        json[i].match_hometeam_name = 'Athlético-PR';
      }
      if(json[i].match_hometeam_id=='1865'){
        json[i].match_hometeam_name = 'Atlético-MG';
      }
      if(json[i].match_hometeam_id=='1875'){
        json[i].match_hometeam_name = 'Botafogo';
      }
      if(json[i].match_hometeam_id=='556'){
        json[i].match_hometeam_name = 'São Paulo';
      }
      if(json[i].match_hometeam_id=='1738'){
        json[i].match_hometeam_name = 'Cuiabá';
      }
      if(json[i].match_hometeam_id=='558'){
        json[i].match_hometeam_name = 'Grêmio';
      }
      if(json[i].match_hometeam_id=='542'){
        json[i].match_hometeam_name = 'Flamengo';
      }
      if(json[i].match_hometeam_id=='1938'){
        json[i].match_hometeam_name = 'Goiás';
      }
      //=========================
      if(json[i].match_awayteam_id=='2015'){
        json[i].match_awayteam_name = 'RB Bragantino';
      }
      if(json[i].match_awayteam_id=='1877'){
        json[i].match_awayteam_name = 'Vasco';
      }
      if(json[i].match_awayteam_id=='1736'){
        json[i].match_awayteam_name = 'América-MG';
      }
      if(json[i].match_awayteam_id=='551'){
        json[i].match_awayteam_name = 'Athlético-PR';
      }
      if(json[i].match_awayteam_id=='1865'){
        json[i].match_awayteam_name = 'Atlético-MG';
      }
      if(json[i].match_awayteam_id=='1875'){
        json[i].match_awayteam_name = 'Botafogo';
      }
      if(json[i].match_awayteam_id=='556'){
        json[i].match_awayteam_name = 'São Paulo';
      }
      if(json[i].match_awayteam_id=='1738'){
        json[i].match_awayteam_name = 'Cuiabá';
      }
      if(json[i].match_awayteam_id=='558'){
        json[i].match_awayteam_name = 'Grêmio';
      }
      if(json[i].match_awayteam_id=='542'){
        json[i].match_awayteam_name = 'Flamengo';
      }
      if(json[i].match_awayteam_id=='1938'){
        json[i].match_awayteam_name = 'Goiás';
      }
      
   }
   setJogos(json);
   setIsLoading(false);
}

const lastday = (y,m) => {
  return  new Date(y, m , 0).getDate();
  }

const onSelectRodada = (rodada) => {
     getJogos(rodada);
}

const onSelectMonth = (month) => {
  getJogos(month.id,lastday(2023,month.id));
}


  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors.background}]}>
        <StatusBar animated={true} backgroundColor={colors.background} barStyle={darkMode?'light-content':'dark-content'}/>
        <View style={reusable.rowWithSpace('space-between')}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <AssetImage mode={'contain'} width={40} height={40}  source={(require('../assets/logo445.png'))}/>
                  <WidthSpacer w={5}/>
                  <ReusableText text={'Brasileirão 2023'} size={20} color={colors.title} />
              </View>
              {isLoading?<ActivityIndicator size={'large'} color={colors.title}/>:<TouchableOpacity onPress={()=>{getJogos(month)}}>
                  <Feather name="refresh-cw" size={26} color={colors.title} />
              </TouchableOpacity>}
        </View>
        <HeightSpacer h={5}/>
        <Meses onSelectMonth={onSelectMonth} month={month}/>
        <HeightSpacer h={10} />
         <FlatList
            data={jogos}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.match_id}
            ItemSeparatorComponent={<Separator/>}
            renderItem={({item})=>(<CardPartida2 item={item}/>)}
          />
 
    </SafeAreaView>
  )
}

export default Jogos

const styles = StyleSheet.create({
  container: {
    backgroundColor: cores.white,
    flex:1,
    paddingTop: 10,
    paddingHorizontal:15,
    paddingBottom:80,
}
});