import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Dimensions, Text} from "react-native";
import TouchableComponent from '../components/UI/TouchableComponent';
import { AntDesign } from '@expo/vector-icons'; 
import GenreCard from '../components/GenreCard';

const SearchScreen = (props) =>{

    return(
        <View style={styles.container}>
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
                        <GenreCard style={styles.card}>Latino</GenreCard>
                        <GenreCard style={styles.card}>Rock</GenreCard>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitleText}>Categorías populares</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard>Trap</GenreCard>
                        <GenreCard>Chill</GenreCard>
                    </View>
                </View>

                <View>
                    <Text style={styles.subtitleText}>Explorar todo</Text>
                    <View style={styles.cardContainer}>
                        <GenreCard>agustoAlaberga</GenreCard>
                        <GenreCard>Creado para ti</GenreCard>
                    </View>
                    <View style={styles.cardContainer}>
                        <GenreCard>Reggaeton</GenreCard>
                        <GenreCard>Instrumental</GenreCard>
                    </View>
                </View>
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
