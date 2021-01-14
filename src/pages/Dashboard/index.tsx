import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import {useNavigation} from '@react-navigation/native';
import logoImage from '../../assets/images/logo.png';

import database from '../../database';

import {
  Container,
  HeaderContainer,
  Icon,
  Logo,
  CategoriesContainer,
  CategoriesText,
  CoursesQuantityText,
  ListContainer,
  CategoriesList,
  CourseContainer,
  ContainerImage,
  CourseImage,
  CourseTitle,
  CourseQuantity,
} from './styles';

export interface Provider {
  id: string;
  image_url: string;
  title: string;
  quantity: string;
}

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();

  const handleToClasses = useCallback(() => {
    navigation.navigate('Classes');
  }, [navigation]);

  return (
    <SafeAreaView>
      <HeaderContainer>
        <Header>
          <></>
          <Logo source={logoImage} />
          <Icon size={25} name="power" color="#ff6680" />
        </Header>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Busque um curso"
        />
      </HeaderContainer>
      <Container>
        <CategoriesContainer>
          <CategoriesText>Categorias</CategoriesText>
          <CoursesQuantityText>43 cursos</CoursesQuantityText>
        </CategoriesContainer>
        <ListContainer>
          <CategoriesList
            data={database}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item: provider}) => (
              <CourseContainer onPress={handleToClasses} activeOpacity={0.6}>
                <ContainerImage>
                  <CourseImage source={provider.image_url} />
                </ContainerImage>
                <CourseTitle>{provider.title}</CourseTitle>
                <CourseQuantity>{provider.quantity}</CourseQuantity>
              </CourseContainer>
            )}
          />
        </ListContainer>
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
