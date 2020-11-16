import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { colors, fonts } from '../../../theme';

export const Container = styled.ImageBackground`
  display: flex;
  flex: 1;
  padding: 20px;
`;

export const BtIcon = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  color: ${(props) => props.color ? `${props.color}` : `${colors.global.white}`};
  font-size: ${(props) => props.size ? `${fonts.moderateScale(props.size)}px` : `${fonts.moderateScale(24)}px`};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-bottom-color: ${colors.global.grayRgb(.3)};
  border-bottom-width: 1px;
  padding: 15px;
`;

export const ButtonClose = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`;

export const BoxSelectPokemon = styled.TouchableOpacity`
width: 100%;
align-items: flex-end;
border-bottom-color: ${colors.global.white};
border-bottom-width: 2px;
padding: 10px 5px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const WrapperModal = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const WrapperTop = styled.View`
  display: flex;
  flex: .25;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperMiddle = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image``;

export const WrapperBottom = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px 8px;
`;