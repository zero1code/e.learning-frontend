import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  height: ${hp('90%')};
  background: #f0edf5;
  border-top-left-radius: ${hp('2.73%')};
  border-top-right-radius: ${hp('2.73%')};
  margin-top: ${hp('-2.28%')};
`;

export const HeaderContainer = styled.View`
  height: ${hp('10.00%')};
  background: #6548a3;
  display: flex;
  padding-left: ${wp('4.88%')};
  padding-right: ${wp('4.88%')};
`;

export const Logo = styled.Image`
  width: ${wp('29.30%')};
  height: ${hp('2.73%')};
`;

export const Icon = styled(FeatherIcon)``;

export const VideoContainer = styled.View`
  height: ${hp('23.97%')};
  background: #3d3d4c;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${hp('2.73%')};
  border-top-right-radius: ${hp('2.73%')};
`;

export const Title = styled.Text`
  width: ${wp('68.38%')};
  font-family: 'Rubik-Regular';
  font-size: ${wp('7.33%')};

  margin-top: ${hp('2.85%')};
  margin-left: ${wp('6.11%')};
  color: #3d3d4c;
`;

export const ClassInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: ${hp('1.71%')};
  margin-left: ${wp('6.11%')};
`;

export const ClassNumber = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a0a0b2;
  margin-right: ${wp('3.66%')};
`;

export const TimeText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #a0a0b2;
  margin-left: ${wp('1.22%')};
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  color: #3d3d4c;
  margin-top: ${hp('1.71%')};
  margin-left: ${wp('6.11%')};
  margin-right: ${wp('7.33%')};
  line-height: ${hp('2.85%')};
  font-size: ${wp('3.91%')};
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const PreviousClassButton = styled.TouchableHighlight`
  width: ${wp('36.63%')};
  height: ${hp('5.71%')};
  border-radius: ${wp('19.54%')};
  margin-right: ${wp('3.66%')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PreviousClassContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PreviousButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${wp('3.66%')};
  margin-left: ${wp('2.44%')};
  color: #ff6680;
`;

export const NextClassButton = styled.TouchableOpacity`
  width: ${wp('36.63%')};
  height: ${hp('5.71%')};
  background: #ff6680;
  border-radius: ${wp('19.54%')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NextButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${wp('3.66%')};
  margin-right: ${wp('2.44%')};
  color: #fff;
`;
