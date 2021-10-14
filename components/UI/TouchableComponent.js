import React from 'react';
import {Platform} from 'react-native';
import {TouchableOpacity,TouchableNativeFeedback} from "react-native-gesture-handler";

const TouchableComponent = props => {

    const TouchableComponent = (Platform.OS === 'android' && Platform.Version >= 21) ? TouchableNativeFeedback : TouchableOpacity;

    return <TouchableComponent onPress={props.onPress} style={props.style}>{props.children}</TouchableComponent>

}

export default TouchableComponent;
