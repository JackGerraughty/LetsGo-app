import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from './src/screens/MessagesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddPostScreen from './src/screens/AddPostScreen';
import ProfileScreen from './src/screens/Profile';
import EventsScreen from './src/screens/EventsScreen';
import FeedScreen from './src/screens/FeedScreen';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'




function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();


  return (
    <TamaguiProvider config={config}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Profile" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName='';

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Add Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Events') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel:false,
        tabBarIconStyle: {
          marginTop: 0,
          marginBottom: 0,
          alignSelf: 'center',
        },
        tabBarStyle: {
          height: '7%', // optional: control overall tab bar height
        },
      })}
      >
        <Tab.Screen name="Events" component={EventsScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Add Post" component={AddPostScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </TamaguiProvider>
  );
}


export default App;
