import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, FlatList} from "react-native";
import { Dimensions } from 'react-native';
import { SONGS } from '../dummy data/data';
import SongCard from '../components/SongCard';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import TouchableComponent from '../components/UI/TouchableComponent';

const TestScreen = (props) =>{
    return(
            <View style={styles.container}>
                <LinearGradient 
                        colors={['#6B6B6B', '#191414']} 
                        start={{ x: 0, y: 0}} 
                        end={{ x: 0, y: 0.54 }} 
                        locations={[0, 1]} 
                        style={styles.linearGradient}>

                <View style={styles.header}>  
                    <View style={styles.imageContainer}>
                    <Image style={styles.playlistImage}
                                    source={{uri:"https://images.genius.com/573a07cba6e81c8bf69f279565093eca.1000x1000x1.png"}}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>Rock/Pop español 2000</Text>
                        <Text style={styles.descriptionText}>La musica no pasa de moda ni deja de ser anticuada.</Text>
                            <View style={styles.autorContainer}>
                                
                            <Image style={styles.autorImage}
                                    source={{uri:"https://scontent.fmlm3-1.fna.fbcdn.net/v/t1.6435-9/116899667_2000069700127447_4153192373184958620_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JcRqlY3GCbIAX_Kxp6I&_nc_ht=scontent.fmlm3-1.fna&oh=0635c62a60e4a835faee6872a28bdb53&oe=61911719"}}/>
                                <Text style={styles.autorText}>Helio Barriga</Text>
                            </View>
                        <Text style={styles.descriptionText}>17 h 4 min</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <TouchableComponent>
                            <View style={styles.icon}>
                                <AntDesign name="hearto" size={24} color="#D0C7C7" />
                            </View>
                        </TouchableComponent>
                        <TouchableComponent>
                            <View style={styles.icon}>
                                <EvilIcons name="arrow-down" size={34} color="#D0C7C7" />
                            </View>
                        </TouchableComponent>
                        <TouchableComponent>
                            <View style={styles.icon}>
                                <Feather name="more-vertical" size={24} color="#D0C7C7" />
                            </View>
                        </TouchableComponent>
                            <TouchableComponent>
                                <View style={styles.playIcon}>
                                    <AntDesign name="play" size={50} color="#1DB954" />
                                </View>
                            </TouchableComponent>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                    <SongCard></SongCard>
                </View>
                </LinearGradient>
            </View>
    )
}

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').height * 0.05,
        flex: 1,
    },
    linearGradient: {
        height: Dimensions.get('window').height,
    },
    header: {
        marginBottom: 10,
        height: Dimensions.get('window').height * 0.45,
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
    },
    playlistImage: {
        marginTop: 20,
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
        color: 'white',
        fontSize: 20,
    },
    descriptionText: {
        paddingTop: 5,
        paddingBottom: 5,
        color: '#D0C7C7'
    },
    autorText: {
        color: 'white',
        marginLeft: 10,
    },
    iconContainer:{
        marginLeft: 5,
        flexDirection:'row',
    },
    icon:{
        marginLeft: 20,
    },
    playIcon: {
        marginLeft: 180,
        marginBottom: 10,
    },
    listContainer: {
        padding: 10,
        marginTop: 30
    }
});
