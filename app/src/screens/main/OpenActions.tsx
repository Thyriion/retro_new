import { StyleSheet, View } from 'react-native';
import React from 'react';
import CardList from '../../components/CardList/CardList';

const OpenActions = () => {
    const DATA = [
        {
            title: "BLUB Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
        {
            title: "Second Item",
            isCompleted: false
        },
    ];

    return (
        <View style={[styles.ContentViewStyle]}>
            <CardList data={DATA}/>
        </View>
    )
}

export default OpenActions

const styles = StyleSheet.create({
    ContentViewStyle: {
        marginVertical: 10,
        height: 600
    }
});