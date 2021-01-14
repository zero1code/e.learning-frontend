import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const MyModal = styled.Modal``;

export const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${hp('40%')};
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  width: ${wp('85%')};
  margin-top: ${hp('1.14%')};
  margin-bottom: ${hp('1.14%')};
  margin-left: ${wp('2.44%')};
  margin-right: ${wp('2.44%')};
  background: #fff;
  border-radius: 10px;
  padding-top: ${hp('1.71%')};
  padding-bottom: ${hp('1.71%')};
  padding-left: ${wp('3.66%')};
  padding-right: ${wp('3.66%')};
  align-items: center;
`;

export const Icon = styled(FeatherIcon)``;

export const Title = styled.Text`
  width: ${wp('46.40%')};
  margin-top: ${hp('2.28%')};
  font-family: 'Rubik-Regular';
  color: #6c6c80;
  font-size: ${wp('4.40%')};
  line-height: ${wp('6.11%')};
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  width: ${wp('50%')};
  margin-top: ${hp('2.28%')};
  margin-bottom: ${hp('2.28%')};
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableHighlight`
  width: ${wp('14.65%')};
  height: ${hp('4.57%')};
  align-items: center;
  justify-content: center;
  border-radius: ${wp('7.33%')};
`;

export const CancelButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #ff6680;
  font-size: ${wp('3.66%')};
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: ${wp('31.75%')};
  height: ${hp('4.57%')};
  border-radius: ${wp('18.32%')};
  align-items: center;
  justify-content: center;
  background: #ff6680;
`;

export const ConfirmButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
  font-size: ${wp('3.66%')};
`;
