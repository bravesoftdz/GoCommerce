import React from 'react';
// import PropTypes from 'prop-types'
import Menu from './components/Menu';
import { Container, ContainerSection } from './styles';
import Logo from './components/Logo';
import Cart from './components/Cart';

const Header = () => (
  <Container>
    <ContainerSection>
      <Logo />
      <Cart />
    </ContainerSection>
    <Menu />
  </Container>
);

// Header.propTypes = {

// }

export default Header;
