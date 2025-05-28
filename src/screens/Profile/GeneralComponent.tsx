import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TermsConditionIcon from '@app/assets/icons/terms.svg';
import PrivacyPolicyIcon from '@app/assets/icons/privacyPolicy.svg';
import LogoutIcon from '@app/assets/icons/logout.svg';
import ArrowLeftIcon from '@app/assets/icons/arrowLeft.svg';
import { normalizeFontSize, wp } from '@app/constants/responsive';
import { COLORS } from '@app/constants/theme';


type Props = {
  isLogoutModalVisible: any;
  navigateToTermsCondition: (title: any) => void;
  logout: () => void;
};

const GeneralComponent = ({isLogoutModalVisible, navigateToTermsCondition, logout} : Props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>General</Text>
          <Pressable onPress={() => navigateToTermsCondition('Terms & conditions')}>
            <View style={styles.generalCardCardRow}>
                <View style={styles.title}>
                    <TermsConditionIcon />
                    <Text style={styles.text}>Terms & conditions</Text>
                </View>          
            </View>
          </Pressable>
          
          <Pressable onPress={() => navigateToTermsCondition('Privacy Policy')}>
            <View style={styles.generalCardCardRow}>
                <View style={styles.title}>
                    <PrivacyPolicyIcon />
                    <Text style={styles.text}>Privacy Policy</Text>
                </View>          
            </View>
          </Pressable>
    
          <Pressable onPress={() => logout()}>
            <View style={styles.generalCardCardRow}>
                <View style={styles.title}>
                    <LogoutIcon />
                    <Text style={styles.text}>Logout</Text>
                </View>  
                <ArrowLeftIcon />        
            </View>
          </Pressable>
          
        </View>
      )
}

export default GeneralComponent

const styles = StyleSheet.create({
    container:{
      margin: wp(25),
      boxShadow: '0px 0px 0px 0px #8A8A8A',
      borderRadius: wp(10),
      padding: wp(10),
      marginTop: wp(0)
  },
  headerText: {
    fontSize: normalizeFontSize(18), 
    color: COLORS.gray2,
    margin: wp(10),
  },
  generalCardCardRow:{
    flexDirection: 'row',
    margin: wp(10) ,
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  text:{
    fontSize: normalizeFontSize(14), 
    color: COLORS.black, 
    marginLeft: wp(5)
  },
  title:{
    flexDirection: 'row'
  }
  })