import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #6548a3;
  padding: 0 30px;
`;

export const BackgroundImage = styled.Image`
  width: 410px;
  height: 560px;
  position: absolute;
`;
export const LogoImage = styled.Image`
  width: 203px;
  height: 304px;
  margin: 110px 0 60px 30px;
`;
export const Title = styled.Text`
  width: 225px;
  height: 86px;
  margin-left: 30px;

  font-family: 'Rubik-Medium';
  font-size: 30px;
  line-height: 42px;
  color: #ff6680;
`;
export const Description = styled.Text`
  width: 250px;
  height: 100px;
  margin-top: 20px;

  font-family: 'Rubik-Regular';
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  margin-left: 30px;
`;
export const StartButton = styled(RectButton)`
  width: 100%;
  height: 60px;
  margin-top: 40px;

  align-items: center;
  justify-content: center;

  border-radius: 150px;
  background: #ff6680;
`;

export const StartButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'Rubik-Regular';
`;
