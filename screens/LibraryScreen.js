import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";
import { Dimensions } from 'react-native';
import { PLAYLISTS } from '../dummy data/data';
import PlaylistCard from '../components/PlaylistCard';


const LibraryScreen = (props) =>{
    return(
        <View style={styles.container}>  
            <Text>Pantalla de Biblioteca</Text>
            <FlatList
            data={PLAYLISTS}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
                <PlaylistCard cardInfo={itemData.item} /*press={}*//>
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
});
