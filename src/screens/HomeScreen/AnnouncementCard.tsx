import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '@app/constants/theme'
import { wp } from '@app/constants/responsive'
import AnnouncementIcon from '@app/assets/icons/team.svg';


type Props = {
    title: string;
    content: string;
}

const AnnouncementCard = ({title, content}: Props) => {
    console.log("title", title);
  return (
    <View style={styles.card}>
        <View style={styles.iconContainer}>
            <AnnouncementIcon width={wp(30)} height={wp(30)} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>
                {content}
            </Text>
        </View>
    </View>
  )
}

export default AnnouncementCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: wp(12),
        padding: wp(20),
        flexDirection: 'row',
        alignItems: 'flex-start',
    
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    
        // Elevation for Android
        elevation: 3,
        marginBottom: wp(10)
      },
      iconContainer: {
        marginRight: wp(12),
        marginTop: wp(4),
      },    
    textContainer: {
        flex: 1,
      },
      title: {
        ...FONTS.medium,
        fontSize: wp(14),
        color: COLORS.black,
        marginBottom: wp(6),
      },
      description: {
        ...FONTS.regular,
        fontSize: wp(12),
        color: COLORS.gray1,
      },
})