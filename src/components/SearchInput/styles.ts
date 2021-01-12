import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${hp('6.85%')};
  padding-left: ${wp('3.91%')};
  padding-right: ${wp('3.91%')};
  background: #fff;
  border-radius: ${wp('7.33%')};
  /* border-width: 2px;
  border-color: #fff; */
  flex-direction: row;
  align-items: center;
  elevation: 1;

  /* ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff6080;
    `} */
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6c6c80;
  font-size: ${wp('3.91%')};
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: ${wp('3.91%')};
`;
