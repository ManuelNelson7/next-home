import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import properties from '../properties'
import Card from './Card'

const HomeList = () => {
    return (
        <FlatList
            data={properties}
            contentContainerStyle={styles.list}
            ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            renderItem={({ item: property }) => (
                <Card
                    property={property}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    list : {
        width : '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    separator: {
        height: 16,
    }
})

export default HomeList