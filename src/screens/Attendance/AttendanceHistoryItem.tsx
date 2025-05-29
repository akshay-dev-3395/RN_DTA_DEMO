import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeFontSize, wp } from '@app/constants/responsive';
import { COLORS, FONTS } from '@app/constants/theme';
import ArrowDownIcon from '@app/assets/icons/arrowDown.svg'
import AttendanceOverview from './AttendanceOverview'

type Props = {
    attendanceData: any;
};

const AttendanceHistoryItem = ({attendanceData}: Props) => {
    const renderItem = ({ item }: any) => (
        <>
              
              <View style={[styles.card, item.status === 'casual' ? styles.leaveCard : styles.presentCard]}>
                <View style={[styles.dateColumn, item.status === 'casual' ? {borderColor: '#FFDFDF', backgroundColor: COLORS.white} : 
                    (item.status === 'present' ? {borderColor: '#C4FFBB', backgroundColor: '#EDFFEA'}: {borderColor: '#FFDFDF', backgroundColor: '#FFEDED'})]}>
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.dayText}>{item.day}</Text>
                </View>
                {item.status === 'casual' ? (
                    <View style={styles.leaveColumn}>
                    <Text style={styles.leaveText}>Casual leave</Text>
                    </View>
                ) : (
                    <>
                        {item.status === 'firstHalf' && (
                            <View style={[styles.infoColumn, item.status === 'firstHalf' ? {boxShadow: '1px 0px 0px 0px #a8a7a7', width: '50%'} 
                                : {boxShadow: '1px 0px 0px 0px #fff'}]}>
                                <Text style={styles.leaveText}>Casual leave</Text>
                            </View>
                        )}
                        <View style={[styles.infoColumn, item.status === 'firstHalf'
                        ? { boxShadow: '1px 0px 0px 0px #fff', width: '50%' }
                        : item.status === 'secondHalf'
                        ? { boxShadow: '1px 0px 0px 0px #fff', width: '50%'  }
                        : { boxShadow: '1px 0px 0px 0px #a8a7a7', }]}>
                            <Text style={styles.timeText}>Check in</Text>
                            <Text style={styles.timeValue}>{item.checkinTime}</Text>
                        </View>
                        <View style={[styles.infoColumn, item.status === 'secondHalf' ? {boxShadow: '1px 0px 0px 0px #a8a7a7'} 
                            : {boxShadow: '1px 0px 0px 0px #fff'}]}>
                            <Text style={styles.timeText}>Check out</Text>
                            <Text style={styles.timeValue}>{item.checkoutTime}</Text>
                        </View>
                        {item.status === 'secondHalf' && (
                            <View style={styles.infoColumn}>
                                <Text style={styles.leaveText}>Casual leave</Text>
                            </View>
                        )}
                    </>
                
                )}
                
                
                </View>
        </>
        
        
      );
  return (
    <View>
     <FlatList
        ListHeaderComponent={AttendanceOverview}
        data={attendanceData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: wp(20) }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default AttendanceHistoryItem

const styles = StyleSheet.create({
    overviewCard: { 
        borderRadius: 10, 
        margin: wp(25),
        marginTop: wp(10)},
      overviewHeader: { 
        flexDirection: 'row', 
        padding: wp(20), 
        width:'100%',
        justifyContent: 'space-between', 
    },
      overviewTitle: { 
        ...FONTS.semiBold,
        marginTop: wp(3),
        fontSize: normalizeFontSize(18) },
    card: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: wp(15), 
        borderRadius: wp(8), 
        margin: wp(8),
        marginLeft: wp(25),
        marginRight: wp(25),
        
     },   
  presentCard: { 
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: '#C4FFBB',
     },
  leaveCard: { 
        backgroundColor: '#FEE8E8' },
  dateColumn: { 
        alignItems: 'center', 
        backgroundColor: COLORS.white,
        padding: wp(10),
        borderWidth: 1,
        borderRadius: wp(10), //#C4FFBB
        width: wp(55) },
        
  dateText: { 
        ...FONTS.bold,
        fontSize: normalizeFontSize(18) },
  dayText: { 
        fontSize: normalizeFontSize(12), 
        color: '#666' },
  infoColumn: { 
        flex: 1, 
        textAlign: 'center',
        alignItems: 'center' },
  timeText: { 
        marginBottom: wp(10),
        fontSize: normalizeFontSize(12), 
        color: COLORS.black },
  timeValue: { 
        fontSize: normalizeFontSize(14), 
        ...FONTS.semiBold,},
  leaveColumn: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' },
  leaveText: { 
        color: 'red', 
        textAlign: 'center',
        justifyContent: 'center', 
        fontSize: normalizeFontSize(14), 
        padding: wp(5),
        ...FONTS.medium, },
})