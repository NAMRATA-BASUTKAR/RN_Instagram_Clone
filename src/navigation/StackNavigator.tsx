import React from 'react';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Footer from '../components/Footer/Footer';
import Detail from '../screens/PostDetail';

const Stack = createNativeStackNavigator();

const InstaNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Profile" component={Footer} />
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InstaNavigator;
