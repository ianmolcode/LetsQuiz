import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Title = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.titile}>LetsQuiz</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    titile: {
        fontSize: 50,
        fontWeight: '700',
        fontFamily: 'Roboto',

    },
    container: {
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center' , 
    


    }
})