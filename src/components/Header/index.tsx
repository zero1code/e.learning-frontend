import React from 'react';
import {HeaderContainer} from './styles';

const Header: React.FC = ({children}) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
