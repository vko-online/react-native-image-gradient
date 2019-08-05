import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from './react-native-image-gradient'

export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={{ width: 200 }}
          darken={0.6}
          darkenWidth={20}
          source={require('./images/cat.png')}
        />
      </View>
      <View style={styles.item}>
        <Image
          style={{ width: 300 }}
          darken={0.8}
          darkenWidth={30}
          source={require('./images/cat.png')}
        />
      </View>
      <View style={styles.item}>
        <Image
          style={{ width: 150 }}
          darken={0.4}
          darkenWidth={20}
          source={require('./images/cat.png')}
        />
      </View>
      <View style={styles.item}>
        <Image
          style={{ width: 100 }}
          darken={.7}
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
    paddingTop: 60
  },
  item: {
    height: 150,
    width: 400,
    marginBottom: 20
  },
  image: {
    width: 200
  }
})
