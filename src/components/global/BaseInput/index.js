import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors, fonts } from '../../../theme'

const BaseInput = ({ children, label }) => (
    <View style={styles.baseInput}>
        <Text style={styles.lbTitle} uppercase={false}>{label}</Text>
        {children}
    </View>
)

const styles = StyleSheet.create({
    baseInput: {
        width: '100%',
        paddingVertical: 6
    },
    lbTitle: {
        fontSize: fonts.moderateScale(16),
        color: colors.global.white,
        paddingVertical: 8,
        paddingLeft: 3
        
    }
})

export default BaseInput

