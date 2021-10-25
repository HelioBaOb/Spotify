import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from "react-native";
import { Dimensions } from 'react-native';
import { PLAYLISTS } from '../dummy data/data';
import PlaylistCard from '../components/PlaylistCard';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export const ListHeader = () => {
    return (
        <View style={styles.headerFooterStyle}>
        <View style={styles.filters2}>
        <View style={styles.filtersuser}>
        <FontAwesome5 name="user-circle" size={24} color="white" />
        </View>
        <Text style={styles.textStyle}>
            Tu biblioteca
        </Text>
        <AntDesign name="search1" size={24} color="white" />
        <AntDesign name="plus" size={24} color="white" />
        </View>
        <View style={styles.filters}>
            <AntDesign name="arrowdown" size={14} color="white" />
            <AntDesign name="arrowup" size={14} color="white" />
            <Text style={styles.text}>Escuchados Recientemente</Text>
            <View style={styles.appstoreIcon}>
            <AntDesign name="appstore-o" size={16} color="white"/>
            </View>
            </View>
        </View>
      
    );
  };

const LibraryScreen = (props) =>{
    return(
        <View style={styles.container}>  
            <FlatList
            ListHeaderComponent={ListHeader}
            data={PLAYLISTS}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => (
                <PlaylistCard cardInfo={itemData.item} /*press={}*/ {...props}/>
            )
            }
            />
        </View>
    )
}

export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: '#191414',
        backgroundColor: '#191414'
    },
    listContainer:{
        height: Dimensions.get('window').height * 0.92,
        width:'100%',
    },
    filters: {
        padding: 10,
        marginTop: 85,
        flexDirection:'row',
        width: Dimensions.get('window').height * 0.92,
    },
    filters2: {
        //padding: 30,
        flexDirection:'row',
        width: Dimensions.get('window').height * 0.92,
    },
    filtersuser: {
        marginLeft: 1,
        marginTop: 18
    },
    filterstitle: {
        marginLeft: 1,
        marginTop: 18
    },
    filtersicons: {
        marginLeft: 1,
        marginTop: 18
    },
    text: {
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
    },
    appstoreIcon: {
        marginLeft: Dimensions.get('window').height * 0.20,
    },
    headerFooterStyle: {
        width: '100%',
        height: 160,
        backgroundColor: '#191414',
      },
      textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
      },
});
