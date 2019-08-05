import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from './react-native-image'

export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          darken={0.6}
          darkenWidth={20}
          source={require('./images/cat.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100
  },
  item: {
    height: 200,
    width: 400
  },
  image: {
    width: 200
  }
})
