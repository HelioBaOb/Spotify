import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import { Dimensions } from 'react-native';

const MainScreen = (props) =>{

    return(
        <View style={styles.container}>
            <Text>MainScreen</Text>
        </View>
    )
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,

    },
});
