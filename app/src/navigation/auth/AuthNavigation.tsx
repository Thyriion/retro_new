import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import ChooseTeam from '../../screens/auth/ChooseTeam';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ChooseTeam" component={ChooseTeam} />
    </Stack.Navigator>
  )
}

export default AuthNavigation