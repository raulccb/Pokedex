import styled from 'styled-components/native';
import { colors, fonts } from '../../../theme';

export const Container = styled.TouchableOpacity`
    flex-Direction: row;
    align-Items: center;
    justify-Content: center;
    height: 50px;
    width: 100%;
    border-Radius: 10px;
    box-shadow: 10px 5px 5px #000;
    background-Color: ${(props) => props.disabled ? `${colors.global.grayRgb(.3)}` : `${colors.global.pink}`};
`;

export const WrapperDescription = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* max-width: 80%; */
`;

export const Description = styled.Text`
  font-size: ${fonts.moderateScale(22)}px;
  text-align: center;
  color: ${colors.global.white};
`;
