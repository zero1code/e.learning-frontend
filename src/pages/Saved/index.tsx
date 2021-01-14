import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import ItemList from '../../components/ItemList';
import MyAlert from '../../components/MyAlert';
import {myUseContext} from '../../contexts/context';

import database from '../../database';

import {
  Container,
  CategoriesContainer,
  CategoriesText,
  ListContainer,
  CategoriesList,
  DeleteCourseButton,
  Icon,
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
  // const [alertVisible, setAlertVisible] = useState(false);

  const {showOrHideAlert, showAlert} = myUseContext(Context);

  return (
    <SafeAreaView>
      <Header>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Busque uma aula"
        />
      </Header>
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
              <ItemList
                title={provider.title}
                image={provider.image_url}
                quantity={provider.quantity}>
                <DeleteCourseButton
                  activeOpacity={0.3}
                  onPress={() => {
                    showOrHideAlert();
                    setSelectedCourse(provider.title);
                  }}>
                  <Icon name="trash" color="#c4c4d1" size={16} />
                </DeleteCourseButton>
              </ItemList>
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
