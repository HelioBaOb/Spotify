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

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export const TabNavigator = () =>{
    return(
            <Tab.Navigator 
            screenOptions={{
                tabBarActiveBackgroundColor: '#191414',
                tabBarInactiveBackgroundColor: '#191414',
                tabBarLabelStyle: {
                    color: "white",
                },
                tabBarStyle:[{
                    display:"flex"
                }, null]
            }}
            >
                <Tab.Screen name="Main" component={MainScreen} options={{ 
                    headerShown: false,
                    tabBarIcon:({focused})=><Foundation name="home" size={24} color={focused?"white":"grey"} />
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
    )
}

export const StackMain = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name={"TabNavigator"}
                            component={TabNavigator}
                            options={{headerShown:false}}
                /> 
                <Stack.Screen name={"PlaylistScreen"} 
                            component={PlaylistScreen} 
                            options={{headerShown: false}}
                />
            </Stack.Navigator>


    )
}

