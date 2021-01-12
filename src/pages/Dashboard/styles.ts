import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Provider} from './index';

export const HomeContainer = styled.View`
  background: #f0edf5;
  border-top-left-radius: ${hp('2.73%')};
  border-top-right-radius: ${hp('2.73%')};
  margin-top: ${hp('-2.28%')};
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${hp('1.14%')};
  margin-top: ${hp('3.42%')};
  margin-left: ${wp('4.88%')};
  margin-right: ${wp('4.88%')};
`;

export const CategoriesText = styled.Text`
  font-family: 'Rubik-Regular';
  font-size: ${wp('4.88%')};
  color: #3d3d4c;
`;

export const CoursesQuantityText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${wp('3.66%')};
  color: #a0a0b2;
`;

export const ListContainer = styled.View`
  align-items: center;
`;

export const CategoriesList = styled(FlatList as new () => FlatList<Provider>)`
  height: ${hp('65.06%')};
  /* padding-bottom: 100px; */
`;
