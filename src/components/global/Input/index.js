import React from 'react'
import { TextInput } from 'react-native'
import { string, func, object } from 'prop-types'
import BaseInput from '../BaseInput'
import { colors } from '../../../theme'
import styles from './styles'

const Input = ({ children, value, onChangeText, ...props }) => (
    <BaseInput {...props}>
        <TextInput
            style={styles.lbInput}
            value={value}
            placeholderTextColor={props.placeholderTextColor}
            placeholder={props.placeholder}
            onChangeText={onChangeText}
        />
    </BaseInput>
)

Input.propTypes = {
    value: string,
    style: object,
    placeholderTextColor: string,
    placeholder: string,
    onChangeText: func,
}

Input.defaultProps = {
    value: '',
    style: {},
    placeholder: '',
    placeholderTextColor: colors.global.black,
    onChangeText: () => { },
}

export default Input