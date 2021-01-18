import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Provider} from './index';

interface SawVideoProps {
  sawVideo: boolean;
}

export const Container = styled.View`
  height: ${hp('100%')};
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

export const CardContainer = styled.View`
  margin-top: ${hp('2.28%')};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SawVideo = styled.View<SawVideoProps>`
  width: ${wp('19.54%')};
  height: ${hp('9.13%')};
  border-radius: ${wp('3.91%')};
  margin-left: ${wp('4.88%')};
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.sawVideo ? '#61c5bd' : '#ff6680')};
  elevation: 1;
`;

export const Title = styled.Text`
  width: ${wp('46.40%')};
  margin-left: ${wp('14.65%')};
  margin-top: ${hp('1.83%')};
  font-family: 'Rubik-Regular';
  color: #6c6c80;
  font-size: ${wp('3.91%')};
`;

export const VideoIcon = styled(FeatherIcon)``;

export const InfoContainer = styled.TouchableOpacity`
  width: ${wp('80.59%')};
  height: ${hp('13.70%')};
  background: #fff;
  border-radius: ${wp('3.91%')};
  margin-left: ${wp('-9.77%')};
`;
export const InfoBottomContainer = styled.View`
  height: ${hp('5.14%')};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const ClassNumber = styled.Text`
  margin-left: ${wp('14.65%')};
  color: #c4c4d1;
  font-family: 'Roboto-Regular';
  font-size: ${wp('2.93%')};
`;

export const TimeIcon = styled(FeatherIcon)`
  margin-left: ${wp('3.66%')};
`;

export const TimeText = styled.Text`
  margin-left: ${wp('1.22%')};
  color: #c4c4d1;
  font-family: 'Roboto-Regular';
  font-size: ${wp('2.93%')};
`;

export const Complete = styled.Text`
  background: #61c5bd;
  border-radius: ${wp('2.44%')};
  padding-left: ${wp('2.44%')};
  padding-right: ${wp('2.44%')};
  margin-left: ${wp('14.65%')};
  color: #fff;
  font-family: 'Roboto-Regular';
`;
