import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthService } from '../../services/AuthService'
import { AsyncStorageService } from '../../services/AsyncStorageService'
import { Card, Divider, Text } from 'react-native-paper'
import { FlashList } from '@shopify/flash-list'
import CompletedActions from './CompletedActions'
import OpenActions from './OpenActions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    // AuthService.signOut();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Offene Maßnahmen" component={OpenActions}/>
            <Tab.Screen name="Erledigte Maßnahmen" component={CompletedActions}/>
        </Tab.Navigator>
    )
}

export default Home;

const styles = StyleSheet.create({
    DividerStyle: {
        backgroundColor: '#000',
        marginTop: 10
    },
    ContainerViewStyle: {
        marginVertical: 20,
        marginHorizontal: 15
    },
    ContentViewStyle: {
        marginVertical: 10,
        height: 400
    },
    FlashListStyle: {
        paddingTop: 10
    }
});