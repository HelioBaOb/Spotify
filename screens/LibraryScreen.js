import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import { Dimensions } from 'react-native';
import SongCard from '../components/SongCard';


const LibraryScreen = (props) =>{
    return(
        <View style={styles.container}>  
            <View style={styles.listContainer}>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
            </View> 
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
