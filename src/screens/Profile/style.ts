import { normalizeFontSize, wp } from "@app/constants/responsive";
import { COLORS, FONTS } from "@app/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      
      placeholder: {
        width: wp(30), 
      },
      
      bodyContainer:{
        width: '100%',
      },
      backArrowWrap: {
        width: wp(30),
        height: wp(30),
        alignSelf: 'flex-start'
      },
})