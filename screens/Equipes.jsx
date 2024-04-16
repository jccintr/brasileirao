import { StyleSheet, FlatList, View,ActivityIndicator, TouchableOpacity, StatusBar,Text } from 'react-native';
import React, {useState,useEffect} from 'react';
import { cores } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import AssetImage from '../components/reusable/AssetImage';
import WidthSpacer from '../components/reusable/WidthSpacer';
import ReusableText from '../components/reusable/ReusableText';
import reusable from '../components/reusable/resusable.style';
import Api from '../Api2';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { Feather } from '@expo/vector-icons';
import Separator from '../components/reusable/Separator';
import EquipesList from '../components/EquipesList';
import CardPartida2 from '../components/cards/CardPartida2';
import { useTheme } from '@react-navigation/native';


const Equipes = () => {
    const {colors,darkMode} = useTheme();
    const [equipes,setEquipes] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [select, setSelect] = useState(null);
    const [jogos,setJogos] = useState([]);


    useEffect(()=>{
        getEquipes();
      },[]);

      const getJogos = async (idEquipe) => {
        setIsLoading(true);
        let json = await Api.getJogosByEquipe(idEquipe);
        for (let i=0;i<json.length;i++){

          if(json[i].match_hometeam_id=='1929'){
            json[i].match_hometeam_name = 'Atlético-GO';
            }
          if(json[i].match_hometeam_id=='1802'){
            json[i].match_hometeam_name = 'Criciúma';
            }
            if(json[i].match_hometeam_id=='1748'){
              json[i].match_hometeam_name = 'Vitória';
              }

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
          if(json[i].match_awayteam_id=='1929'){
            json[i].match_awayteam_name = 'Atlético-GO';
          }
          if(json[i].match_awayteam_id=='1802'){
            json[i].match_awayteam_name = 'Criciúma';
          }
          if(json[i].match_awayteam_id=='1748'){
            json[i].match_awayteam_name = 'Vitória';
          }
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
    
     const getEquipes = async () => {
       setIsLoading(true);
       let json = await Api.getEquipes();
       json.sort((a,b) => (a.team_name > b.team_name) ? 1 : ((b.team_name > a.team_name) ? -1 : 0));
       for(let i=0;i<json.length;i++){

            if(json[i].team_key=='1929'){
              json[i].team_name = 'Atlético-GO'
            }
            if(json[i].team_key=='1748'){
              json[i].team_name = 'Vitória'
            }
            if(json[i].team_key=='1802'){
              json[i].team_name = 'Criciúma'
            }
           
            if(json[i].team_name=='América Mineiro'){
              json[i].team_name = 'América-MG';
            }
            if(json[i].team_name=='Athletico Paranaense'){
              json[i].team_name = 'Athlético-PR';
            }
            if(json[i].team_name=='Atlético Mineiro'){
              json[i].team_name = 'Atlético-MG';
            }
            if(json[i].team_name=='Vasco da Gama'){
              json[i].team_name = 'Vasco';
            }
    
        }
       setEquipes(json);
       setIsLoading(false);
    }

    const onSelectEquipe = (idEquipe) => {
         getJogos(idEquipe);
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
                {isLoading?<ActivityIndicator size={'large'} color={colors.title}/>:<TouchableOpacity onPress={()=>getEquipes()}>
                    <Feather name="refresh-cw" size={26} color={colors.title} />
                </TouchableOpacity>}
            </View>
            <HeightSpacer h={5}/>
            <EquipesList equipes={equipes} onSelectEquipe={onSelectEquipe} select={select} setSelect={setSelect}/>
            {select===null&&<Text style={{textAlign:'center',color:colors.title,position:'absolute',left:5,right:5,top:'50%',}}>Selecione uma equipe para exibir os seus jogos.</Text>}
            <HeightSpacer h={10} />
            {jogos.length>0&&!isLoading&&<FlatList
                data={jogos}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.match_id}
                ItemSeparatorComponent={<Separator/>}
                renderItem={({item})=>(<CardPartida2 item={item}/>)}
            />}
 

</SafeAreaView>
  )
}

export default Equipes

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: 10,
      paddingHorizontal:15,
      paddingBottom:80,
  }
  });