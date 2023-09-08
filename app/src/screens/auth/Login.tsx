import { View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput, useTheme } from 'react-native-paper'
import { MD2DarkTheme } from '../../styles/themes';

const Login = () => {
    const theme = MD2DarkTheme;
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

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
            <Button mode="contained">Einloggen</Button>
        </View>
    )
}

export default Login