import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";
import { Feather } from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import * as currentSongActions from "../store/actions/currentSongActions";

const SongCard = (props) =>{
    const dispatch = useDispatch();
    const setCurrentSong = () =>{
        try{
            dispatch(currentSongActions.setSong(props.cardInfo))
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <Card style={styles.card}>
            <TouchableComponent onPress={setCurrentSong}>
                <View style={styles.cardContainer}>  
                        <View style={styles.infoContainer}>
                                <Image style={styles.image}
                                        source={{uri:props.cardInfo.imgUrl}}/>

                                <View>
                                    <Text style={styles.titleText}> {props.cardInfo.name} </Text>
                                    <Text style={styles.descriptionText}> {props.cardInfo.artist} </Text>
                                </View>
                        </View> 

                        <View style={styles.iconContainer}>
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
        height:Dimensions.get('window').height * 0.08,
    },
    cardContainer: {
        flexDirection: 'row',
    },
    image: {
        margin: Dimensions.get('window').height * 0.005,
        height :Dimensions.get('window').height * 0.07,
        width :Dimensions.get('window').height * 0.07,
        
    },
    titleText : {
        fontFamily:'circular-book',
        paddingTop: 10,
        paddingLeft: 2,
        fontSize: 15,
        color: 'white'
    },
    descriptionText : {
        fontFamily:'circular-book',
        paddingTop: 2,
        paddingLeft: 5,
        fontSize: 10,
        color: '#D0C7C7'
    },
    infoContainer:{
        width: '90%',
        flexDirection: 'row',
    },
    iconContainer: {
        marginTop: 10,
        width: '10%',
        alignItems: 'center',
    }
});
