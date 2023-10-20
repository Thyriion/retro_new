import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { AuthService } from '../../services/AuthService';
import { UserService } from '../../services/UserService';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const ChooseTeam = ({ route }) => {
    const { userEmail, userPassword } = route.params;

    async function createUser(team: string) {
        await AuthService.createUser(userEmail, userPassword);
        await UserService.assignTeam(team);
    }

    return (
        <View style={{ justifyContent: "center", flex: 1, marginHorizontal: 10, gap: 10 }}>
            <Button icon={({ size, color }) => (
                <MaterialCommunityIcons name="bow-arrow" size={30} />
            )} mode="contained" contentStyle={{ height: 150 }} onPress={() => { createUser("Artemis") }}>Team Artemis</Button>
            <Button icon={({ size, color }) => (
                <FontAwesome6 name="otter" size={30} />
            )} mode="contained" contentStyle={{ height: 150 }} onPress={() => { createUser("Otten") }}>Team Otten</Button>
        </View>
    )
}

export default ChooseTeam