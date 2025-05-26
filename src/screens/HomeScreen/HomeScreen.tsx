import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import {styles} from './styles';
import HomeHeaderComponent from './HomeHeaderComponent';
import MenuGrid from './MenuGrid';
import RequestStatusList from './RequestStatusList';
import AnnouncementSection from './Announcements';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '@app/constants/theme';

const HomeScreen = () => {
  return (
    <ScreenWrapper translucent backgroundColor={COLORS.primary} statusBarStyle={"light-content"} >
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <HomeHeaderComponent />
        </View>
        <ScrollView
          style={styles.scrollSection}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <MenuGrid/>
          <RequestStatusList/>
          <AnnouncementSection />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
