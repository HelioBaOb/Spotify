import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";
import { Feather } from '@expo/vector-icons';

const SongCard = (props) =>{

    return(
        <Card style={styles.card}>
            <TouchableComponent>
                <View style={styles.infoContainer}>
                    <Image style={styles.image}
                            source={{uri:props.cardInfo.imgUrl}}/>

                    <View>
                        <Text style={styles.titleText}> {props.cardInfo.name} </Text>
                        <Text style={styles.descriptionText}> {props.cardInfo.artist} </Text>
                    </View>
                    <View style={styles.icon}>
                        <Feather name="more-vertical" size={24} color="#D0C7C7" />
                    </View>
                    
                </View>
            </TouchableComponent>
        </Card>
    )
}

export default SongCard;

const styles = StyleSheet.create({
    card: {
        height :Dimensions.get('window').height * 0.08,
    },
    image: {
        margin: Dimensions.get('window').height * 0.005,
        height :Dimensions.get('window').height * 0.07,
        width :Dimensions.get('window').height * 0.07,
        
    },
    titleText : {
        // fontFamily:'roboto-regular',
        paddingTop: 10,
        paddingLeft: 2,
        fontSize: 15,
        color: 'white'
    },
    descriptionText : {
        // fontFamily:'roboto-regular',
        paddingTop: 2,
        paddingLeft: 5,
        fontSize: 10,
        color: '#D0C7C7'
    },
    infoContainer:{
        height :Dimensions.get('window').height * 0.1,
        width :Dimensions.get('window').height * 0.60,
        flexDirection:'row',
    },
    icon: {
        marginTop: 10,
        marginLeft: '45%',
        alignItems: 'center',
    }
});
