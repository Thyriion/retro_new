import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthService } from '../../services/AuthService'
import { AsyncStorageService } from '../../services/AsyncStorageService'

const Home = () => {
    // AuthService.signOut();
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home