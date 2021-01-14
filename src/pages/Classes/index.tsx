import React from 'react';
import {SafeAreaView} from 'react-native';
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
} from './styles';

export interface Provider {
  id: string;
  image_url: string;
  title: string;
  quantity: string;
}

const Classes: React.FC = () => {
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
        <ListContainer />
      </Container>
    </SafeAreaView>
  );
};

export default Classes;
