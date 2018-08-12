export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  BY_CATEGORY_GET_REQUEST: 'products/BY_CATEGORY_GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.BY_CATEGORY_GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: () => ({ type: Types.GET_REQUEST }),

  getProductsByCategoryRequest: id => ({ type: Types.BY_CATEGORY_GET_REQUEST, payload: { id } }),

  getProductsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
