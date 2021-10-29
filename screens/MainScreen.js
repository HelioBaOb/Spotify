import React, {useState} from 'react';
import {StyleSheet,  View, Image, Text} from "react-native";
import { Dimensions } from 'react-native';
import MiniPlaylistCard from '../components/MiniPlaylistCard';
import Carousel from 'react-native-snap-carousel';
import CarouselCard from '../components/CarouselCard';

const MainScreen = (props) =>{

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Buenas Tardes</Text>
                <View style={styles.playlistContainer}>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard>Tus me gusta</MiniPlaylistCard>
                        <MiniPlaylistCard>Descubrimiento</MiniPlaylistCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard>agustoAlaberga</MiniPlaylistCard>
                        <MiniPlaylistCard>Playlist de Helio</MiniPlaylistCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard>Música Relax</MiniPlaylistCard>
                        <MiniPlaylistCard>Monos Árticos</MiniPlaylistCard>
                    </View>
                </View>
            </View>

            <View style={styles.carouselContainer}> 
                <View style={styles.carouselHeader}> 
                    <Image style={styles.image}
                                            source={{uri:'https://img.discogs.com/Kh2S37VokmxgBwElbFnWy2bCreg=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-13427539-1558851956-3506.jpeg.jpg'}}/>
                    <View>
                    <Text style={styles.descriptionText}>Similares a</Text>
                    <Text style={styles.subText}>Sunflower</Text>
                    </View>
                </View>
            
            {/* <Carousel
                ref={(c) => {}}
                data={}
                renderItem={}
                sliderWidth={}
                itemWidth={}
            /> */}
                <View style={styles.carouselList}>
                    <CarouselCard></CarouselCard>
                </View>

            </View>

            
            
        </View>
    )
}


export default MainScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191414',
        flex: 1,
        padding: 10,
    },
    headerContainer: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').height * 0.4,
    },
    playlistContainer: {
        marginTop: 20,
    },
    cardContainer: {
        right: 15,
        flexDirection: 'row',
        
    },
    carouselContainer: {

    },  
    carouselHeader: {
        flexDirection: 'row',
        paddingTop: Dimensions.get('window').height * 0.02,
    },
    titleText: {
        fontSize: 25,
        paddingTop: Dimensions.get('window').height * 0.08,
        paddingLeft: 5,
        color: 'white',
    },
    subText: {
        fontSize: 25,
        paddingLeft: 10,
        color: 'white',
    }, 
    descriptionText: {
        fontSize: 14,
        paddingTop: Dimensions.get('window').height * 0.02,
        paddingLeft: 10,
        color: '#D0C7C7',
    }, 
    image: {
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').height * 0.1,
        borderRadius: 70,
    }  
});
