import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FlashList } from '@shopify/flash-list'
import { Button, Card, Checkbox, useTheme } from 'react-native-paper'
import { MD2DarkTheme } from '../../styles/themes'

type Props = {
    data:
    {
        title: string,
        isCompleted: boolean
    }[]
}

const CardList = ({data}: Props) => {
    const [checked, setChecked] = useState(false);
    return (
        <FlashList
            data={data}
            renderItem={({ item }) =>
                <Card style={{backgroundColor: MD2DarkTheme.colors.surface, opacity: item.isCompleted ? 0.75 : 1}}>
                    <Card.Title title={item.title}/>
                    <Card.Content style={{paddingVertical: 5}}>
                        <Text>Hier wird der Content näher beschrieben</Text>
                    </Card.Content>
                    {!item.isCompleted &&
                        <Card.Actions>
                            <Button mode='contained' onPress={() => setChecked(!checked)}>Erledigt</Button>
                        </Card.Actions>
                    }
                </Card>
            }
            estimatedItemSize={100}
            contentContainerStyle={styles.FlashListStyle}
            ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        />
    )
}

export default CardList

const styles = StyleSheet.create({
    FlashListStyle: {
        paddingTop: 10,
        paddingHorizontal: 20
    }
});