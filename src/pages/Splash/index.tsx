import React from 'react';
import logoImage from '../../assets/images/logo.png';
import {Container, LogoImage} from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <LogoImage source={logoImage} />
    </Container>
  );
};

export default Splash;
