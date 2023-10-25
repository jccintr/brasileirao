import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { cores } from '../../theme';
import NetWorkImage from '../reusable/NetWorkImage';
//import {SvgUri} from 'react-native-svg';
import WidthSpacer from '../reusable/WidthSpacer';


const CardTable2 = ({item}) => {
  return (
    <View style={[styles.container,item.overall_league_position<7?styles.libertadores:'',(item.overall_league_position>6&&item.overall_league_position<13)?styles.sulamericana:'',item.overall_league_position>16?styles.rebaixamento:'']}>
      <View style={{flexDirection:'row'}}>
        <Text>{item.overall_league_position}</Text>
        
        <WidthSpacer w={5}/>
        <NetWorkImage height={20} width={20} source={item.team_badge}/>
        <WidthSpacer w={5}/>
        <Text>{item.team_name}</Text>
      </View>

      <View style={{flexDirection:'row'}}>
         <View style={styles.viewNumber}>
            <Text style={[styles.textNumber,{fontWeight:'bold'}]}>{item.overall_league_PTS}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.overall_league_payed}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.overall_league_W}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.overall_league_D}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.overall_league_L}</Text>
         </View>
         <View style={styles.viewNumber}>
            <Text style={styles.textNumber}>{item.overall_league_GF - item.overall_league_GA}</Text>
         </View>
         
       
      </View>
    </View>
  )
}


export default CardTable2

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