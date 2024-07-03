//import {useState} from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { ApiKeyContext } from './context/ApiKeyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme } from './theme/DarkTheme';
import { LightTheme } from './theme/LightTheme';
import { useState,useEffect } from 'react';

const Stack = createNativeStackNavigator();



export default function App() {
  //const [isDarkMode,setIsDarkMode] = useState(true);
  const theme = useColorScheme();
  const [apiKey,setApiKey] = useState('');

  useEffect(()=>{
    const loadApiKey = async () => {
      const key = await AsyncStorage.getItem('apiKey');
      if(key){
          setApiKey(key);
      }
    };
    loadApiKey();
},[]);

  return (
    <ApiKeyContext.Provider value={{apiKey,setApiKey}}>
        <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
          <Stack.Navigator>
              <Stack.Screen name='BottomTab' component={BottomTabNavigation} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </ApiKeyContext.Provider>
   
  );
}
