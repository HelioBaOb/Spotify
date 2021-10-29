import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";



const CarouselCard = (props) =>{

    // const openPlaylist = () =>{
    //     props.navigation.navigate('PlaylistScreen',{cardInfo:props.cardInfo});
    // }


    return(
    <TouchableComponent>
        <Card style={styles.card}>
                <Image style={styles.image}
                            source={{uri:'https://upload.wikimedia.org/wikipedia/en/a/a8/Razorsedge.jpg'}}/>
                <Text style={styles.text}>STARSET, Thousand Foot, Krutch, Smash...</Text>
                
        </Card>
    </TouchableComponent>
    )
}

export default CarouselCard;

const styles = StyleSheet.create({
    card: {
        right: 10,
        marginTop: 15,
        width: Dimensions.get('window').height * 0.20,
        height: Dimensions.get('window').height * 0.26,
    },
    image: {
        width: Dimensions.get('window').height * 0.20,
        height: Dimensions.get('window').height * 0.20,
    },  
    text: {
        fontSize: 14,
        paddingTop: 8,
        color: '#D0C7C7',
    }
});
