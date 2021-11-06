import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, FlatList} from "react-native";
import { Dimensions } from 'react-native';
import { PLAYLISTS } from '../dummy data/data';
import { AntDesign, FontAwesome5, Feather, EvilIcons } from '@expo/vector-icons';
import SongCard from '../components/SongCard';
import { LinearGradient } from 'expo-linear-gradient';
import TouchableComponent from '../components/UI/TouchableComponent';
import SongPlayer from '../components/SongPlayer';
import {useSelector} from "react-redux";


const PlaylistScreen = (props) =>{
    
    const cardInfo = useSelector(state => state.currentSong.cardInfo);

    return(
            <View style={styles.container}>
                    <LinearGradient 
                            colors={['#6B6B6B', '#191414']} 
                            start={{ x: 0, y: 0}} 
                            end={{ x: 0, y: 0.45 }} 
                            locations={[0, 1]} 
                            style={styles.linearGradient}>

                    <View style={styles.header}>  
                        <View style={styles.imageContainer}>
                        <Image style={styles.playlistImage}
                                        source={{uri:props.route.params.cardInfo.imgUrl}}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>{props.route.params.cardInfo.name}</Text>
                            <Text style={styles.descriptionText}>{props.route.params.cardInfo.name}</Text>
                                <View style={styles.autorContainer}>
                                    <View style={{marginRight: 4}}>
                                        <FontAwesome5 name="user-circle" size={24} color="white" />
                                    </View>
                                    <Text style={styles.autorText}>{props.route.params.cardInfo.creator}</Text>
                                </View>
                            <Text style={styles.descriptionText}>{props.route.params.cardInfo.duration}</Text>
                        </View>

                        <View style={styles.iconContainer}>
                                <View style={styles.icon}>
                                    <TouchableComponent>
                                        <AntDesign name="hearto" size={24} color="#D0C7C7" />
                                    </TouchableComponent>
                                </View>
                                <View style={styles.icon}>
                                    <TouchableComponent>
                                        <EvilIcons name="arrow-down" size={34} color="#D0C7C7" />
                                    </TouchableComponent>
                                </View>
                                <View style={styles.icon}>
                                    <TouchableComponent>
                                        <Feather name="more-vertical" size={24} color="#D0C7C7" />
                                    </TouchableComponent>
                                </View>

                                <View style={styles.playIcon}>
                                    <TouchableComponent>
                                        <AntDesign name="play" size={50} color="#1DB954" />
                                    </TouchableComponent>
                                </View>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <FlatList
                            data={props.route.params.cardInfo.songs}
                            showsVerticalScrollIndicator={true}

                            keyExtractor={item => item.id.toString()}
                            renderItem={itemData => (
                                <SongCard cardInfo={itemData.item}{...props}/>
                            )
                            }
                            />
                    </View>

                    {cardInfo &&
                    
                    <SongPlayer  cardInfo={cardInfo}/>
                    
                    }

                    </LinearGradient>
            </View>
    )
}

export default PlaylistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Dimensions.get('window').height * 0.05,
    },
    linearGradient: {
        height: Dimensions.get('window').height * 1.1,
    },
    header: {
        marginVertical: Dimensions.get('window').height * 0.02,
        height: Dimensions.get('window').height * 0.45,
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
    },
    playlistImage: {
        marginVertical: Dimensions.get('window').height * 0.01,
        height: Dimensions.get('window').height * 0.22,
        width: Dimensions.get('window').height * 0.22,
    },
    autorContainer: {
        flexDirection:'row',
        alignItems: 'center',
    },
    autorImage: {
        borderRadius: 25,
        height: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').height * 0.04,
    },
    textContainer: {
        padding: 15,
    },
    titleText: {
        fontFamily:'circular-bold',
        fontSize: 20,
        color: 'white',
    },
    descriptionText: {
        fontFamily:'circular-book',
        paddingTop: 5,
        paddingBottom: 5,
        color: '#D0C7C7'
    },
    autorText: {
        fontFamily:'circular-book',
        color: 'white',
        marginHorizontal: Dimensions.get('window').width * 0.01,
    },
    iconContainer:{
        marginHorizontal: Dimensions.get('window').width * 0.01,
        flexDirection:'row',
    },
    icon:{
        marginHorizontal: Dimensions.get('window').width * 0.028,
        marginVertical: Dimensions.get('window').width * -0.01,
    },
    playIcon: {
        marginVertical: Dimensions.get('window').height * -0.025,
        marginHorizontal: Dimensions.get('window').width * 0.4,
    },
    listContainer: {
        height: Dimensions.get('window').height * 0.46,
        marginTop: Dimensions.get('window').height * 0.013,
    },
});
