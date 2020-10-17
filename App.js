import * as React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Index from './components/Index'
import Hola from './components/Hola'
import Api from './components/Api'





const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName='Screen3' >
          <Stack.Screen name="Screen1" component={Api} />
          <Stack.Screen name="Screen2" component={Hola} />
          <Stack.Screen name="Screen3" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
