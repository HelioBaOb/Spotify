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
                            source={{uri:"https://images.genius.com/573a07cba6e81c8bf69f279565093eca.1000x1000x1.png"}}/>
                <Text style={styles.text}>Yonaguni</Text>
                
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
