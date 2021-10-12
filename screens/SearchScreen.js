import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import { Dimensions } from 'react-native';

const SearchScreen = (props) =>{

    return(
        <View style={styles.container}>
            <Text>SearchScreen</Text>
        </View>
    )
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
    },
});
