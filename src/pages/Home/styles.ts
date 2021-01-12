import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('100%')};
  background: #6548a3;
  padding-left: ${wp('7.32%')};
  padding-right: ${wp('7.32%')};
`;

export const BackgroundImage = styled.Image`
  width: ${wp('100%')};
  height: ${hp('70.77%')};
  position: absolute;
`;
export const LogoImage = styled.Image`
  width: ${wp('49.57%')};
  height: ${hp('34.69%')};
  margin-top: ${hp('12.55%')};
  margin-bottom: ${hp('6.84%')};
  margin-left: ${wp('7.32%')};
`;
export const Title = styled.Text`
  width: ${wp('54.94%')};
  height: ${hp('9.81%')};
  margin-left: ${wp('7.32%')};

  font-family: 'Rubik-Medium';
  font-size: ${wp('7.32%')};
  line-height: ${hp('4.79%')};
  color: #ff6680;
`;
export const Description = styled.Text`
  width: ${wp('60.7%')};
  height: ${hp('11.41%')};
  margin-top: ${hp('2.28%')};

  font-family: 'Rubik-Regular';
  color: #fff;
  font-size: ${wp('4%')};
  line-height: ${hp('3.42%')};
  margin-left: ${wp('7.32%')};
`;
export const StartButton = styled(RectButton)`
  width: 100%;
  height: ${hp('6.84%')};
  margin-top: ${hp('5%')};

  align-items: center;
  justify-content: center;

  border-radius: ${wp('7.32%')};
  background: #ff6680;
`;

export const StartButtonText = styled.Text`
  font-size: ${wp('3.66%')};
  color: #fff;
  font-family: 'Rubik-Regular';
`;
