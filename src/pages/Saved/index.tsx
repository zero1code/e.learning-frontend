import React, {useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';

const Saved: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SafeAreaView>
      <Header>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Busque uma aula"
        />
      </Header>

      <Text>Saved</Text>
    </SafeAreaView>
  );
};

export default Saved;
