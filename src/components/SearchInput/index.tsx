import React, {useState, useCallback} from 'react';
import {TextInputProps} from 'react-native';
import {Container, TextInput, Icon} from './styles';

interface InputPros extends TextInputProps {
  course?: string;
}

const SearchInput: React.FC<InputPros> = ({value = '', ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused}>
      <Icon
        name="search"
        size={20}
        color={isFocused || isFilled ? '#ff6680' : '#b7b7bc'}
      />

      <TextInput
        placeholderTextColor="#b7b7cc"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
