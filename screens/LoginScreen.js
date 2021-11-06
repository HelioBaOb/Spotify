import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions, TextInput, Alert} from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import TouchableComponent from '../components/UI/TouchableComponent';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import * as authActions from "../store/actions/authActions";

const LoginScreen = (props) =>{

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch();
    const onClick = () =>{
        try {
            console.log(user, password)
            user && password ?
                dispatch(authActions.tryLogin(user, password))
            :
                Alert.alert("Error", "Campos vacios", [{text:'ok'}])
        }catch(e){
            Alert.alert("Error", e.toString(), [{text:'ok'}])
        }
    }
    const validateUser = (user) =>{
        console.log(user)
        setUser(user)
    }
    const validatePassword = (password) =>{
        console.log(password)
        setPassword(password)
    }

    return(
        <View style={styles.container}>  
            <View style={styles.headerContainer}>
                <Entypo name="spotify" size={64} color="white" />
                <Text style={styles.titleText}>Spotify</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.inputContainer}>
                    <TextInput 
                                placeholder={"Usuario"}
                                style={styles.input}
                                onChangeText={txt => validateUser(txt)}
                                />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                                placeholder={"Contraseña"}
                                style={styles.input}
                                onChangeText={txt => validatePassword(txt)}
                                />
                </View>

                <View style={styles.checkboxContainer}>
                    <Ionicons name="checkbox-outline" size={24} color="white" />
                    <Text style={styles.text}>Manterner Sesión iniciada</Text>
                </View>

                <TouchableComponent onPress={onClick}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginText}>INICIAR SESIÓN</Text>
                    </View>
                </TouchableComponent>

                <Text style={styles.text2}>¿Olvidaste tu contraseña?</Text>
                
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#191414'
    },
    headerContainer: {
        paddingTop: Dimensions.get('window').height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },  
    titleText: {
        fontFamily: 'circular-bold',
        fontSize: 36,
        color: 'white',
        marginLeft: 10
    },
    text: {
        fontFamily: 'circular-book',
        fontSize: 14,
        color: 'white',
        marginLeft: 3
    },
    text2: {
        fontFamily: 'circular-book',
        fontSize: 14,
        alignSelf: 'center',
        paddingTop: 30,
        color: '#D0C7C7',
        marginLeft: 3
    },
    infoContainer: {
        marginTop: Dimensions.get('window').height * 0.08,
    },
    inputContainer: {
        marginTop: Dimensions.get('window').height * 0.06,
    },
    checkboxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: Dimensions.get('window').height * 0.04,
        paddingLeft: Dimensions.get('window').width * 0.08,
    },
    input: {
        alignSelf: 'center',
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.82,
        borderRadius: 40,
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'circular-black',
        padding: 20,
    },
    loginButton: {
        alignSelf: 'center',
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.82,
        marginTop: Dimensions.get('window').height * 0.04,
        backgroundColor: '#1DB954',
        borderRadius: 60,

        
    },
    loginText: {
        fontFamily: 'circular-black',
        fontSize: 16,
        padding: 15,
        alignSelf: 'center',
        color: 'white'
    }
});
