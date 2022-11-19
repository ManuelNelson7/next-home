import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Card = ({ property }) => {
  return (
    <View key={property.id} style={styles.container} >
      <Image source={property.img} />
      <Text>{property.title}</Text>
      <Text>{property.type}</Text>
      <Text>{property.rooms}</Text>
      <Text>{property.bathrooms}</Text>
      <Text>{property.surface}</Text>
      <Text>{property.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  }
})
export default Card