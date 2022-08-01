import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Results from '../screens/results';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options= { {headerShown:false}} />
            <Stack.Screen name="Quiz" component={Quiz}  options= { {headerShown:false}}/>
            <Stack.Screen name="Result" component={Results}  options= { {headerShown:false}} />

        </Stack.Navigator>
    );
}
export default MyStack; 