import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

import logoImage from '../../assets/images/logo.png';

import database from '../../database';

import {
  Container,
  HeaderContainer,
  Logo,
  Icon,
  CategoriesContainer,
  CategoriesText,
  CoursesQuantityText,
  ListContainer,
  CategoriesList,
  CardContainer,
  SawVideo,
  VideoIcon,
  InfoContainer,
  Title,
  InfoBottomContainer,
  ClassNumber,
  TimeIcon,
  TimeText,
  Complete,
} from './styles';

export interface Provider {
  id: string;
  image_url: string;
  title: string;
  quantity: string;
}

const Classes: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToVideoClass = useCallback(() => {
    navigation.navigate('VideoClass');
  }, [navigation]);
  return (
    <SafeAreaView>
      <HeaderContainer>
        <Header>
          <Icon size={25} name="arrow-left" color="#ff6680" />
          <Logo source={logoImage} />
          <Icon size={25} name="heart" color="#ff6680" />
        </Header>
      </HeaderContainer>
      <Container>
        <CategoriesContainer>
          <CategoriesText>Matemática</CategoriesText>
          <CoursesQuantityText>43 aulas</CoursesQuantityText>
        </CategoriesContainer>
        <CardContainer>
          <SawVideo sawVideo={true}>
            <VideoIcon name="play-circle" size={50} color="#FFF" />
          </SawVideo>
          <InfoContainer
            activeOpacity={0.7}
            onPress={handleNavigateToVideoClass}>
            <Title>Introdução a teoria da matemática</Title>
            <InfoBottomContainer>
              <ClassNumber>Aula 01</ClassNumber>
              <TimeIcon name="clock" size={15} color="#c4c4d1" />
              <TimeText>5 min</TimeText>
              <Complete>Completo!</Complete>
            </InfoBottomContainer>
          </InfoContainer>
        </CardContainer>

        <CardContainer>
          <SawVideo sawVideo={false}>
            <VideoIcon name="play-circle" size={50} color="#FFF" />
          </SawVideo>
          <InfoContainer
            activeOpacity={0.7}
            onPress={handleNavigateToVideoClass}>
            <Title>Introdução a teoria da matemática</Title>
            <InfoBottomContainer>
              <ClassNumber>Aula 02</ClassNumber>
              <TimeIcon name="clock" size={15} color="#c4c4d1" />
              <TimeText>10 min</TimeText>
              {/* <Complete>Completo!</Complete> */}
            </InfoBottomContainer>
          </InfoContainer>
        </CardContainer>
        <ListContainer />
      </Container>
    </SafeAreaView>
  );
};

export default Classes;
