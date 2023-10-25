import { StyleSheet, Text, View } from 'react-native';
import { cores } from '../../theme';
import NetWorkImage from '../reusable/NetWorkImage';
import HeightSpacer from '../reusable/HeightSpacer';

const diaSemana = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']



const statusJogo = (status) => {

}

const tempoJogo = (status) => {

     if(status=='Finished') 
          return "";
     if(status=='45+' || status =='90+')
          return status
     if(status=='Half Time')
          return 'Intervalo';   
     if(status.length<3)
        return status+"'";
      
     return "";   
}

const CardPartida2 = ({item}) => {

  const formataData = (strData) => {
    const splitData = strData.split('-');
    let d = new Date(splitData[0], splitData[1]-1, splitData[2], 0, 0, 0, 0);
    return diaSemana[d.getDay()] + ' ' + splitData[2]+'/'+splitData[1];
  }

  return (
    <View style={styles.container}>
      {item.match_status=='Postponed'?<Text style={{fontWeight:'bold',color:cores.blue}}>Partida Adiada</Text>:
      <Text style={{fontWeight:'bold',color:cores.blue}}>{formataData(item.match_date)} {item.match_time}</Text>}
      <HeightSpacer h={10} />
      <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>

        <View style={{alignItems:'center',width:100}}>
            <NetWorkImage height={50} width={50} source={item.team_home_badge}/>
            <HeightSpacer h={5}/>
            <Text>{item.match_hometeam_name}</Text>
        </View>

        {item.match_status==='Finished'&&<View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:60}}>
            <Text style={styles.scoreText}>{item.match_hometeam_score}</Text>
            <Text style={{fontSize:14,fontWeight:'bold'}}>X</Text>
            <Text style={styles.scoreText}>{item.match_awayteam_score}</Text>
        </View>}

        {(item.match_status!=='Finished'&&item.match_status.length>0&&item.match_status!=='Postponed')&&
          <View style={{alignItems:'center'}}>
               <View style={styles.live}>
                  <Text style={styles.liveText}>EM ANDAMENTO</Text>
               </View>
               <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',width:60}}>
                   <Text style={styles.scoreText}>{item.match_hometeam_score}</Text>
                   <Text style={{fontSize:14,fontWeight:'bold'}}>X</Text>
                   <Text style={styles.scoreText}>{item.match_awayteam_score}</Text>
               </View>
               <View style={styles.time}>
                  <Text style={styles.timeText}>{tempoJogo(item.match_status)}</Text>
               </View>
          </View>
        }

        {item.match_status==''&&item.match_status.trim().length===0&&<View style={styles.realizar}><Text style={styles.realizarText}>A REALIZAR</Text></View>}

        <View style={{alignItems:'center',width:100}}>
            <NetWorkImage height={50} width={50} source={item.team_away_badge}/>
            <HeightSpacer h={5}/>    
            <Text>{item.match_awayteam_name}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardPartida2

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
  },
  live:{
    borderWidth:1,
    borderColor: cores.green,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:2,
  },
  liveText:{
    fontSize: 10,
    color:cores.green
  },
  time:{
    
    borderColor: cores.blue,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:2,
  },
  timeText:{
    fontSize: 12,
    color:cores.black,
    fontWeight:'bold',
  }
})