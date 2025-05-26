import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { wp } from '@app/constants/responsive';
import { COLORS, FONTS } from '@app/constants/theme';
import AnnouncementCard from './AnnouncementCard';

const AnnouncementData = [
    {
        title: "Ruppells solutions - Tech Team",
        content: "Lorem iAEB0B4sit amet consectetur. Pellentesque pretium magna commodo in facilisi ut quam sagittis mi. Quam lorem imperdiet hendrerit lacus amet sit. In ligula orci sit nunc. At blandit gravida nisl lacus mattis..."
    },
    {
        title: "Ruppells solutions - Tech Team2",
        content: "Lorem iAEB084sit amet consectetur. Pellentesque pretium magna commodo in facilisi ut quam sagittis mi."
    }
];

const AnnouncementSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Announcements</Text>
      {AnnouncementData.map((item, index) => (
          <AnnouncementCard key={index} {...item} /> 
      ))}
    </View>       
  );
};

export default AnnouncementSection;

const styles = StyleSheet.create({
  container: {
    marginTop: wp(20),
    paddingHorizontal: wp(20),
    marginBottom: wp(30),
  },
  headerText: {
    // marginTop: wp(10),
    marginBottom: wp(10),
    ...FONTS.semiBold,
    fontSize: wp(17),
  },
  
});
