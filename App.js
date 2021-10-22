import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LogIn from './screens/LogIn'
import OtpCode from './screens/OtpCode'
import UserInformation from './screens/UserInformation'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="OtpCode" component={OtpCode} />
        <Stack.Screen name="UserInformation" component={UserInformation} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

