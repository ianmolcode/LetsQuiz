import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Results = () => {
    return (

        <View>
            <Text>Results are here</Text>
            <View style={styles.container}>
                <Image source={{ uri: 'https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9771.jpg?w=996&t=st=1659210560~exp=1659211160~hmac=6d7e4c9d72acf2d5e90bc58563922033e11bedead374a8c40e46d15eff27c6a1', }}
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Results;

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300
    },
})