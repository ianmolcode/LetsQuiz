import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import Title from '../components/titile';

const Home = ({ navigation }) => {
    return (
        <View style={styles.bannerContainer}>
            <Title />
            <View style={styles.container}>
                <Image source={{ uri: 'https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9771.jpg?w=996&t=st=1659210560~exp=1659211160~hmac=6d7e4c9d72acf2d5e90bc58563922033e11bedead374a8c40e46d15eff27c6a1', }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Quiz') }}
                style={styles.button}>

                <Text style={styles.buttontext}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 350,
        
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        
        flex: 1,
    },
    bannerContainer: {
        paddingTop: 50,
        paddingHorizontal: 20,
        height: '100%',
     
        
    },
    button: {
        width: '100%',
        backgroundColor: '#57cc99',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 100,
    },
    buttontext:{
        fontSize: 20,
        fontWeight: 'bold', 
        color: 'white',
    }
});