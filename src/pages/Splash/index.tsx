import React, {useEffect} from 'react';
import logoImage from '../../assets/images/logo.png';
import {Container, LogoImage} from './styles';
import {useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(function () {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <Container>
      <LogoImage source={logoImage} />
    </Container>
  );
};

export default Splash;
