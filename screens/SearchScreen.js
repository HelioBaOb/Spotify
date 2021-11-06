import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Dimensions, Text, Pressable, ScrollView} from "react-native";
import { PLAYLISTS } from '../dummy data/data';
import { AntDesign } from '@expo/vector-icons'; 
import GenreCard from '../components/GenreCard';
import SongPlayer from '../components/SongPlayer'
import {useSelector} from "react-redux";

const SearchScreen = (props) =>{

    const cardInfo = useSelector(state => state.currentSong.cardInfo);
    


    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.titleText}>Buscar</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.searchIcon}>
                        <AntDesign name="search1" size={24} color="black" />
                    </View>
                    <TextInput 
                        placeholder={"Artistas, canciones o podcast"}
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.subtitleText}>Los géneros que más escuchaste</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[15]} {...props}>Fiesta</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[10]} {...props}>Rock</GenreCard>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitleText}>Categorías populares</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[14]} {...props}>Trap</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[9]} {...props}>Chill</GenreCard>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitleText}>Explorar todo</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[8]} {...props}>agustoalaverga</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[0]} {...props}>Creado para ti</GenreCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[1]} {...props}>Relax</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[11]} {...props}>Instrumental</GenreCard>
                    </View>
                </View>
                </ScrollView>
            {cardInfo &&
                
                    <SongPlayer cardInfo={cardInfo}/>
                
            }
        </View>
    )
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191414',
        flex: 1,
        padding:10,
    },
    titleText: {
        fontFamily: 'circular-bold',
        fontSize: 35,
        paddingTop: Dimensions.get('window').height * 0.08,
        paddingLeft: 5,
        color: 'white',
    },  
    inputContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        marginTop: 20,
        height: '7%',
        width: '98%',
        backgroundColor: 'white',
    },  
    input: {
        fontFamily: 'circular-bold',
        width: '90%'
    },
    searchIcon: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    subtitleText: {
        fontFamily: 'circular-book',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 5,
        color: 'white',
    }, 
    cardContainer: {
        paddingTop: 10,
        flexDirection: 'row',
    },
});
