import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { dolarString } from '../utils/utils'

const Card = ({ property }) => {
  return (
    <View key={property.id} style={styles.container} >
      <Image source={{ uri: property.img }} style={styles.imageCard} />
      <Text style={styles.title}>{property.title}</Text>
      <Text style={styles.subtitle}>{property.location}</Text>
      <View style={styles.rowBetween}>

        <View style={styles.row}>
          <Text style={styles.price}>
           {dolarString(property.price)}
          </Text>
          <Text style={[styles.type, property.type === 'rent' ? styles.rent : styles.buy]}>
            {property.type}
          </Text>
        </View>

        <Text style={styles.price}>Save</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    width: 275,
    borderRadius: 12,
    gap: 5,
  },
  imageCard: {
    height: 170,
    width: 'full',
    borderRadius: 12
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 14,
    color: '#3e3e3e'
  },
  type: {
    fontWeight: '600',
    textTransform: 'Capitalize',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  buy: {
    backgroundColor: '#d6fcff',
  },
  rent: {
    backgroundColor: '#e3e3e3',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: '#71C3CA',
    fontWeight: 600,
    fontSize: 16,
  }

})
export default Card