import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.ImageBackground`
  display: flex;
  flex: 1;
`;

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const WrapperTop = styled.View`
  padding: 15px;
  display: flex;
  flex: ${Platform.OS === 'ios' ? 1 : 1.5};
  margin-bottom: 20px;
  justify-content: space-evenly;
`;

export const WrapperMiddle = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Img = styled.Image``;

export const WrapperBottom = styled.View`
	align-items: flex-end;
	justify-content: flex-end;
`;
