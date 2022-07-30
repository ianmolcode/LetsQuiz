import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Quiz = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text>Imagine this is a really good question!!</Text>
            </View>
            <View style={styles.option}>
                <TouchableOpacity><Text>Cool Option 1</Text></TouchableOpacity>
                <TouchableOpacity><Text>Cool Option 2</Text></TouchableOpacity>
                <TouchableOpacity><Text>Cool Option 3</Text></TouchableOpacity>
                <TouchableOpacity><Text>Cool Option 4</Text></TouchableOpacity>

                <View style={styles.bottom}><TouchableOpacity><Text>Skip</Text></TouchableOpacity></View>
                <View style={styles.bottom}><TouchableOpacity><Text>Next</Text></TouchableOpacity></View>
            </View>

        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%'

    },
    head: {
        marginVertical: 20,

    },
    option: {
        marginVertical: 20,
        flex: 1
    },
    bottom: {
        marginBottom: 30,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row',

    }
});