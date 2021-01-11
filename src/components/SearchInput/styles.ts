import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 30px;
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
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
