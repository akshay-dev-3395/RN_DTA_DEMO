import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserProfileIcon from '@app/assets/icons/userProfile.svg';
import UserIcon from '@app/assets/icons/user.svg';
import EmailIcon from '@app/assets/icons/email.svg';
import CallIcon from '@app/assets/icons/call.svg';
import CalendarIcon from '@app/assets/icons/calendarGray.svg';
import { normalizeFontSize, wp } from '@app/constants/responsive';
import { COLORS, FONTS } from '@app/constants/theme';


const InformationComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
            <UserProfileIcon />
            <View style={styles.textContainer}>
            <Text style={styles.greeting}>Anjana</Text>
            <Text style={styles.subText}>DevOps Engineer</Text>
          </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.headerText}>Information</Text>
        <View style={styles.informationCardRow}>
            <View style={styles.informationTitle}>
                <UserIcon />
                <Text style={styles.informationText}>Employee ID</Text>
            </View>          
            <Text style={styles.informationTextValue}>EMP1002</Text>
        </View>

        <View style={styles.informationCardRow}>
            <View style={styles.informationTitle}>
                <EmailIcon />
                <Text style={styles.informationText}>Email ID</Text>
            </View>          
            <Text style={styles.informationTextValue}>aswin@gmail.com</Text>
        </View>

        <View style={styles.informationCardRow}>
            <View style={styles.informationTitle}>
                <CallIcon />
                <Text style={styles.informationText}>Phone Number</Text>
            </View>          
            <Text style={styles.informationTextValue}>9876543210</Text>
        </View>

        <View style={styles.informationCardRow}>
            <View style={styles.informationTitle}>
                <CalendarIcon />
                <Text style={styles.informationText}>Joining Date</Text>
            </View>          
            <Text style={styles.informationTextValue}>12 June 2012</Text>
        </View>

      </View>
    </View>
  )
}

export default InformationComponent

const styles = StyleSheet.create({
    container:{
        margin: wp(25),
        boxShadow: '0px 0px 0px 0px #8A8A8A',
        borderRadius: wp(10),
        padding: wp(10)
    },
   bodyContainer: {},
    headerContainer: {
        flexDirection: 'row',
        marginTop: wp(5),
        padding: wp(10),
        boxShadow: '0px 1px 0px 0px #eee',
      },
      textContainer: {
          marginLeft: wp(12),
        },
      greeting: { 
          fontSize: normalizeFontSize(18), 
          ...FONTS.bold, 
          color: COLORS.black 
      },
      subText: { 
          fontSize: normalizeFontSize(12), 
          color: COLORS.subText, 
          marginTop: wp(4) 
      },
      headerText: {
        fontSize: normalizeFontSize(18), 
        color: COLORS.gray2,
        margin: wp(10),
      },
      informationCardRow:{
        flexDirection: 'row',
        margin: wp(10) ,
        justifyContent: 'space-between',
        textAlign: 'center'
      },
      informationText:{
        fontSize: normalizeFontSize(14), 
        color: COLORS.subText, 
        marginLeft: wp(5)
      },
      informationTextValue: {},
      informationTitle:{
        flexDirection: 'row'
      }
})