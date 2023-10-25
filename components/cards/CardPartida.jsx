import { StyleSheet, Text, View } from 'react-native';
import { cores } from '../../theme';
import NetWorkImage from '../reusable/NetWorkImage';
import {SvgUri} from 'react-native-svg';
import HeightSpacer from '../reusable/HeightSpacer';

const CardPartida = ({item}) => {

  const formataData = (strData) => {
    const date = new Date(strData);
    return date.toLocaleString();
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',color:cores.blue}}>{formataData(item.utcDate)}</Text>
      <HeightSpacer h={10} />
      <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>

        <View style={{alignItems:'center',width:100}}>
            {item.homeTeam.crest.includes('svg') ?
              <SvgUri width={50} height={50} uri={item.homeTeam.crest}/>
              :
              <NetWorkImage height={50} width={50} source={item.homeTeam.crest}/>
            }
            <HeightSpacer h={5}/>
            <Text>{item.homeTeam.shortName}</Text>
        </View>

        {item.status==='FINISHED'&&<View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:60}}>
            <Text style={styles.scoreText}>{item.score.fullTime.home}</Text>
            <Text style={{fontSize:14,fontWeight:'bold'}}>X</Text>
            <Text style={styles.scoreText}>{item.score.fullTime.away}</Text>
        </View>}
        
        {item.status==='TIMED'&&<View style={styles.realizar}><Text style={styles.realizarText}>A REALIZAR</Text></View>}

        <View style={{alignItems:'center',width:100}}>
             {item.awayTeam.crest.includes('svg') ?
                  <SvgUri width={50} height={50} uri={item.awayTeam.crest}/>
                  :
                  <NetWorkImage height={50} width={50} source={item.awayTeam.crest}/>
                }
            <HeightSpacer h={5}/>    
            <Text>{item.awayTeam.shortName}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardPartida

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  scoreText:{
    fontSize: 26,
  },
  realizar:{
    borderWidth:1,
    borderColor: cores.red,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:2,
  },
  realizarText:{
    fontSize: 10,
    color:cores.red
  }
})