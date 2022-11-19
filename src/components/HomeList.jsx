import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import properties from '../properties'
import Card from './Card'

const HomeList = () => {
    return (
        <FlatList
            data={properties}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: property }) => (
                <Card
                    property={property}
                />
            )}
        />
    )
}

export default HomeList