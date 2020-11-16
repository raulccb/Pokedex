import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../theme'

const styles = StyleSheet.create({
    view: {
        flex: 1,
        borderRadius: 15,
        margin: 15,
        paddingVertical: 10,
        paddingHorizontal: 14,
        elevation: 2,
        justifyContent: 'space-between',
        minHeight: 150
    },
    headerLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
    },
    headerRight: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    body: {
        flex: 1,
    },
    footer: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    data: {
        fontSize: 13,
        color: 'rgba(255,255,255,.5)'
    },
    titulo: {
        fontFamily: fonts.type.base,
        fontSize: fonts.moderateScale(23),
        color: colors.global.white,
        paddingBottom: 10
    },
    texto: {
        fontFamily: fonts.type.base,
        fontSize: fonts.moderateScale(13),
        color: colors.global.white,
    },
    textoBt: {
        fontFamily: fonts.type.base,
        fontSize: fonts.moderateScale(12),
        color: colors.global.white,
        textAlign: 'center'
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.global.white,
        padding: 8,
        height: 30,
        width: 60,
    },
    textBold: {
		fontWeight: 'bold'
	}
})

export default styles