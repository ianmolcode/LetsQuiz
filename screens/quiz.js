import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState() ; 
    const getQuiz = async()=>{
      const url = 'https://opentdb.com/api.php?amount=10&type=multiple' ;
      const res = await fetch(url) ; 
      const data = await res.json() ; 
     // console.log(data.results[0]) ; 
      setQuestions(data.results) ; 
    } ; 
     useEffect(()=>{
     getQuiz() ; 
     },[])
    return (
        
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headingg}>Q. Imagine this is a really good question!!</Text>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style = {styles.optionButtom} ><Text style={styles.options}>Cool Option 1</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.optionButtom} ><Text style={styles.options}>Cool Option 2</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.optionButtom}><Text style={styles.options}>Cool Option 3</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.optionButtom}><Text style={styles.options}>Cool Option 4</Text></TouchableOpacity>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Skip</Text></TouchableOpacity></View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Next</Text></TouchableOpacity></View>
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Text>End</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%',
        paddingTop: 40,

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

    },
    button:{
        width: '50%',
        backgroundColor: '#bc6c25',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
       
    },
    buttontext:{
        fontSize: 16,
        //fontWeight: 'bold', 
        color: 'white',
    },
    headingg:{
        fontSize: 30,
    },
    options:{
        fontSize: 20,

    },
    optionButtom:{
        paddingVertical: 12, 
        marginVertical: 6, 
        paddingHorizontal: 12 , 
        backgroundColor: '#dda15e',
        borderRadius: 10, 

    }
});