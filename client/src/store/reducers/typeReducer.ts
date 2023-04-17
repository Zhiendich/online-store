import { ActionTypes, ITypeState, typeAction } from "../../types/type";

const initialState: ITypeState = {
  types: [],
  isTypesError: null,
  isTypesLoading: false,
};

export const typeReducer = (
  state = initialState,
  action: typeAction
): ITypeState => {
  switch (action.type) {
    case ActionTypes.FETCH_TYPES:
      return {
        types: state.types,
        isTypesLoading: true,
        isTypesError: state.isTypesError,
      };
    case ActionTypes.FETCH_TYPES_SUCCESS:
      return {
        types: action.payload,
        isTypesLoading: false,
        isTypesError: state.isTypesError,
      };
    case ActionTypes.FETCH_TYPES_ERROR:
      return {
        types: state.types,
        isTypesLoading: false,
        isTypesError: action.payload,
      };
    case ActionTypes.ADD_TYPES:
      return {
        types: state.types,
        isTypesLoading: true,
        isTypesError: state.isTypesError,
      };
    case ActionTypes.ADD_TYPES_SUCCESS:
      return {
        types: [...action.payload, ...state.types],
        isTypesLoading: false,
        isTypesError: state.isTypesError,
      };
    case ActionTypes.ADD_TYPES_ERROR:
      return {
        types: state.types,
        isTypesLoading: false,
        isTypesError: action.payload,
      };
    default:
      return state;
  }
};
