import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackArrow from '@app/assets/icons/backArrow.svg'
import { normalizeFontSize, wp } from '@app/constants/responsive';
import { COLORS, FONTS } from '@app/constants/theme';
import { navigateBack } from '@app/services/navigationService';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import { useRoute } from '@react-navigation/native';


const TermsConditionScreen = () => {
  const route:any = useRoute()
  const title = route?.params?.title ?? null
  const onPressBack = () => {
    navigateBack();   
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
            <TouchableOpacity style={styles.backArrowWrap} onPress={onPressBack}>
            <BackArrow />
            </TouchableOpacity>
            <Text style={styles.textStyle}>{title}</Text>
            <View style={styles.placeholder} />
        </View>
      </View>
      
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.paragraphText}>Kindly Please note our Terms and Conditions</Text>
        <Text style={styles.paragraphText}>
          This  has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in Indian privacy law and information security, is information that can be used on its own or with other information toidentify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Information in accordance with our website
        </Text>
        <Text style={styles.paragraphText}>
          Please read our  carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Information in accordance with our website Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Information in accordance with our website 
        </Text>
      </View>
      

    </View>
    </ScreenWrapper>
  )
}

export default TermsConditionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    paddingVertical: wp(20),
    paddingHorizontal: wp(20),
    zIndex: 10,
    boxShadow: '0px 1px 0px 0px #a8a7a7',
  },
  headerText: {
    fontSize: normalizeFontSize(18), 
    color: COLORS.gray2,
    margin: wp(10),
  },
  placeholder: {
    width: wp(30), 
  },
  bodyContainer:{
    width: '100%',
    paddingHorizontal: wp(25)
  },
  backArrowWrap: {
    width: wp(30),
    height: wp(30),
    alignSelf: 'flex-start'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: COLORS.black,
    fontSize: normalizeFontSize(16),
    ...FONTS.semiBold,
    textAlign: 'center',
    flex: 1,
  },
  titleText:{
    ...FONTS.semiBold,
    fontSize: normalizeFontSize(18),
    marginTop: wp(15),
    marginBottom: wp(10)
  },
  paragraphText:{
    fontSize: normalizeFontSize(13),
    marginBottom: wp(20),
    color: COLORS.gray1,
    ...FONTS.regular,
    textAlign: 'justify',
    width: '100%',
  }
})