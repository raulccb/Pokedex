import styled from 'styled-components/native';
import { fonts, colors } from '../../../theme';

export const Container = styled.ScrollView``;

export const WrapperRadioGroup = styled.View`
padding: 5px 10px;
`;

export const WrapperRadioButton = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperBody = styled.View``;

export const RadioItem = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${(props) =>
    props.selected
      ? props.selectedRadioColor
        ? props.selectedRadioColor
        : `${colors.global.pink}`
      : props.unselectedRadioColor
        ? props.unselectedRadioColor
        : `${colors.global.gray}`};
  align-items: center;
  justify-content: center;
`;

export const Checked = styled.View`
  width: 23px;
  height: 23px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.selectedRadioColor ? props.selectedRadioColor : `${colors.global.pink}`};
`;

export const WrapperText = styled.TouchableOpacity`
  display: flex;
  flex:1;
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.Image`
width: 50px;
height: 50px;
margin-right: 10px;
`;

export const RadioText = styled.Text`
  color: ${(props) =>
    props.selected
      ? props.selectedTextColor
        ? props.selectedTextColor
        : `${colors.global.pink}`
      : props.unselectedTextColor
        ? props.unselectedTextColor
        : `${colors.global.gray}`};
  font-size: ${fonts.moderateScale(17)}px;
  text-transform: capitalize;
`;
