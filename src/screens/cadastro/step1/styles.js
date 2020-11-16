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
color: ${colors.global.white};
font-size: ${fonts.moderateScale(24)}px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const WrapperTop = styled.View`
  display: flex;
  flex: .2;
  justify-content: flex-end;
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
  padding: 10px 0;
`;