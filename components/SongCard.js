import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import Card from "./UI/Card";

const SongCard = (props) =>{
    return(
        <Card style={styles.card}>
            <TouchableComponent>
                <View style={styles.infoContainer}>
                    <Image style={styles.image}
                            source={{uri:"https://www.buscaletras.com/photos/albums/post-malone/max/stoney-deluxe.jpg"}}/>

                    <View>
                        <Text style={styles.titleText}> Go Flex </Text>
                        <Text style={styles.descriptionText}> Playlist Deibi </Text>
                    </View>
                </View>
            </TouchableComponent>
        </Card>
    )
}

export default SongCard;

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
