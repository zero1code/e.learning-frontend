import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  margin-top: ${hp('1.14%')};
  margin-bottom: ${hp('1.14%')};
  margin-left: ${wp('2.44%')};
  margin-right: ${wp('2.44%')};

  width: ${wp('38.10%')};
  height: ${hp('19.63%')};
  border-radius: ${wp('3.91%')};
  background: #fff;
`;

export const CourseImage = styled.Image`
  margin-top: ${hp('1.71%')};
  margin-left: ${wp('3.66%')};
`;

export const CourseTitle = styled.Text`
  margin-top: ${hp('1.71%')};
  margin-left: ${wp('3.66%')};
  font-size: ${wp('3.66%')};
  font-family: 'Rubik-Regular';
`;

export const CourseQuantity = styled.Text`
  margin-top: ${hp('0.57%')};
  margin-left: ${wp('3.66%')};
  font-size: ${wp('2.93%')};
  font-family: 'Roboto-Regular';

  color: #c4c4d1;
`;
