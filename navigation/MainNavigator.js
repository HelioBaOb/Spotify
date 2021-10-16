import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';
import {StyleSheet} from "react-native";
import MainScreen from '../screens/MainScreen';
import LibraryScreen from '../screens/LibraryScreen';
import SearchScreen from '../screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
            tabBarOptions={{
                activeBackgroundColor: '#191414',
                inactiveBackgroundColor: '#191414',
                labelStyle: {
                    color: "white",
                },
            }}
            // screenOptions={{
            //     headerShown: false
            // }}
            >
                <Tab.Screen name="Main" component={MainScreen} options={{
                    headerShown: false,     
                    tabBarIcon:({focused})=><Foundation name="home" size={24} color={focused?"white":"grey"}/>
                }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{ 
                    headerShown: false,                
                    tabBarIcon:({focused})=><AntDesign name="search1" size={24} color={focused?"white":"grey"} />
                }}/>
                <Tab.Screen name="Library" component={LibraryScreen} options={{
                    headerShown: false,     
                    tabBarIcon:({focused})=><MaterialCommunityIcons name="bookshelf" size={24} color={focused?"white":"grey"} />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

