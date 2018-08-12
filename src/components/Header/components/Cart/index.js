import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Cart = ({ totalItemscart }) => (
  <Container to="/cart">
    <i className="fas fa-shopping-cart" /> Meu carrinho ({totalItemscart})
  </Container>
);

Cart.propTypes = {
  totalItemscart: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  totalItemscart: state.cart.data.length,
});

export default connect(mapStateToProps)(Cart);
