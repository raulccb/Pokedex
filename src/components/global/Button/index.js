import React from 'react'
import { string, func, number, bool, object } from 'prop-types'
import {
    Container,
    WrapperDescription,
    Description
} from './styles'

const Button = ({
    fontsize,
    description,
    style,
    onPress,
    disabled,
}) => (
        <Container style={style} onPress={onPress} disabled={disabled}>
            <WrapperDescription>
                <Description fontsize={fontsize}>
                    {description}
                </Description>
            </WrapperDescription>
        </Container>
    )

Button.propTypes = {
    fontsize: number,
    style: object,
    description: string,
    onPress: func,
    disabled: bool,
}

Button.defaultProps = {
    fontsize: 14,
    style: {},
    description: 'Informe o texto do botao',
    disabled: false,
    onPress: () => { },
}

export default Button