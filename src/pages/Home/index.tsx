import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  BackgroundImage,
  LogoImage,
  Title,
  Description,
  StartButton,
  StartButtonText,
} from './styles';
import eLogo from '../../assets/images/eLogo.png';
import logoImage from '../../assets/images/logoImage.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleToDashboard = useCallback(() => {
    navigation.navigate('MainBottom', {
      screen: 'Dashboard',
    });
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor="#6548a3" />
      <Container>
        <BackgroundImage source={eLogo} />
        <LogoImage source={logoImage} />
        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </Description>
        <StartButton onPress={handleToDashboard}>
          <StartButtonText>Começar com os estudos</StartButtonText>
        </StartButton>
      </Container>
    </>
  );
};

export default Home;
