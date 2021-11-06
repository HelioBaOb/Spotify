import React, {useState}from 'react';
import {StyleSheet, View, Text, Image, Dimensions, Modal, Button, ScrollView} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import {useSelector} from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const CustomModal = (props) =>{

    const [visibility, setVisibility] = useState(false)
    const [focusedA, setFocusedA] = useState(false)
    const [focusedR, setFocusedR] = useState(false)
    const cardInfo = useSelector(state => state.currentSong.cardInfo);

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 1777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
    };

    const random = () =>{
        if(focusedA == false){
            setFocusedA(true);
        } else{
            setFocusedA(false);
        }
    }

    const loop = () =>{
        if(focusedR == false){
            setFocusedR(true);
        } else{
            setFocusedR(false);
        }
    }

    return(

            <Modal
            style={{ backgroundColor: "#191414" }}
            visible={props.visibility}
            animationType="slide">
                    <View style={styles.container}>
                        <LinearGradient 
                            colors={['#525272', '#191414']} 
                            start={{ x: 0, y: 0}} 
                            end={{ x: 0, y: 0.9 }} 
                            locations={[0, 1]} 
                            style={styles.linearGradient}>

                            <ScrollView style={styles.scrollView}>
                                <View style={styles.modalHeader}>
                                    <TouchableComponent>
                                        <MaterialIcons style={{marginRight:40, marginLeft:20}} name="keyboard-arrow-down" size={24} color="white" onPress={() => props.setVisibility(false)}/>
                                    </TouchableComponent>
                                        <Text style={styles.topText}>REPRODUCIENDO DESDE PLAYLIST</Text>
                                    <TouchableComponent>
                                        <Feather style={{marginRight:20, marginLeft:40}} name="more-vertical" size={24} color="white" />
                                    </TouchableComponent>
                                </View>
                                <Text style={styles.topText}>{cardInfo.name} {/*props del nombre la playlist*/}</Text>
                                <View>
                                    {/*props de la imagen de la canción*/}
                                    <Image style={styles.songImg} 
                                        source={{uri:cardInfo.imgUrl}}/>
                                </View>
                                <View style={styles.songName}>
                                    {/*props de la imagen de la canción*/}
                                    <Text style={styles.songNameText}>{cardInfo.name}</Text>
                                </View>
                                <View style={styles.author}>
                                    {/*props de la imagen del autor*/}
                                    <Text style={styles.authorText}>{cardInfo.artist}</Text>
                                </View>
                                <View style={styles.slider}>
                                    {/*props de la duración de la canción*/}
                                    <Text style={styles.songDuration}>{cardInfo.duration}</Text>
                                </View>
                                <View style={styles.changeButtons}>
                                    <TouchableComponent>  
                                        <FontAwesome name="random" size={21} color={focusedA?"#1DB954":"white"} onPress={random}/>
                                    </TouchableComponent>       
                                    <TouchableComponent style={styles.icon}>
                                        <AntDesign name="stepbackward" size={32} color="white"/>
                                    </TouchableComponent>
                                    <TouchableComponent style={styles.playIcon}>
                                        <Ionicons name="play-circle-sharp" size={85} color="white" />
                                    </TouchableComponent>
                                    <TouchableComponent style={styles.icon}>
                                        <AntDesign name="stepforward" size={32} color="white" />
                                    </TouchableComponent>
                                    <View style={styles.loopIcon}>
                                        <Ionicons name="repeat-outline" size={28} color={focusedR?"#1DB954":"white"} onPress={loop} />
                                    </View>
                                </View>
                                <View style={[styles.lyrics, {backgroundColor:`${generateColor()}`}]}>
                                    <Text style={styles.lyricsTitle}>LYRICS</Text>
                                    {/*props de las lyrics de la canción*/}
                                    <Text style={styles.lyricsText}>{cardInfo.lyrics}</Text>
                                </View>
                            </ScrollView>
                        </LinearGradient>
                    </View>
            </Modal>
    )
}

export default CustomModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalHeader:{
        marginTop: 15,
        flexDirection:'row'
    },
    topText:{
        fontFamily: 'circular-book',
        color: 'white',
        textAlign:'center'
    },
    linearGradient: {
        height: Dimensions.get('window').height,
    },
    songImg:{
        marginTop: Dimensions.get('window').height * 0.05,
        marginLeft: Dimensions.get('window').height * 0.037,
        height :Dimensions.get('window').height * 0.47,
        width :Dimensions.get('window').height * 0.47
    },
    songName:{
        marginLeft: Dimensions.get('window').height * 0.037,
        marginTop: Dimensions.get('window').height * 0.1,
    },
    songNameText: {
        fontFamily: 'circular-book',
        fontSize:22, 
        color:'white'
    },  
    author:{
        marginLeft: Dimensions.get('window').height * 0.037,
        marginTop: Dimensions.get('window').height * 0.0001,
    },
    authorText: {
        fontFamily: 'circular-book',
        fontSize:17, 
        color:'#D0C7C7'
    },
    slider: {
        backgroundColor: "#A49A9A",
        width: Dimensions.get('window').height * 0.48,
        marginLeft: Dimensions.get('window').height * 0.037,
        borderRadius: 2,
        height: 4,
        marginVertical: 16,
    },
    songDuration: {
        fontFamily: 'circular-book',
        fontSize:12, 
        color:'#D0C7C7', 
        marginTop: 5
    },  
    changeButtons:{
        marginLeft: Dimensions.get('window').height * 0.028,
        marginTop: Dimensions.get('window').height * 0.035,
        flexDirection:'row'
    },
    icon: {
        marginLeft: Dimensions.get('window').height * 0.06, 
        marginTop: Dimensions.get('window').height * -0.009
    },
    playIcon: {
        marginLeft: Dimensions.get('window').height * 0.06, 
        marginTop: Dimensions.get('window').height * -0.042
    },
    loopIcon:{
        marginLeft: Dimensions.get('window').height * 0.0455
    },
    lyricsTitle: {
        fontFamily: 'circular-book',
        fontSize:18, 
        color:'#FFFFFF', 
        marginTop: 10, 
        marginLeft: 15
    },
    lyricsText: {
        fontFamily: 'circular-book',
        fontSize: 20, 
        color:'#FFFFFF', 
        marginTop: 10,
        marginLeft: 15, 
        marginRight: 10,
        lineHeight: 25,
    },
    lyrics:{
        height: Dimensions.get('window').height * 1.5,
        width: Dimensions.get('window').height * 0.48,
        marginLeft: Dimensions.get('window').height * 0.030,
        marginBottom: Dimensions.get('window').height * 0.1,
        marginTop: Dimensions.get('window').height * 0.03,
        borderRadius: 8,
        backgroundColor:'#16D1A2'
    }

})