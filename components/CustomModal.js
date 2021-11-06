import React, {useState}from 'react';
import {StyleSheet, View, Text, Image, Dimensions, Modal, Button, ScrollView} from "react-native";
import TouchableComponent from "./UI/TouchableComponent";
import {useSelector} from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
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

    const aleatorio = () =>{
        if(focusedA == false){
            setFocusedA(true);
        } else{
            setFocusedA(false);
        }
    }

    const repetir = () =>{
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
                    <View style={{ flex: 1 }}>
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
                                    <SimpleLineIcons style={{marginLeft:30}} name="options-vertical" size={18} color="white"/>
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
                                    <Text style={{fontSize:22, color:'white'}}>{cardInfo.name}</Text>
                                </View>
                                <View style={styles.author}>
                                    {/*props de la imagen del autor*/}
                                    <Text style={{fontSize:17, color:'#D0C7C7'}}>{cardInfo.artist}</Text>
                                </View>
                                <View style={styles.slider}>
                                    {/*props de la duración de la canción*/}
                                    <Text style={{fontSize:12, color:'#D0C7C7', marginTop: 5}}>{cardInfo.duration}</Text>
                                </View>
                                <View style={styles.changeButtons}>
                                        <FontAwesome name="random" size={21} color={focusedA?"#1DB954":"white"} onPress={aleatorio}/>
                                    <TouchableComponent style={{marginLeft:Dimensions.get('window').height * 0.06, marginTop: Dimensions.get('window').height * -0.009,}}>
                                        <AntDesign name="stepbackward" size={32} color="white"/>
                                    </TouchableComponent>
                                    <TouchableComponent style={{marginLeft:Dimensions.get('window').height * 0.03, marginTop: Dimensions.get('window').height * -0.042,}}>
                                        <Ionicons name="play-circle-sharp" size={85} color="white" />
                                    </TouchableComponent>
                                    <TouchableComponent style={{marginLeft:Dimensions.get('window').height * 0.023, marginTop: Dimensions.get('window').height * -0.009,}}>
                                        <AntDesign name="stepforward" size={32} color="white" />
                                    </TouchableComponent>
                                    <View style={styles.repeatButton}>
                                        <Ionicons name="repeat-outline" size={28} color={focusedR?"#1DB954":"white"} onPress={repetir} />
                                    </View>
                                </View>
                                <View style={[styles.lyrics, {backgroundColor:`${generateColor()}`}]}>
                                    <Text style={{fontSize:18, color:'#FFFFFF', marginTop: 10, marginLeft: 15}}>lyrics</Text>
                                    {/*props de las lyrics de la canción*/}
                                    <Text style={{fontSize:24, color:'#FFFFFF', marginTop: 10, marginLeft: 15, marginRight: 60}}>{cardInfo.lyrics}</Text>
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
        padding: 10,
        // backgroundColor: '#191414',
        backgroundColor: '#191414'
    },
    modalHeader:{
        marginTop:15,
        flexDirection:'row'
    },
    topText:{
        color: "white",
        textAlign:'center'
    },
    linearGradient: {
        height: Dimensions.get('window').height,
    },
    songImg:{
        marginTop: Dimensions.get('window').height * 0.14,
        marginLeft: Dimensions.get('window').height * 0.030,
        height :Dimensions.get('window').height * 0.40,
        width :Dimensions.get('window').height * 0.40
    },
    songName:{
        marginLeft: Dimensions.get('window').height * 0.037,
        marginTop: Dimensions.get('window').height * 0.1,
    },
    author:{
        marginLeft: Dimensions.get('window').height * 0.037,
        marginTop: Dimensions.get('window').height * 0.0001,
    },
    slider: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: Dimensions.get('window').height * 0.389,
        marginLeft: Dimensions.get('window').height * 0.030,
        borderRadius: 2,
        height: 4,
        marginVertical: 16,
    },
    changeButtons:{
        marginLeft: Dimensions.get('window').height * 0.037,
        marginTop: Dimensions.get('window').height * 0.03,
        flexDirection:'row'
    },
    repeatButton:{
        marginLeft: Dimensions.get('window').height * 0.0455
    },
    lyrics:{
        height :Dimensions.get('window').height * 0.40,
        width :Dimensions.get('window').height * 0.40,
        marginLeft: Dimensions.get('window').height * 0.030,
        marginBottom: Dimensions.get('window').height * 0.1,
        marginTop: Dimensions.get('window').height * 0.03,
        borderRadius:8,
        backgroundColor:'#16D1A2'
    }

})