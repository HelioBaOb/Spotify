import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";



const CarouselCard = (props) =>{

    const openPlaylist = () =>{
        props.navigation.navigate('PlaylistScreen',{cardInfo:props.cardInfo});
    }


    return(
    <TouchableComponent onPress={openPlaylist}>
        <Card style={styles.card}>
                <Image style={styles.image}
                            source={{uri:props.cardInfo.imgUrl}}/>
                <Text style={styles.text}>{props.cardInfo.name}</Text>
                
        </Card>
    </TouchableComponent>
    )
}

export default CarouselCard;

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        width: Dimensions.get('window').height * 0.20,
        height: Dimensions.get('window').height * 0.26,
    },
    image: {
        width: Dimensions.get('window').height * 0.20,
        height: Dimensions.get('window').height * 0.20,
    },  
    text: {
        fontFamily: 'circular-book',
        fontSize: 14,
        paddingTop: 8,
        color: '#D0C7C7',
    }
});
