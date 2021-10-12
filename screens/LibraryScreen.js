import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import { Dimensions } from 'react-native';

const LibraryScreen = (props) =>{

    return(
        <View style={styles.container}>
            <Text>LibraryScreen</Text>
        </View>
    )
}
export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,

    },
    listContainer:{
        height: Dimensions.get('window').height * 0.82,
        width:'100%',
    }
});
