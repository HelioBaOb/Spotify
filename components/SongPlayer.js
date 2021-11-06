import React, {useState} from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, Dimensions, Pressable} from "react-native";
import TouchableComponent from '../components/UI/TouchableComponent';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    width:Dimensions.get('window').height * 1,
    height:Dimensions.get('window').height * 1,
    marginBottom: Dimensions.get('window').height * 0.06,
  },
  title: {
    color: "white",
    marginLeft:Dimensions.get('window').height * 0.078,
    marginTop:Dimensions.get('window').height * -0.056,
  },
  author: {
    color: "#D0C7C7",
    marginLeft:Dimensions.get('window').height * 0.078,
    marginTop:Dimensions.get('window').height * -0.004,
  },
  img:{
    width:Dimensions.get('window').height * 0.07,
    height:Dimensions.get('window').height * 0.07,
    marginLeft:-8
  },
  computer:{
    marginLeft:Dimensions.get('window').height * 0.3,
    marginTop:Dimensions.get('window').height * -0.037,
  },
  heart:{
    marginLeft:Dimensions.get('window').height * 0.36,
    marginTop:Dimensions.get('window').height * -0.036,
  },
  pause_play:{
    marginLeft:Dimensions.get('window').height * 0.413,
    marginTop:Dimensions.get('window').height * -0.039,
  }
});

const SongPlayer =  (props) => {

  const [focusedC, setFocusedC] = useState(false);
  const [focusedH, setFocusedH] = useState(false);
  const [focusedP, setFocusedP] = useState(false);

  const computer = () =>{
    if(focusedC == false){
        setFocusedC(true);
    } else{
        setFocusedC(false);
    }
  }

  const heart = () =>{
    if(focusedH == false){
        setFocusedH(true);
    } else{
        setFocusedH(false);
    }
  }

  const play = () =>{
    if(focusedP == false){
        setFocusedP(true);
    } else{
        setFocusedP(false);
    }
  }

  const handleModal = () =>{
    setVisibility(true);
  }


  return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri:props.cardInfo.imgUrl}}/>
        <Text style={styles.title}>{props.cardInfo.name}</Text>
        <Text style={styles.author}>{props.cardInfo.artist}</Text>
        <View style={styles.computer}>
          <TouchableComponent onPress={computer}>
            <MaterialIcons  name="computer" size={30} color={focusedC?"#1DB954":"white"}/>
          </TouchableComponent>
        </View>
        <View style={styles.heart}>
          <TouchableComponent onPress={heart}>
            <AntDesign name="heart" size={24} color={focusedH?"#1DB954":"white"}/>
          </TouchableComponent>
        </View>
        <View style={styles.pause_play}>
          <TouchableComponent onPress={play}>
            {focusedP && <Foundation name="pause" size={30} color="white" />}
            {!focusedP && <Foundation name="play" size={30} color="white" />}
          </TouchableComponent>
        </View>
      </View>      
  );
};

export default SongPlayer;