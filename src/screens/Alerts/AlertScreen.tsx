import { Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import {styles} from './style'


const AlertScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.textStyle}> Alert Screen</Text>
      </View>
    </ScreenWrapper>
  )
}

export default AlertScreen