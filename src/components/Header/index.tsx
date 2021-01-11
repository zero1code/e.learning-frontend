import React from 'react';
import {Container, HeaderContainer, Logo, Icon} from './styles';
import logoImage from '../../assets/images/logo.png';

const Header: React.FC = ({children}) => {
  return (
    <Container>
      <HeaderContainer>
        <Logo source={logoImage} />
        <Icon size={25} name="power" color="#ff6680" />
      </HeaderContainer>
      {children}
    </Container>
  );
};

export default Header;
