import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const NavHome = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.logo}>NextHome</Text>
            <TextInput
                placeholder='Search your next home'
                style={styles.searchBar}
            >

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        backgroundColor: '#173542',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 20,
        paddingHorizontal: 40,
    },
    logo: {
        fontSize: 18,
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Montserrat',
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        color: '#3e3e3e',
        marginTop: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        borderRadius: 8,
    }
})

export default NavHome