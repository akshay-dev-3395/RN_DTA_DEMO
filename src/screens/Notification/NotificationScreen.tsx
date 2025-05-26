import { FlatList, Text, View } from 'react-native'
import React from 'react'
import {styles} from './style'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import NotificationItemCard from './NotificationItemCard'

const NotificationScreen = () => {
  const notifications = [
    {
      id: '1',
      title: 'Your request for leave has been approved',
      subtitle: 'Your request for time off from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
    {
      id: '2',
      title: 'Your request for WFH has been approved.',
      subtitle: 'Your request for WFH from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
    {
      id: '3',
      title: 'Important Policy Update',
      subtitle: 'We’ve updated our company policy effective 12/04/24. Please review the new changes...',
      time: '07:34 PM',
    },
    {
      id: '4',
      title: 'Your request for WFH has been approved.',
      subtitle: 'Your request for WFH from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
    {
      id: '5',
      title: 'Important Policy Update',
      subtitle: 'We’ve updated our company policy effective 12/04/24. Please review the new changes...',
      time: '07:34 PM',
    },
    {
      id: '6',
      title: 'Your request for leave has been approved',
      subtitle: 'Your request for time off from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
    {
      id: '7',
      title: 'Important Policy Update',
      subtitle: 'We’ve updated our company policy effective 12/04/24. Please review the new changes...',
      time: '07:34 PM',
    },
    {
      id: '8',
      title: 'Your request for WFH has been approved.',
      subtitle: 'Your request for WFH from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
    {
      id: '9',
      title: 'Important Policy Update',
      subtitle: 'We’ve updated our company policy effective 12/04/24. Please review the new changes...',
      time: '07:34 PM',
    },
    {
      id: '10',
      title: 'Your request for leave has been approved',
      subtitle: 'Your request for time off from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
    {
      id: '11',
      title: 'Important Policy Update',
      subtitle: 'We’ve updated our company policy effective 12/04/24. Please review the new changes...',
      time: '07:34 PM',
    },
    {
      id: '12',
      title: 'Your request for WFH has been approved.',
      subtitle: 'Your request for WFH from 12/03/24 to 15/03/24 has been approved. Enjoy your break!',
      time: '07:34 PM',
    },
  ];
  return (
    <ScreenWrapper>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}> Notifications</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItemCard {...item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      </View>
      </View>
    </ScreenWrapper>
  )
}

export default NotificationScreen