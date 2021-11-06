import React, {useState} from 'react';
import {StyleSheet,  View, Image, Text, ScrollView, Pressable} from "react-native";
import { Dimensions } from 'react-native';
import MiniPlaylistCard from '../components/MiniPlaylistCard';
import { PLAYLISTS } from '../dummy data/data';
import Carousel from 'react-native-snap-carousel';
import CarouselCard from '../components/CarouselCard';
import SongPlayer from '../components/SongPlayer'
import CustomModal from '../components/CustomModal';
import {useSelector} from "react-redux";

const MainScreen = (props) =>{

    const cardInfo = useSelector(state => state.currentSong.cardInfo);
    const [visibility, setVisibility] = useState(false)

    const modalShown = () =>{
        setVisibility(true);
    }

    return(
        <View style={styles.container}>
            {cardInfo && <CustomModal setVisibility={setVisibility} visibility={visibility}></CustomModal> }
            <ScrollView style={styles.scrollView}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Buenas Tardes</Text>
                <View style={styles.playlistContainer}>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[0]} {...props}>Tus me gusta</MiniPlaylistCard>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[5]} {...props}>Descubrimiento</MiniPlaylistCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[8]} {...props}>agustoalaverga</MiniPlaylistCard>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[7]} {...props}>Soft</MiniPlaylistCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[1]} {...props}>Música Relax</MiniPlaylistCard>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[3]} {...props}>Los Monos Árticos</MiniPlaylistCard>
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

                <View style={styles.carouselList}>
                    <Carousel
                        data={PLAYLISTS}
                        keyExtractor={item => item.id.toString()}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        itemHeight={Dimensions.get('window').height}
                        renderItem={itemData => (
                            <CarouselCard cardInfo = {itemData.item} {...props}/>
                        )}
                    />
                </View>

                <View style={styles.carouselList}>
                    <CarouselCard></CarouselCard>
                </View>

            </View>
            </ScrollView>
            {cardInfo &&
                <Pressable onPress={modalShown}>
                    <SongPlayer cardInfo={cardInfo}/>
                </Pressable>
            }
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
        marginLeft: 10,
    },
    cardContainer: {
        right: 15,
        flexDirection: 'row',
        
    },
    carouselContainer: {
        paddingTop: 10,
    },  
    carouselHeader: {
        flexDirection: 'row',
        paddingTop: Dimensions.get('window').height * 0.02,
    },
    carouselList: {
        width: Dimensions.get('window').height * 0.5,
        height: Dimensions.get('window').height * 0.5,
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
