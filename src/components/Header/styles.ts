import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: 190px;
  background: #6548a3;
  display: flex;
  padding: 0 20px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 24px;
`;

export const Icon = styled(FeatherIcon)``;
