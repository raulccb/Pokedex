import React from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { images } from '../../theme/index'

const Logo = () => (
    <Animatable.View
        delay={50}
        animation="slideInDown"
        useNativeDriver={true}
        style={styles.boxLogo}>
        <Image
            style={styles.logoImg}
            source={images.image_pokemon}
        />
        <Image
            style={styles.logoImg}
            source={images.image_finder}
        />
    </Animatable.View>
)

export default Logo

const styles = StyleSheet.create({
    boxLogo: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImg: {
        resizeMode: "center",
    }
})