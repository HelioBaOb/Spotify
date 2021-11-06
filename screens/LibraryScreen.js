import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from "react-native";
import { Dimensions } from 'react-native';
import { PLAYLISTS } from '../dummy data/data';
import PlaylistCard from '../components/PlaylistCard';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import TouchableComponent from '../components/UI/TouchableComponent';
import SongPlayer from '../components/SongPlayer'
import CustomModal from '../components/CustomModal';
import {useSelector} from "react-redux";

export const ListHeader = () => {

    return (
        <View style={styles.headerFooterStyle}>
            <View style={styles.headerFilters}>
                
                    <View style={styles.filtersuser}>
                        <TouchableComponent>
                            <FontAwesome5 name="user-circle" size={30} color="white" />
                        </TouchableComponent>
                    </View>
                    <Text style={styles.headerText}>
                        Tu biblioteca
                    </Text>
                <View style={styles.headerIcons}>
                    <View style={styles.icon}>
                        <TouchableComponent>
                            <AntDesign name="search1" size={24} color="white" />
                        </TouchableComponent>
                    </View>
                    <View style={styles.icon}>
                        <TouchableComponent>
                            <AntDesign name="plus" size={24} color="white" />
                        </TouchableComponent>
                    </View>
                </View>
            </View>

                <View style={styles.filters}>
                    <TouchableComponent>
                        <View style={styles.arrows}>
                            <AntDesign name="arrowdown" size={14} color="white" />
                            <AntDesign name="arrowup" size={14} color="white" />
                        </View>
                    </TouchableComponent>
                <Text style={styles.filterText}>Escuchados Recientemente</Text>
                
                <TouchableComponent>
                    <View style={styles.appstoreIcon}>
                        <AntDesign name="appstore-o" size={16} color="white"/>
                    </View>
                </TouchableComponent>
                </View>
        </View>
        );
    };

const LibraryScreen = (props) =>{

    const cardInfo = useSelector(state => state.currentSong.cardInfo);
    const [visibility, setVisibility] = useState(false)

    const modalShown = () =>{
        setVisibility(true);
    }

    return(
        <View style={styles.container}> 
            {cardInfo && <CustomModal setVisibility={setVisibility} visibility={visibility}></CustomModal> }
            <ListHeader/>
                <FlatList
                // ListHeaderComponent={ListHeader}
                data={PLAYLISTS}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => (
                    <PlaylistCard cardInfo={itemData.item} {...props}/>
                )
                }
                />
                {cardInfo &&
                    <Pressable onPress={modalShown}>
                        <SongPlayer cardInfo={cardInfo}/>
                    </Pressable>
                }
        </View>
    )
}

export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#191414'
    },
    listContainer:{
        height: Dimensions.get('window').height * 0.92,
        width:'100%',
    },
    filters: {
        padding: 10,
        marginTop: 5,
        flexDirection:'row',
        width: Dimensions.get('window').height * 0.92,
    },
    arrows: {
        flexDirection:'row',
    },
    headerFilters: {
        paddingTop: 15,
        margin: 30,
        alignItems: 'center',
        flexDirection:'row',
        width: Dimensions.get('window').height * 0.92,
    },
    headerIcons: {
        paddingLeft: Dimensions.get('window').height * 0.11,
        flexDirection:'row',
    },
    icon: {
        marginLeft: 30,
    },
    filtersuser: {
        right: 20,
    },
    filterText: {
        fontSize: 14,
        color: 'white',
        marginLeft: 10,
    },
    appstoreIcon: {
        marginLeft: Dimensions.get('window').height * 0.18,
    },
    headerFooterStyle: {
        width: '100%',
        height: 160,
        backgroundColor: '#191414',
    },
    headerText: {
        fontFamily: 'CircularStd-Black',
        textAlign: 'center',
        color: '#fff',
        fontSize: 19,
        padding: 7,
    }
});
