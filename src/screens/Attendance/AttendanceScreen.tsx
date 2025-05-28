import { Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import {styles} from './style'


const AttendanceScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}> Attendance</Text>
      </View>
      <View style={styles.bodyContainer}>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default AttendanceScreen