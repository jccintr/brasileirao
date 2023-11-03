//import {useState} from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

import { DarkTheme } from './theme/DarkTheme';
import { LightTheme } from './theme/LightTheme';

export default function App() {
  //const [isDarkMode,setIsDarkMode] = useState(true);
  const theme = useColorScheme();
  return (
 
   <NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator>
          <Stack.Screen name='BottomTab' component={BottomTabNavigation} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
