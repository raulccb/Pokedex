import React, { useState } from 'react'

/**
 * Custom Components
 */
import { Input } from '../../../components'

/**
 * Styled Components
 */
import {
    Img,
    Title,
    Wrapper,
    WrapperTop,
    WrapperMiddle,
    WrapperBottom,
    Container,
    BtIcon
} from './styles'

/**
 * Helper utils
 */
import { images } from '../../../theme'
import { showAlert } from '../../../utils/'
import routes from '../../../navigation/routes'

export default function CadStep1({ navigation }) {

    const [text, setText] = useState('')

    const ButtonIcon = ({ onPress }) => (
        <BtIcon onPress={onPress}>
            <Img source={images.icon_next} />
        </BtIcon>
    )

    const nextScreen = () => {

        if (text != '')
            addTrainer(text)
        else
            showAlert('Digite o nome do treinador')
    }

    const onChange = text => setText(text)
    const addTrainer = name => navigation.navigate(routes.CADASTRO_2, { name })

    return (
        <Container source={images.image_bg}>
            <Wrapper>
                <WrapperTop>
                    <Title>Let's meet each other first?</Title>
                </WrapperTop>
                <WrapperMiddle>
                    <Input
                        value={text}
                        onChangeText={onChange}
                        label={'First we need to know your name...'}
                    />
                </WrapperMiddle>
                <WrapperBottom>
                    <ButtonIcon onPress={nextScreen} />
                </WrapperBottom>
            </Wrapper>
        </Container>
    )
}