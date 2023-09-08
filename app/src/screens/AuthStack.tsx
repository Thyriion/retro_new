import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AsyncStorageService } from '../services/AsyncStorageService';
import Home from './main/Home';
import Login from './auth/Login';

const AuthStack = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        async function getUser() {
            let currentUser = await AsyncStorageService.getCurrentUser() ?? '';
            setUser(currentUser);
        }

        getUser();
    }, [])

    return <>
        {user && <Home />}
        {!user && <Login />}
    </>
}

export default AuthStack