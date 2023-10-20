import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AsyncStorageService } from '../services/AsyncStorageService';
import Home from './main/Home';
import Login from './auth/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './auth/Register';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import ChooseTeam from './auth/ChooseTeam';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Overview from './main/Overview';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    return <>
        {
            user && <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Overview" component={Overview} />
            </Tab.Navigator>
        }
        {
            !user &&
            <Stack.Navigator screenOptions={{}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ChooseTeam" component={ChooseTeam} />
            </Stack.Navigator>
        }
    </>
}

export default AuthStack