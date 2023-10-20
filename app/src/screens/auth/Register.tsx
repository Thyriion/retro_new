import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { MD2DarkTheme } from '../../styles/themes';

const Register = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const theme = MD2DarkTheme;

    return (
        <View style={{ justifyContent: "center", flex: 1, marginHorizontal: 10, gap: 10 }}>
            <TextInput
                label="Email"
                value={userEmail}
                onChangeText={text => setUserEmail(text)}
                activeUnderlineColor={theme.colors.accent}
                textContentType='emailAddress'
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
                buttonColor={theme.colors.primary}
                onPress={() => navigation.navigate("ChooseTeam", {
                    userEmail: userEmail,
                    userPassword: userPassword
                })}
            >
                <Text>Registrieren</Text>
            </Button>
        </View>
    )
}

export default Register