import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './Profile';
import MessagesScreen from './MessagesScreen';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Messages" component={MessagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackScreen;