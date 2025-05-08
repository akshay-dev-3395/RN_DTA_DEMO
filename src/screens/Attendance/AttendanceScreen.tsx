import { Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import {styles} from './style'


const AttendanceScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.textStyle}> Attendance Screen</Text>
      </View>
    </ScreenWrapper>
  )
}

export default AttendanceScreen