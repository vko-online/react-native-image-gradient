import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  StyleProp,
  ImageStyle,
  View,
  Dimensions
} from 'react-native'
let InitialLinearGradient

try {
  const { LinearGradient } = require('expo-linear-gradient')
  InitialLinearGradient = LinearGradient
} catch (e) {
  if (__DEV__) {
    console.log('no expo-linear-gradient')
  }
}

// try {
//   const LinearGradient = require('react-native-linear-gradient')
//   InitialLinearGradient = LinearGradient
// } catch (e) {
//   if (__DEV__) {
//     console.log('no react-native-linear-gradient')
//   }
// }

interface Props extends ImageProps {
  backgroundStyle?: StyleProp<ImageStyle>
  style?: ImageStyle
  darken?: number
  darkenWidth?: number
}

function extract (width: number, maxWidth: number, darkenWidth: number) {
  const darkenWidthReverse = 100 - darkenWidth
  const mid = width * 100 / maxWidth
  const midLeft = mid / 2
  const midRight = mid + mid / 2
  const offsetLeft = (midLeft * darkenWidthReverse) / 100
  const offsetRight = 100 - offsetLeft
  return [
    0,
    offsetLeft / 100,
    midLeft / 100,
    midRight / 100,
    offsetRight / 100,
    1
  ]
}

export default ({ style, blurRadius, backgroundStyle, darkenWidth = 0, darken = 0, source, ...props }: Props) => {
  const [layoutWidth, setLayoutWith] = useState(Dimensions.get('window').width)
  const [imageLayoutWidth, setImageLayoutWith] = useState(1)
  if (darkenWidth && InitialLinearGradient) {
    return (
      <ImageBackground onLayout={(event) => setLayoutWith(event.nativeEvent.layout.width)} source={source} style={[styles.background, backgroundStyle]} resizeMode='cover' blurRadius={blurRadius}>
        <InitialLinearGradient
          colors={['transparent', 'transparent', '#000', '#000', 'transparent', 'transparent']}
          start={[0, .5]}
          end={[1, 0.5]}
          locations={extract(imageLayoutWidth, layoutWidth, darkenWidth)}
          style={[styles.view, { backgroundColor: `rgba(0,0,0,${darken})` }]}>
          <Image
            source={source}
            onLayout={(event) => setImageLayoutWith(event.nativeEvent.layout.width)}
            style={[styles.image, style]}
            {...props}
          />
        </InitialLinearGradient>
      </ImageBackground>
    )
  }
  return (
    <ImageBackground source={source} style={[styles.background, backgroundStyle]} resizeMode='cover' blurRadius={blurRadius}>
      <View style={[styles.view, { backgroundColor: `rgba(0,0,0,${darken})` }]}>
        <Image source={source} style={[styles.image, style]} {...props} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  view: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    height: '100%'
  }
})
