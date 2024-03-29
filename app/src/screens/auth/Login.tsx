import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
import { MD2DarkTheme } from '../../styles/themes';
import { AuthService } from '../../services/AuthService';

const Login = ({ navigation }) => {
    const theme = MD2DarkTheme;
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    function login() {
        AuthService.signInUser(userEmail, userPassword);
    }

    return (
        <View style={{ justifyContent: "center", flex: 1, marginHorizontal: 10, gap: 10 }}>
            <TextInput
                label="Email"
                value={userEmail}
                onChangeText={text => setUserEmail(text)}
                activeUnderlineColor={theme.colors.accent}
            />
            <TextInput
                label="Passwort"
                value={userPassword}
                onChangeText={text => setUserPassword(text)}
                textContentType='newPassword'
                secureTextEntry={true}
                activeUnderlineColor={theme.colors.accent}
            />
            <Button
                mode="contained"
                contentStyle={{ height: 50 }}
                onPress={() => login()}
            >
                Einloggen
            </Button>
            <Button
                mode="contained"
                contentStyle={{ height: 50 }}
                buttonColor={theme.colors.accent}
                onPress={() => navigation.navigate("Register")}
            >
                <Text>Registrieren</Text>
            </Button>
        </View>
    )
}

export default Login