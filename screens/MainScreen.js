import React, {useState} from 'react';
import {StyleSheet,  View, Image, Text, ScrollView, FlatList, Pressable} from "react-native";
import { Dimensions } from 'react-native';
import MiniPlaylistCard from '../components/MiniPlaylistCard';
import { PLAYLISTS } from '../dummy data/data';
import CarouselCard from '../components/CarouselCard';
import SongPlayer from '../components/SongPlayer'
import {useDispatch} from "react-redux";
import * as authActions from "../store/actions/authActions";
import {useSelector} from "react-redux";
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import TouchableComponent from '../components/UI/TouchableComponent';

const MainScreen = (props) =>{

    const randomPlaylist1 = Math.floor(Math.random() * 15)
    const randomPlaylist2 = Math.floor(Math.random() * 15)
    const cardInfo = useSelector(state => state.currentSong.cardInfo);

    const dispatch = useDispatch();
    
    const onClick = () =>{
        dispatch(authActions.tryLogout())
    }

    return(
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Buenas Tardes</Text>
                    <TouchableComponent onPress={onClick}>
                        <MaterialIcons style={styles.logoutIcon} name="logout" size={32} color="white" />
                    </TouchableComponent>
                </View>
            
                <View style={styles.playlistContainer}>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[0]} {...props}>Tus me gusta</MiniPlaylistCard>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[5]} {...props}>This is Mac Miller</MiniPlaylistCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[8]} {...props}>agustoalaverga</MiniPlaylistCard>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[7]} {...props}>Soft</MiniPlaylistCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[1]} {...props}>Música Relax</MiniPlaylistCard>
                        <MiniPlaylistCard cardInfo={PLAYLISTS[3]} {...props}>Arctic Monkeys</MiniPlaylistCard>
                    </View>
                </View>
                
            </View>

                <View style={styles.carouselContainer}> 
                    <View style={styles.carousel}>
                        <View style={styles.carouselHeader}> 
                                <Image style={styles.image}
                                                        source={{uri:'https://img.discogs.com/Kh2S37VokmxgBwElbFnWy2bCreg=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-13427539-1558851956-3506.jpeg.jpg'}}/>
                                <View>
                                <Text style={styles.descriptionText}>Porque te gusta</Text>
                                <Text style={styles.subText}>Sunflower</Text>
                                </View>
                        </View>
                            <View style={styles.carouselList}>
                                <Carousel
                                data={PLAYLISTS}
                                activeSlideAlignment={'start'}
                                firstItem={randomPlaylist1}
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={Dimensions.get('window').width * .4}
                                itemHeight={Dimensions.get('window').height}
                                keyExtractor={item => item.id.toString()}
                                renderItem={itemData => (
                                    <CarouselCard cardInfo={itemData.item} {...props}/>
                                    )
                                }
                                />
                                {/* <FlatList
                                ItemSeparatorComponent={itemSeparatorComponent}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                style={styles.horizontalList}
                                data={PLAYLISTS}
                                horizontal
                                keyExtractor={item => item.id.toString()}
                                renderItem={itemData => (
                                    <CarouselCard cardInfo={itemData.item} {...props}/>
                                )
                                }
                                /> */}
                        </View>
                    </View>

                    <View style={styles.carousel}>
                        <View style={styles.carouselHeader}> 
                                <Image style={styles.image}
                                                        source={{uri:'https://i.scdn.co/image/ab67616d0000b27359f76b3f04a9344363d143e5'}}/>
                                <View>
                                <Text style={styles.descriptionText}>Similares a</Text>
                                <Text style={styles.subText}>Instrumental</Text>
                                </View>
                        </View>
                            <View style={styles.carouselList}>
                                <Carousel
                                data={PLAYLISTS}
                                activeSlideAlignment={'start'}
                                firstItem={randomPlaylist2}
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={Dimensions.get('window').width * .4}
                                itemHeight={Dimensions.get('window').height}
                                keyExtractor={item => item.id.toString()}
                                renderItem={itemData => (
                                    <CarouselCard cardInfo={itemData.item} {...props}/>
                                    )
                                }
                                />
                        </View>
                    </View>
                </View>

            </ScrollView>

            {cardInfo &&
                
                    <SongPlayer cardInfo={cardInfo}/>
                
            }
        </View>
    )
}


export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191414',
        padding: 10,
    },
    headerContainer: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width + 10,
    },
    title: {
        flexDirection:'row',
        width: Dimensions.get('window').width,
    },
    logoutIcon: {
        marginHorizontal: Dimensions.get('window').width * 0.38, 
        marginTop: Dimensions.get('window').height * 0.08,
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
    carousel: {

    },
    carouselHeader: {
        flexDirection: 'row',
        paddingTop: Dimensions.get('window').height * 0.02,
    }, 
    carouselList: {
        width: Dimensions.get('window').width,
    },
    titleText: {
        fontFamily: 'circular-bold',
        fontSize: 25,
        paddingTop: Dimensions.get('window').height * 0.08,
        paddingLeft: 5,
        color: 'white',
    },
    subText: {
        fontFamily: 'circular-book',
        fontSize: 25,
        paddingLeft: 10,
        color: 'white',
    }, 
    descriptionText: {
        fontFamily: 'circular-book',
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
