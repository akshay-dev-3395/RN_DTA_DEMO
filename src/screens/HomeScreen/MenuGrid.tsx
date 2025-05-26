import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'

import LeaveIcon from '@app/assets/icons/leaveApplication.svg';
import RemoteWorkIcon from '@app/assets/icons/remoteWorking.svg';
import SignOutIcon from '@app/assets/icons/signIn.svg';
import HistoryIcon from '@app/assets/icons/leaveHistory.svg';
import { wp } from '@app/constants/responsive';
import { FONTS } from '@app/constants/theme';

const MENU_ITEMS = [
  { id: '1', title: 'Leave\napplication', Icon: LeaveIcon, backgroundColor: '#FEF3E8' },
  { id: '2', title: 'Remote\nWorking', Icon: RemoteWorkIcon, backgroundColor: '#E5F6FF' },
  { id: '3', title: 'Sign out\nnow', Icon: SignOutIcon, backgroundColor: '#EBF9F2' },
  { id: '4', title: 'Leave / Wfh\nHistory', Icon: HistoryIcon, backgroundColor: '#E9DFF6' },
];

const MenuGrid = () => {
    const { width } = useWindowDimensions();
  console.log(width);
  const itemSize = (width) / 4;
  console.log("item ", itemSize);

  return (
    <View style={styles.bodySection}>
          <Text style={styles.menu}>Menu</Text>
          <View style={styles.menuSection}>
          <View style={styles.gridWrapper}>
            <View style={styles.gridContainer}>
                {MENU_ITEMS.map(item => (
                  <View key={item.id} style={{ width: itemSize, alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity
                      style={[
                        styles.card,
                        {
                          backgroundColor: item.backgroundColor,
                          width: itemSize * 0.7,
                          height: itemSize * 0.7,
                        },
                      ]}>
                      <item.Icon width={itemSize * 0.3} height={itemSize * 0.3} />
                    </TouchableOpacity>
                    <Text style={styles.cardText}>{item.title}</Text>
                  </View>
              ))}
            </View>
          </View>
          </View>
        </View>
    
      );
}

export default MenuGrid

const styles = StyleSheet.create({
  menu: {
    marginTop: wp(20),
    marginBottom: wp(10),
    marginLeft: wp(25),
    ...FONTS.semiBold,
    fontSize: wp(17),
  },
  menuSection:{
    flexDirection: 'row'
  },
  bodySection:{
    marginBottom: wp(10)
  },
  gridWrapper: {},
      gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      card: {
        marginBottom: wp(10),
        borderRadius: wp(12),
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardText: {
        textAlign: 'center',
        fontSize: wp(12),
        ...FONTS.medium,
      },
})