import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '@app/constants/theme'
import { normalizeFontSize, wp } from '@app/constants/responsive'
import UserProfileIcon from '@app/assets/icons/userProfile.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CalendarIcon from '@app/assets/icons/calander.svg';
import SignInTimeIcon from '@app/assets/icons/signInTime.svg';
import SignOutTimeIcon from '@app/assets/icons/signOutTime.svg';


const HomeHeaderComponent = () => {
  const styles = headerStyles();
  const currentTime = '8:40 pm';
  const date = new Date().getDate();
  const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const month = monthsArray[new Date().getMonth()];
  const year = new Date().getFullYear();
  const day = new Date().toLocaleString("en", { weekday: "long" }); 

  const getTime = () =>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minute = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minute} ${ampm}`;
    return timeString;
  }

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <UserProfileIcon></UserProfileIcon>
            <View style={styles.textContainer}>
            <Text style={styles.greeting}>Hello, Anjana</Text>
            <Text style={styles.subText}>DevOps Engineer</Text>
          </View>
        </View>      
        <View>
          <View style={styles.attendanceContainer}>
            <View style={styles.dateContainer}>
              <CalendarIcon/>
              <Text style={styles.dateText}>{month} {date}, {year}</Text>
              <Text style={styles.textDay}>{day}</Text>
            </View>
            <View style={styles.signRow}>
              <View style={styles.signInRow}>
                <SignInTimeIcon style={styles.signIcon}/>
                <View style={styles.signBox}>
                  <Text style={styles.signTime}>{getTime()}</Text>
                  <Text style={styles.signLabel}>Sign In</Text>
                </View>
              </View>
              <View style={styles.signInRow}>
                <SignOutTimeIcon style={styles.signIcon}/>
                <View style={styles.signBox}>
                  <Text style={styles.signTime}>-------</Text>
                  <Text style={styles.signLabel}>Sign Out</Text>
                </View>
              </View>
            </View>
          </View>

        </View>
    </View>
  )
}

export default HomeHeaderComponent

const headerStyles = ()=> { 
const insets = useSafeAreaInsets();
  
  
  return StyleSheet.create({
    container: { 
        paddingTop: insets.top + wp(10),
        paddingHorizontal:wp(25),
        paddingBottom:wp(25),
        backgroundColor: COLORS.primary, 
        borderBottomLeftRadius: wp(20), 
        borderBottomRightRadius: wp(20),
    },
    attendanceContainer: {
      marginTop: wp(25),
      height: wp(170),
      backgroundColor: "#FFFFFF2A",
      padding: wp(25),
      borderRadius: wp(10)
    },
    dateContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    textDay:{
      textAlign: 'right',
      color: COLORS.white,
      ...FONTS.semiBold,
      fontSize: normalizeFontSize(15),
    },
    dateText: {
      marginLeft: wp(8),
      color: COLORS.white,
      fontSize: normalizeFontSize(15),
      flex: 1,
    },
    profileContainer:{
      flexDirection: 'row',
    },
    textContainer: {
        marginLeft: wp(12),
      },
    greeting: { 
        fontSize: normalizeFontSize(18), 
        ...FONTS.bold, 
        color: COLORS.white 
    },
    subText: { 
        fontSize: normalizeFontSize(12), 
        color: COLORS.subText, 
        marginTop: wp(4) 
    },
    signRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    signInRow: {
      backgroundColor: COLORS.white ,
      borderRadius: wp(10),
      padding: wp(12),
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      // flex: 1
    },
    signIcon:{
      // flex: 0.2,
    },
    signBox: {
      // flex: 0.6,
      width: wp(80)
    },
    signTime: {
      fontSize: normalizeFontSize(15),
      fontWeight: 'bold',
      marginVertical: wp(4),
    },
    signLabel: {
      fontSize: normalizeFontSize(12),
      color: COLORS.gray1,
    },
})}