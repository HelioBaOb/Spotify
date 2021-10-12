import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import LibraryScreen from '../screens/LibraryScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainScreen} options={{
                tabBarIcon:({focused})=><AntDesign name="home" size={24} color={focused?"green":"grey"} />
            }}/>
            <Tab.Screen name="Cart" component={SearchScreen} options={{
                tabBarIcon:({focused})=><AntDesign name="home" size={24} color={focused?"green":"grey"} />
            }}/>
            <Tab.Screen name="Search" component={LibraryScreen} options={{
                tabBarIcon:({focused})=><AntDesign name="home" size={24} color={focused?"green":"grey"} />
            }}/>
        </Tab.Navigator>
    )
}
