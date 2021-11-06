import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Dimensions, Text, Pressable, ScrollView} from "react-native";
import { PLAYLISTS } from '../dummy data/data';
import { AntDesign } from '@expo/vector-icons'; 
import GenreCard from '../components/GenreCard';
import SongPlayer from '../components/SongPlayer'
import CustomModal from '../components/CustomModal';
import {useSelector} from "react-redux";

const SearchScreen = (props) =>{

    const cardInfo = useSelector(state => state.currentSong.cardInfo);
    const [visibility, setVisibility] = useState(false)

    const modalShown = () =>{
        setVisibility(true);
    }

    return(
        <View style={styles.container}>
            {cardInfo && <CustomModal setVisibility={setVisibility} visibility={visibility}></CustomModal> }
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
                        <GenreCard style={styles.card} cardInfo={PLAYLISTS[5]} {...props}>Latino</GenreCard>
                        <GenreCard style={styles.card} cardInfo={PLAYLISTS[10]} {...props}>Rock</GenreCard>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitleText}>Categorías populares</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[6]} {...props}>Trap</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[9]} {...props}>Chill</GenreCard>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitleText}>Explorar todo</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[3]} {...props}>agustoalaverga</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[1]} {...props}>Creado para ti</GenreCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <GenreCard cardInfo={PLAYLISTS[14]} {...props}>Reggaeton</GenreCard>
                        <GenreCard cardInfo={PLAYLISTS[11]} {...props}>Instrumental</GenreCard>
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
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191414',
        flex: 1,
        padding:10,
    },
    titleText: {
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
        width: '90%'
    },
    searchIcon: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    subtitleText: {
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
