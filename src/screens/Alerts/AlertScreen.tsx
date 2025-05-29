import { FlatList, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import {styles} from './style'
import AlertsItemCard from './AlertsItemCard'

const AlertScreen = () => {
  const alerts = [
    {
      id: '1',
      title: 'Ruppells solution - tech team',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '2',
      title: 'Overseas dashboard',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '3',
      title: 'inomx - bug report',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '4',
      title: 'Ruppells solution - tech team',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '5',
      title: 'Overseas dashboard',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '6',
      title: 'inomx - bug report',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '7',
      title: 'Ruppells solution - tech team',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '8',
      title: 'Overseas dashboard',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '9',
      title: 'inomx - bug report',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '10',
      title: 'Ruppells solution - tech team',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '11',
      title: 'Overseas dashboard',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
    {
      id: '12',
      title: 'inomx - bug report',
      subtitle: 'Aliquam a dui vel justo fringilla...',
      time: '07:34 PM',
    },
  ];
  return (
    <ScreenWrapper>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}> Alerts</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AlertsItemCard {...item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
      </View>
      </View>
    </ScreenWrapper>
  )
}

export default AlertScreen