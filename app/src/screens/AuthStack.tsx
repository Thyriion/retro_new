import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import HomeNavigation from '../navigation/home/HomeNavigation';
import AuthNavigation from '../navigation/auth/AuthNavigation';

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
            user && <HomeNavigation />
        }
        {
            !user && <AuthNavigation />
        }
    </>
}

export default AuthStack