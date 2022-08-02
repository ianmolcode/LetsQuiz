import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import Title from '../components/titile';

const Home = ({ navigation }) => {
    return (
        <View style={styles.bannerContainer}>
            <Title />
            <View style={styles.container}>
                <Image source={{ uri: 'https://products.ls.graphics/guuulp/images/Gaming.jpg', }}
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
        height: 500,
        width: 350,
        
    },
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    bannerContainer: {
        paddingTop: 50,
        paddingHorizontal: 20,
        height: '100%'
        
    },
    button: {
        width: '100%',
        backgroundColor: '#57cc99',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttontext:{
        fontSize: 20,
        fontWeight: 'bold', 
        color: 'white',
    }
});