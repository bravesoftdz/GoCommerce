import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProductsTypes } from '../ducks/products';
import { getProducts, getProductsByCategory } from './products';

import { Types as CategoriesTypes } from '../ducks/categories';
import { getCategories } from './categories';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
    takeLatest(ProductsTypes.BY_CATEGORY_GET_REQUEST, getProductsByCategory),

    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
  ]);
}
