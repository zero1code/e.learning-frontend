import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  height: ${hp('21.68%')};
  background: #6548a3;
  display: flex;
  padding-left: ${wp('4.88%')};
  padding-right: ${wp('4.88%')};
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${hp('2.28%')};
  margin-bottom: ${hp('3.42%')};
`;

export const Logo = styled.Image`
  width: ${wp('29.30%')};
  height: ${hp('2.73%')};
`;

export const Icon = styled(FeatherIcon)``;
