import { Pressable, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import {styles} from './style'
import AttendanceOverview from './AttendanceOverview'
import ArrowDownIcon from '@app/assets/icons/arrowDown.svg'
import { wp } from '@app/constants/responsive'
import AttendanceHistoryItem from './AttendanceHistoryItem'
import useAttendanceHook from './useAttendanceHook'
import { ScrollView } from 'react-native-gesture-handler'


const AttendanceScreen = () => {
  const {
    attendanceData
  } = useAttendanceHook();
  return (
    <ScreenWrapper>
      
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}> Attendance</Text>
        </View>
        <View style={styles.bodyContainer}>
        <AttendanceHistoryItem attendanceData={attendanceData}/>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default AttendanceScreen