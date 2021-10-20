import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';
import MainScreen from '../screens/MainScreen';
import LibraryScreen from '../screens/LibraryScreen';
import SearchScreen from '../screens/SearchScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
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
            >
                <Tab.Screen name="Main" component={MainScreen} options={{ 
                    tabBarIcon:({focused})=><Foundation name="home" size={24} color={focused?"white":"grey"} />
                }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon:({focused})=><AntDesign name="search1" size={24} color={focused?"white":"grey"} />
                }}/>
                <Tab.Screen name="Library" component={LibraryScreen} options={{
                    tabBarIcon:({focused})=><MaterialCommunityIcons name="bookshelf" size={24} color={focused?"white":"grey"} />
                }}/>
                <Tab.Screen name="Playlist" component={PlaylistScreen} options={{
                    headerShown: false,
                    tabBarIcon:({focused})=><MaterialCommunityIcons name="bookshelf" size={24} color={focused?"white":"grey"} />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

