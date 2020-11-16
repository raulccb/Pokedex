import React from 'react'
import * as Animatable from 'react-native-animatable'

/**
 * Custom Components
 */
import { Logo, Button } from '../../components'

/**
 * Helper utils
 */
import { images } from '../../theme'
import routes from '../../navigation/routes'

/**
 * Styled Components
 */
import {
    Img,
    Wrapper,
    WrapperTop,
    WrapperMiddle,
    WrapperBottom,
    Container
} from './styles'


export default function GoStart({ navigation }) {

    const WrapperPikachu = () => (
        <Animatable.View
            animation="slideInUp"
            useNativeDriver={true}>
            <Img source={images.image_pikachu} />
        </Animatable.View>
    )

    const WrapperButton = ({ onPress }) => (
        <Animatable.View
            delay={500}
            animation="bounceIn"
            useNativeDriver={true}>
            <Button
                onPress={onPress}
                description={"Let's go!"}
            />
        </Animatable.View>
    )

    return (
        <Container source={images.image_bg}>
            <Wrapper>
                <WrapperTop>
                    <Logo />
                </WrapperTop>
                <WrapperMiddle>
                    <WrapperButton onPress={() => navigation.navigate(routes.CADASTRO_1)} />
                </WrapperMiddle>
                <WrapperBottom>
                    <WrapperPikachu />
                </WrapperBottom>
            </Wrapper>
        </Container>
    )
}