import React from 'react'
import { func, shape, arrayOf, bool, string } from 'prop-types'

import {
  Container,
  WrapperRadioGroup,
  WrapperRadioButton,
  WrapperText,
  WrapperBody,
  RadioItem,
  RadioText,
  Checked,
  Img
} from './styles'
import { colors } from '../../../theme'

export default function RadioButton({
  options,
  selected,
  onPress,
  selectedRadioColor,
  unselectedRadioColor,
  selectedTextColor,
  unselectedTextColor,
}) {

  return (
    <Container>
      {options.map((item) => {
        return (
          <WrapperRadioGroup key={item.name}>
            <WrapperRadioButton key={item.name}>

              <WrapperText onPress={() => onPress(item.name)}>
                <Img source={{ uri: item.thumbnailImage }} />
                <RadioText
                  selectedTextColor={selectedTextColor}
                  unselectedTextColor={unselectedTextColor}
                  selected={selected === item.name}
                >{`${item.name}`}</RadioText>
              </WrapperText>

              <WrapperBody>
                <RadioItem
                  onPress={() => onPress(item.name)}
                  selected={selected === item.name}
                  unselectedRadioColor={unselectedRadioColor}
                  selectedRadioColor={selectedRadioColor}
                >
                  {selected === item.name && (
                    <Checked selectedRadioColor={selectedRadioColor} />
                  )}
                </RadioItem>
              </WrapperBody>

            </WrapperRadioButton>
          </WrapperRadioGroup>
        )
      })}
    </Container>
  )
}

RadioButton.propTypes = {
  options: arrayOf(shape({})).isRequired,
  selected: string,
  onPress: func,
  selectedRadioColor: string,
  unselectedRadioColor: string,
  selectedTextColor: string,
  unselectedTextColor: string,
}

RadioButton.defaultProps = {
  selected: false,
  onPress: () => { },
  selectedRadioColor: colors.global.green,
  unselectedRadioColor: null,
  selectedTextColor: colors.global.green,
  unselectedTextColor: null,
}
