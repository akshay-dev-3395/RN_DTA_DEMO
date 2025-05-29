import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { normalizeFontSize, wp } from '@app/constants/responsive'
import { COLORS, FONTS } from '@app/constants/theme'
import ArrowDownIcon from '@app/assets/icons/arrowDown.svg'

const AttendanceOverview = () => {
  return (
    <View>
        <View style={styles.overviewCard}>
            <View style={styles.overviewHeader}>
              <Text style={styles.overviewTitle}>Overview</Text>
              <Pressable style={{flexDirection: 'row'}}>
                  <Text >January</Text>
                  <ArrowDownIcon style={{marginTop: wp(4), marginLeft: wp(4)}}/>
              </Pressable>
            </View>
            <View style={styles.overviewStats}>
              <Text style={styles.stat}>Total days{"\n\n"}<Text style={styles.statValue}>23</Text></Text>
              <Text style={styles.stat}>Casual Leave{"\n\n"}<Text style={styles.statValue}>03</Text></Text>
              <Text style={styles.stat}>Remaining Casual Leave{"\n\n"}<Text style={styles.statValue}>12</Text></Text>
            </View>
            <View style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: '#C4FFBB' }]} />
                <Text style={styles.legendLabel}>Present</Text>
              <View style={[styles.legendDot, { backgroundColor: '#FFDFDF', marginLeft: wp(10) }]} />
                <Text style={styles.legendLabel}>Leave</Text>
            </View>
        </View>
        <View style={[styles.overviewHeader, {boxShadow: '0px 0px 0px 0px #eee',}]}>
            <Text style={styles.overviewTitle}>Attendance history</Text>
            <Pressable style={{flexDirection: 'row'}}>
              <Text >January</Text>
              <ArrowDownIcon style={{marginTop: wp(4), marginLeft: wp(4)}}/>
            </Pressable>
        </View>
    </View>
    
  )
}

export default AttendanceOverview

const styles = StyleSheet.create({
  overviewCard: { 
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#eee',
    margin: wp(25) },
  overviewHeader: { 
    flexDirection: 'row', 
    padding: wp(20), 
    width:'100%',
    justifyContent: 'space-between', 
    boxShadow: '0px 1px 0px 0px #eee',
},
  overviewTitle: { 
    ...FONTS.semiBold,
    marginTop: wp(3),
    fontSize: normalizeFontSize(18) },
  overviewStats: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: wp(10) },
  stat: { 
    fontSize: normalizeFontSize(12), 
    color: COLORS.black, 
    marginBottom: wp(3),
    paddingHorizontal: wp(15), 
    paddingVertical: wp(10),
    boxShadow: '1px 0px 0px 0px #eee',
    textAlign: 'center' },
  statValue: { 
    fontSize: normalizeFontSize(20), 
    ...FONTS.semiBold,
    color: COLORS.black },
  legendRow: { 
    flexDirection: 'row', 
    marginTop: wp(10), 
    paddingHorizontal: wp(15), 
    paddingBottom: wp(20),
    alignItems: 'center' },
  legendDot: { 
    width: wp(11), 
    height: wp(11), 
    borderRadius: wp(3) },
  legendLabel: { 
    marginLeft: wp(4), 
    fontSize: normalizeFontSize(12), 
    color: COLORS.black },
})