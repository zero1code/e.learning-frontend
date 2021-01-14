import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import MyAlert from '../../components/MyAlert';
import {myUseContext} from '../../contexts/context';

import logoImage from '../../assets/images/logo.png';

import database from '../../database';

import {
  Container,
  HeaderContainer,
  Logo,
  Icon,
  CategoriesContainer,
  CategoriesText,
  ListContainer,
  CategoriesList,
  DeleteCourseButton,
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

const Saved: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const navigation = useNavigation();

  const {showOrHideAlert, showAlert} = myUseContext();

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
          <CategoriesText>Cursos salvos</CategoriesText>
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
                  <DeleteCourseButton
                    activeOpacity={0.3}
                    onPress={() => {
                      showOrHideAlert();
                      setSelectedCourse(provider.title);
                    }}>
                    <Icon name="trash" color="#c4c4d1" size={16} />
                  </DeleteCourseButton>
                </ContainerImage>
                <CourseTitle>{provider.title}</CourseTitle>
                <CourseQuantity>{provider.quantity}</CourseQuantity>
              </CourseContainer>
            )}
          />
        </ListContainer>
      </Container>
      {showAlert ? (
        <MyAlert courseName={selectedCourse} visible={showAlert} />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default Saved;
