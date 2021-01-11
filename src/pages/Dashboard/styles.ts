import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {Provider} from './index';

export const HomeContainer = styled.View`
  background: #f0edf5;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin-top: -20px;
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 20px 10px;
`;

export const CategoriesText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: 20px;
  color: #3d3d4c;
`;

export const CoursesQuantityText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #a0a0b2;
`;

export const ListContainer = styled.View`
  align-items: center;
`;

export const CategoriesList = styled(FlatList as new () => FlatList<Provider>)`
  height: 570px;
  /* margin-bottom: 10px; */
`;
