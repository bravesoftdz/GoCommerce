import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';
import { Creators as ErrorActions } from '../ducks/error';

export function* getProducts() {
  try {
    const response = yield call(api.get, '/products');

    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter os produtos'));
  }
}

export function* getProductsByCategory(action) {
  try {
    const { id } = action.payload;

    const response = yield call(api.get, `/category_products/${id}`);

    yield put(ProductsActions.getProductsSuccess(response.data.products));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter os produtos'));
  }
}
