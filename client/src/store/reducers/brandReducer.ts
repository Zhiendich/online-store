import { ActionBrands, brandAction, IBrandState } from "../../types/brand";

const initialState: IBrandState = {
  brands: [],
  isBrandError: null,
  isBrandLoading: false,
};

export const brandReducer = (
  state = initialState,
  action: brandAction
): IBrandState => {
  switch (action.type) {
    case ActionBrands.FETCH_BRANDS:
      return {
        brands: state.brands,
        isBrandLoading: true,
        isBrandError: state.isBrandError,
      };
    case ActionBrands.FETCH_BRANDS_SUCCESS:
      return {
        brands: action.payload,
        isBrandLoading: false,
        isBrandError: state.isBrandError,
      };
    case ActionBrands.FETCH_BRANDS_ERROR:
      return {
        brands: state.brands,
        isBrandLoading: false,
        isBrandError: action.payload,
      };
    case ActionBrands.ADD_BRANDS:
      return {
        brands: state.brands,
        isBrandLoading: true,
        isBrandError: state.isBrandError,
      };
    case ActionBrands.ADD_BRANDS_SUCCESS:
      return {
        brands: [...action.payload, ...state.brands],
        isBrandLoading: false,
        isBrandError: state.isBrandError,
      };
    case ActionBrands.ADD_BRANDS_ERROR:
      return {
        brands: state.brands,
        isBrandLoading: false,
        isBrandError: action.payload,
      };
    default:
      return state;
  }
};
