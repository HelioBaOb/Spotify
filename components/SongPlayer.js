import React, {useState} from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, Dimensions, Pressable} from "react-native";
import TouchableComponent from '../components/UI/TouchableComponent';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import CustomModal from "./CustomModal";

const SongPlayer =  (props) => {
  
  const [focusedC, setFocusedC] = useState(false);
  const [focusedH, setFocusedH] = useState(false);
  const [focusedP, setFocusedP] = useState(false);
  const [visibility, setVisibility] = useState(false)
  
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

    const modalShown = () =>{
        setVisibility(true);
    }

    const generateColor = () => {
      const randomColor = Math.floor(Math.random() * 1777215)
      .toString(16)
      .padStart(6, '0');
  return `#${randomColor}`;
  };


  return (

      <View style={[styles.container, props.customStyle]}>
        {props.cardInfo && <CustomModal customColor={generateColor()} setVisibility={setVisibility} visibility={visibility}></CustomModal> }
          <View style={styles.pressableContainer}>
          <TouchableComponent onPress={modalShown}>
            <Image style={styles.img} source={{uri:props.cardInfo.imgUrl}}/>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{props.cardInfo.name}</Text>
                <Text style={styles.author}>{props.cardInfo.artist}</Text>
              </View>
          </TouchableComponent >
          </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <TouchableComponent onPress={computer}>
              <MaterialIcons name="computer" size={30} color={focusedC?"#1DB954":"white"}/>
            </TouchableComponent>
          </View>
          <View style={styles.heartIcon}>
            <TouchableComponent onPress={heart}>
              <AntDesign name="heart" size={24} color={focusedH?"#1DB954":"white"}/>
            </TouchableComponent>
          </View>
          <View style={styles.icon}>
            <TouchableComponent onPress={play}>
              {focusedP && <Foundation name="pause" size={30} color="white" />}
              {!focusedP && <Foundation name="play" size={30} color="white" />}
            </TouchableComponent>
          </View>
        </View>
      </View>      
  );
};

export default SongPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    marginBottom: Dimensions.get('window').height * 0.06,
  },
  pressableContainer: {
    width:Dimensions.get('window').width * .6,
    height:Dimensions.get('window').height,
  },
  infoContainer: {
    width:Dimensions.get('window').width * .6,
    height:Dimensions.get('window').height,
  },
  title: {
    fontFamily: 'circular-bold',
    color: "white",
    marginLeft:Dimensions.get('window').height * 0.078,
    marginTop:Dimensions.get('window').height * -0.056,
  },
  author: {
    fontFamily: 'circular-book',
    fontSize: 12,
    color: "#D0C7C7",
    marginLeft:Dimensions.get('window').height * 0.078,
    marginTop:Dimensions.get('window').height * -0.004,
  },
  img:{
    width:Dimensions.get('window').width * 0.15,
    height:Dimensions.get('window').height * 0.077,
    marginHorizontal:Dimensions.get('window').width * -0.02,
    marginVertical:Dimensions.get('window').height * -0.00012
  },
  iconContainer:{
    flexDirection: 'row',
    width:Dimensions.get('window').width * .4,
    height:Dimensions.get('window').height,
  },
  icon:{
    paddingVertical: Dimensions.get('window').height * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.03,
  },
  heartIcon:{
    paddingVertical: Dimensions.get('window').height * 0.025,
    paddingHorizontal: Dimensions.get('window').width * 0.03,
  },
});