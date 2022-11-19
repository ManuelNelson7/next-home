import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import HomeList from './HomeList'
import NavHome from './NavHome'

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight }}>
            <NavHome />
            <View style={{ backgroundColor: '#F9F9F9' }}>
                <View style={styles.top} />
                <HomeList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        height: 120,
        width: '100%',
        backgroundColor: '#173542',
        zIndex: '-2',
        position: 'absolute',
    }
})

export default Main