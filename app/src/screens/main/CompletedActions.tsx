import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CardList from '../../components/CardList/CardList';

const CompletedActions = () => {
    const DATA = [
        {
            title: "First Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
        {
            title: "Second Item",
            isCompleted: true
        },
    ];

    return (
        <View style={[styles.ContentViewStyle]}>
            <CardList data={DATA} />
        </View>
    )
}

export default CompletedActions

const styles = StyleSheet.create({
    ContentViewStyle: {
        marginVertical: 10,
        height: 600
    }
});