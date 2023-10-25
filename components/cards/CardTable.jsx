import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { cores } from '../../theme';
import NetWorkImage from '../reusable/NetWorkImage';
import {SvgUri} from 'react-native-svg';
import WidthSpacer from '../reusable/WidthSpacer';


const CardTable = ({item}) => {
  return (
    <View style={[styles.container,item.position<7?styles.libertadores:'',(item.position>6&&item.position<13)?styles.sulamericana:'',item.position>16?styles.rebaixamento:'']}>
      <View style={{flexDirection:'row'}}>
        <Text>{item.position}</Text>
        {/*<View style={{width:16,alignItems:'center'}}>
            <Text>{item.position}</Text>
  </View>*/}
        <WidthSpacer w={5}/>
        {item.team.crest.includes('svg') ?
          <SvgUri width={20} height={20} uri={item.team.crest}/>
          :
          <NetWorkImage height={20} width={20} source={item.team.crest}/>
        }
        <WidthSpacer w={5}/>
        <Text>{item.team.shortName}</Text>
      </View>

      <View style={{flexDirection:'row'}}>
         <View style={styles.viewNumber}>
            <Text style={[styles.textNumber,{fontWeight:'bold'}]}>{item.points}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.playedGames}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.won}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.draw}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.lost}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.goalDifference}</Text>
         </View>
         
       
      </View>
    </View>
  )
}

/*
"playedGames": 26,
					"form": null,
					"won": 17,
					"draw": 4,
					"lost": 5,
					"points": 55,
					"goalsFor": 42,
					"goalsAgainst": 16,
					"goalDifference": 26

*/

export default CardTable

const styles = StyleSheet.create({
  container: {
    
    paddingVertical:5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
   // opacity:0.6,
    paddingLeft: 5,
    

  },
  viewNumber:{
     width: 25,
     alignItems: 'center',
    

  },
  textNumber: {
       
  },
  libertadores:{
    borderLeftWidth:5,
    borderLeftColor: cores.green,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },
  sulamericana:{
    borderLeftWidth:5,
    borderLeftColor: cores.orange,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },
  rebaixamento:{
    borderLeftWidth:5,
    borderLeftColor: cores.red,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  }
})