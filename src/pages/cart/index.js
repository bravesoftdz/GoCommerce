import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, Table, ProductItem, TableContainer, TotalContainer,
} from './styles';

class Cart extends Component {
  static propTypes = {
    setQuantity: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
          quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          subTotal: PropTypes.string,
        }),
      ),
    }).isRequired,
    totalCart: PropTypes.string.isRequired,
  };

  handleQuantityChange = (id, value) => {
    this.props.setQuantity(id, value < 1 ? 1 : value);
  };

  renderItems = () => this.props.cart.data.map(item => (
    <ProductItem key={item.id}>
      <td style={{ width: '5%' }}>
        <img src={item.image} alt={item.name} />
      </td>
      <td style={{ width: '60%' }}>
        <span className="title">{item.name}</span> <br />
        <span className="brand">{item.brand}</span>
      </td>
      <td style={{ width: '10%' }}>
        <span className="price">
            R$
          {item.price}
        </span>
      </td>
      <td style={{ width: '10%' }}>
        <input
          type="number"
          name="quatity"
          min={1}
          value={item.quantity}
          onChange={(e) => {
            this.handleQuantityChange(item.id, e.target.value);
          }}
        />
      </td>
      <td style={{ width: '10%' }}>
        <span className="price">
            R$
          {item.subTotal}
        </span>
      </td>
      <td style={{ width: '5%' }}>
        <button type="button" onClick={() => this.props.removeProduct(item)}>
          <i className="fas fa-times" />
        </button>
      </td>
    </ProductItem>
  ));

  render() {
    const { cart, totalCart } = this.props;
    return (
      <Container>
        {!cart.data.length ? (
          <div>Seu carrinho está vazio, volte ao catalogo e escolha seu produto favorito!</div>
        ) : (
          <Fragment>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <th />
                    <th>PRODUTO</th>
                    <th>VALOR</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th />
                  </tr>
                </thead>
                <tbody>{this.renderItems()}</tbody>
              </Table>
            </TableContainer>
            <TotalContainer>
              <div>
                <span className="text">TOTAL</span>{' '}
                <span className="price">
                  R$
                  {totalCart}
                </span>
              </div>
            </TotalContainer>
          </Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: {
    ...state.cart,
    data: state.cart.data.map(item => ({
      ...item,
      subTotal: (item.price * item.quantity).toFixed(2),
    })),
  },
  totalCart: state.cart.data
    .reduce((prevVal, item) => prevVal + item.price * item.quantity, 0)
    .toFixed(2),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
