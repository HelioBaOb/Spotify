import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";

const MiniPlaylistCard = (props) =>{

    const openPlaylist = () =>{
        props.navigation.navigate('PlaylistScreen',{cardInfo:props.cardInfo});
    }

    return(
        <Card style={styles.card}>
            <TouchableComponent onPress={openPlaylist}>
                <View style={styles.infoContainer}>
                    <Image style={styles.image}
                            source={{uri:props.cardInfo.imgUrl}}/>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}> {props.children} </Text>
                    </View>
                </View>
            </TouchableComponent>
        </Card>
    )
}

export default MiniPlaylistCard;

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').height * 0.07,
        width: '45%',
        backgroundColor: '#2A2A2A',
        borderRadius: 4,
    },
    image: {
        height :Dimensions.get('window').height * 0.07,
        width :Dimensions.get('window').height * 0.07,
    },
    textContainer: {
        width: Dimensions.get('window').height * 0.25,
    },  
    text : {
        fontFamily:'circular-book',
        paddingTop: 12,
        paddingLeft: 3,
        fontSize: 15,
        color: 'white',      
    },
    infoContainer:{
        height :Dimensions.get('window').height * 0.1,
        width :Dimensions.get('window').height * 0.60,
        flexDirection:'row',
    }
});
