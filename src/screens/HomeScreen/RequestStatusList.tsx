import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { wp } from '@app/constants/responsive';
import { FONTS } from '@app/constants/theme';
import RequestCard from './RequestCard'; // Assuming each item is rendered using a separate component
import LeaveIcon from '@app/assets/icons/leaveApplication.svg';
import RemoteWorkIcon from '@app/assets/icons/remoteWorking.svg';

const requestData = [
  {
    title: 'Leave Request',
    date: 'Jan 10, 2024',
    status: 'On Process',
    color: '#FFF8EB',
    textColor: '#EA9647',
    icon: <LeaveIcon />,
    iconBackgroundColor: '#FEF3E8'
  },
  {
    title: 'WFH Request',
    date: 'Jan 10, 2024',
    status: 'Approved',
    color: '#F0FFEB',
    textColor: '#76C859',
    icon: <RemoteWorkIcon/>,
    iconBackgroundColor: '#E5F6FF'
  },
];

const RequestStatusList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Requests status</Text>
      <View style={styles.cardWrapper}>
        {requestData.map((item, index) => (
          <RequestCard key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

export default RequestStatusList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
  },
  sectionTitle: {
    marginBottom: wp(10),
    ...FONTS.semiBold,
    fontSize: wp(17),
  },
  cardWrapper: {
    gap: wp(12),
    
  },
});
