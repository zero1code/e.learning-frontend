import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import ItemList from '../../components/ItemList';

import database from '../../database';

import {
  HomeContainer,
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

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SafeAreaView>
      <Header>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Busque um curso"
        />
      </Header>
      <HomeContainer>
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
              <ItemList
                title={provider.title}
                image={provider.image_url}
                quantity={provider.quantity}
              />
            )}
          />
        </ListContainer>
      </HomeContainer>
    </SafeAreaView>
  );
};

export default Dashboard;
