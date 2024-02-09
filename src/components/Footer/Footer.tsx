import React, {useState} from 'react';

import Main from '../../screens/Main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Explore from '../../screens/Explore';
import Reels from '../../screens/Reels';
import Profile from '../../screens/Profile';
import AddPost from '../../screens/AddPost';

import {
  CircleUser,
  Home,
  PlaySquare,
  PlusSquare,
  Search,
} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function Footer() {
  const [selected, setSelected] = useState(0);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Main}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            setSelected(0);
            navigation.navigate('Home');
          },
        })}
        options={{
          tabBarIcon: () => {
            return <Home color="black" size={25} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={Explore}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            setSelected(1);
            navigation.navigate('Search');
          },
        })}
        options={{
          tabBarIcon: () => {
            return <Search color="black" size={25} />;
          },
        }}
      /> */}

      <Tab.Screen
        name="AddPost"
        component={AddPost}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            setSelected(3);
            navigation.navigate('AddPost');
          },
        })}
        options={{
          tabBarIcon: () => {
            return <PlusSquare color="black" size={25} />;
          },
        }}
      />

      {/* <Tab.Screen
        name="Reels"
        component={Reels}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            setSelected(2);
            navigation.navigate('Reels');
          },
        })}
        options={{
          tabBarIcon: () => {
            return <PlaySquare color="black" size={25} />;
          },
        }}
      /> */}

      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            setSelected(4);
            navigation.navigate('Profile');
          },
        })}
        options={{
          tabBarIcon: () => {
            return <CircleUser color="black" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
