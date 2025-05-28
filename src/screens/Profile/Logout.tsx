import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeFontSize, wp } from '@app/constants/responsive'
import { COLORS, FONTS } from '@app/constants/theme'
import ButtonComponent from '@app/components/ButtonComponent/ButtonComponent'

type Props = {
    onCancelLogout: () => void;
    onPressLogout: () => void;
  };

const Logout = ({onPressLogout, onCancelLogout }: Props) => {
    
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Are you sure to logout ?</Text>
            <Text style={styles.subText}>By clicking logout you will not get updates from our app</Text>
            <View style={styles.buttonRow}>
                <ButtonComponent buttonName={'Cancel'} onPress={onCancelLogout} buttonStyle={{backgroundColor: COLORS.white, borderColor: COLORS.primary, width: '45%'}}
                nameStyle={{color: COLORS.black}}/>
                <ButtonComponent buttonName={'Logout'} onPress={onPressLogout} buttonStyle={{width: '45%'}}/>
            </View>
            
        </View>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({
    container: {
      },
      headerContainer: {
        width: '90%',
        zIndex: 10,
        boxShadow: '0px 1px 0px 0px #a8a7a7',
        backgroundColor: COLORS.white,
        borderRadius: wp(10),
        alignSelf: 'center',
        padding: wp(20)
      },
      headerText:{
        fontSize: normalizeFontSize(18),
        ...FONTS.bold,
        alignSelf: 'center',
        padding: wp(20)
      },
      subText: {
        fontSize: normalizeFontSize(12),
        alignSelf: 'center',
        textAlign: 'center'
      },
      buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-evenly',
        padding: wp(5),
        marginTop: wp(10)
      }
})