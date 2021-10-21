import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";
import { Dimensions } from 'react-native';
import { PLAYLISTS } from '../dummy data/data';
import PlaylistCard from '../components/PlaylistCard';
import { AntDesign } from '@expo/vector-icons';


const LibraryScreen = (props) =>{
    return(
        <View style={styles.container}>  
            <View style={styles.filters}>
            <AntDesign name="arrowdown" size={14} color="white" />
            <AntDesign name="arrowup" size={14} color="white" />
            <Text style={styles.text}>Escuchados Recientemente</Text>
            <View style={styles.appstoreIcon}>
            <AntDesign name="appstore-o" size={16} color="white"/>
            </View>
            </View>
            <FlatList
            data={PLAYLISTS}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
                <PlaylistCard cardInfo={itemData.item} /*press={}*/ {...props}/>
            )
            }
            />
        </View>
    )
}

export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: '#191414',
        backgroundColor: '#191414'
    },
    listContainer:{
        height: Dimensions.get('window').height * 0.92,
        width:'100%',
    },
    filters: {
        padding: 5,
        flexDirection:'row',
        width: Dimensions.get('window').height * 0.92,
    },
    text: {
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
    },
    appstoreIcon: {
        marginLeft: Dimensions.get('window').height * 0.20,
    }
});
