import { Text, View } from 'react-native'
import React from 'react'
import {styles} from './style'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'

const NotificationScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.textStyle}> Notification Screen</Text>
      </View>
    </ScreenWrapper>
  )
}

export default NotificationScreen