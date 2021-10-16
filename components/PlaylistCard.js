import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";

const PlaylistCard = (props) =>{

    return(
        <Card style={styles.card}>
            <TouchableComponent>
                <View style={styles.infoContainer}>
                    <Image style={styles.image}
                            source={{uri:props.cardInfo.imgUrl}}/>

                    <View>
                        <Text style={styles.titleText}> {props.cardInfo.name} </Text>
                        <Text style={styles.descriptionText}> De {props.cardInfo.creator} </Text>
                    </View>
                </View>
            </TouchableComponent>
        </Card>
    )
}

export default PlaylistCard;

const styles = StyleSheet.create({
    card: {
        height :Dimensions.get('window').height * 0.10,
    },
    image: {
        margin: Dimensions.get('window').height * 0.005,
        height :Dimensions.get('window').height * 0.10,
        width :Dimensions.get('window').height * 0.10,
        
    },
    titleText : {
        // fontFamily:'roboto-regular',
        paddingTop: 10,
        paddingLeft: 5,
        fontSize: 18,
        color: 'white'
    },
    descriptionText : {
        // fontFamily:'roboto-regular',
        paddingTop: 2,
        paddingLeft: 5,
        fontSize: 12,
        color: '#D0C7C7'
    },
    infoContainer:{
        height :Dimensions.get('window').height * 0.1,
        width :Dimensions.get('window').height * 0.60,
        flexDirection:'row',
    }
});
