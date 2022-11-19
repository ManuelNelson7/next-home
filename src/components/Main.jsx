import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import HomeList from './HomeList'

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, backgroundColor: '#F9F9F9' }}>
            <HomeList />
        </View>
    )
}

export default Main