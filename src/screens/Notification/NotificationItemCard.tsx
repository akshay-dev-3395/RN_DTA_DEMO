import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeFontSize, wp } from '@app/constants/responsive'
import { COLORS, FONTS } from '@app/constants/theme'
import NotificationIcon from '@app/assets/icons/notificationUnread.svg';


type Props = {
    id: string;
    title: string;
    subtitle: string;
    time: string;
  };

const NotificationItemCard = ({title, subtitle, time}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <NotificationIcon style={{zIndex: -1}}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  )
}

export default NotificationItemCard

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(15),
        paddingVertical: wp(18),
      },
    textContainer: {
        flex: 1,
        marginLeft: wp(15)
      },
      title: {
        fontSize: normalizeFontSize(15),
        ...FONTS.semiBold,
        color: COLORS.black,
      },
      subtitle: {
        fontSize: normalizeFontSize(12),
        color: COLORS.gray1,
        marginTop: wp(3),
      },
      time: {
        fontSize: normalizeFontSize(11),
        color: COLORS.gray2,
        marginTop: wp(10)
      },
})