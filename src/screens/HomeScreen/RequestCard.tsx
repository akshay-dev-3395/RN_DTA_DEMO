import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { normalizeFontSize, wp } from '@app/constants/responsive';
import { COLORS, FONTS } from '@app/constants/theme';

type Props = {
  title: string;
  date: string;
  status: string;
  color: string;
  textColor: string;
  icon: React.ReactNode;
  iconBackgroundColor: string;
};

const RequestCard = ({ title, date, status, color, textColor, icon, iconBackgroundColor }: Props) => {
  return (
    <View style={styles.card}>
        <View style={[{backgroundColor: iconBackgroundColor}, styles.iconWrapper]}>
        {icon}
        </View>
        <View style={styles.infoContainer}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
        <View style={[styles.statusBox, { backgroundColor: color }]}>
            <Text style={[styles.statusText, {color: textColor}]}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    

    backgroundColor: COLORS.white,
    borderRadius: wp(10),
    padding: wp(25),
    // justifyContent: '',
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 4,
  },
  title: {
    fontSize: normalizeFontSize(14),
    ...FONTS.medium,
    color: COLORS.black,
  },
  date: {
    fontSize: normalizeFontSize(12),
    color: COLORS.gray1,
    marginTop: wp(4),
  },
  statusBox: {
    padding: wp(10),
    borderRadius: wp(10),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp(12),
  },
  statusText: {
    fontSize: normalizeFontSize(12),
    ...FONTS.semiBold,
  },
  iconWrapper: {
    borderRadius: wp(10), 
    width: wp(50),
    height: wp(50),
    justifyContent: 'center',   
    alignItems: 'center',       
    alignSelf: 'center',
  }
});
