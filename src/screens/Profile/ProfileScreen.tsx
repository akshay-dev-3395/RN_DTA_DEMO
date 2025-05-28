import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper'
import BackArrow from '@app/assets/icons/backArrow.svg'
import { navigateBack } from '@app/services/navigationService'
import InformationComponent from './InformationComponent'
import GeneralComponent from './GeneralComponent'
import useProfileHook from './useProfileHook'
import CustomModal from '@app/components/CustomModal/CustomModal'
import Logout from './Logout'

const ProfileScreen = () => {
  const {
    isLogoutModalVisible,
    navigateToTermsCondition,
    logout,
    onPressBack,
    onCancelLogout,
    onPressLogout
  } = useProfileHook();
    
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
              <TouchableOpacity style={styles.backArrowWrap} onPress={onPressBack}>
              <BackArrow />
              </TouchableOpacity>
              <Text style={styles.textStyle}>My Profile</Text>
              <View style={styles.placeholder} /> {/* empty space to balance layout */}
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <InformationComponent />
          <GeneralComponent isLogoutModalVisible={false} navigateToTermsCondition={navigateToTermsCondition} logout={logout}/>
        </View>
      </View>
      {isLogoutModalVisible && (
          <CustomModal
            isVisible={isLogoutModalVisible}
            onClose={() => {}}
            position={'center'}>
            <Logout onPressLogout={onPressLogout} onCancelLogout={onCancelLogout}/>
          </CustomModal>
        )}
    </ScreenWrapper>
  )
}

export default ProfileScreen