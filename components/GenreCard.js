import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 1777215)
    .toString(16)
    .padStart(6, '0');
return `#${randomColor}`;
};

const GenreCard = (props) =>{

    console.log(props.cardInfo)

    const openPlaylist = () =>{
        props.navigation.navigate('PlaylistScreen',{cardInfo:props.cardInfo});
    }

    return(
    <TouchableComponent onPress={openPlaylist}>
        <Card style={[styles.card, {backgroundColor:`${generateColor()}`}]}>
                <Text style={styles.title}>{props.children}</Text>
        </Card>
    </TouchableComponent>
    )
}

export default GenreCard;

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').height * 0.24,
        height: Dimensions.get('window').height * 0.12,
        borderRadius: 8,
    },
    title: {
        fontFamily: 'circular-bold',
        fontSize: 18,
        padding: 14,
        color: 'white'
    }
});
