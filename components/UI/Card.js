import React from 'react';
import {StyleSheet, View} from "react-native";

const Card = (props) =>{
    return(
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width:'95%',
        marginHorizontal:'2.5%',
        backgroundColor:'#191414',
        marginBottom: 10,
        overflow:'hidden',
        },
});
