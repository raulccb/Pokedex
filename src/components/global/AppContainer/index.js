import React from 'react'
import { StyleSheet, StatusBar, ScrollView } from 'react-native'
import { metrics } from '../../../theme'

export default AppContainer = props => (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            {props.children}
        </ScrollView>
)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        marginTop: 25,
    },
    scrollContent: {
        padding: 5
    }
})

