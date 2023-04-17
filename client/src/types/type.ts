export interface IType {
  id?: number;
  name: string;
}

export interface ITypeState {
  types: IType[];
  isTypesLoading: boolean;
  isTypesError?: null | string;
}

export enum ActionTypes {
  FETCH_TYPES = "FETCH_TYPES",
  FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS",
  FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
  ADD_TYPES = "ADD_TYPES",
  ADD_TYPES_SUCCESS = "ADD_TYPES_SUCCESS",
  ADD_TYPES_ERROR = "ADD_TYPES_ERROR",
}

interface FetchTypesAction {
  type: ActionTypes.FETCH_TYPES;
}

interface FetchTypesSuccessAction {
  type: ActionTypes.FETCH_TYPES_SUCCESS;
  payload: IType[];
}

interface FetchTypesErrorAction {
  type: ActionTypes.FETCH_TYPES_ERROR;
  payload: string;
}

interface AddTypesAction {
  type: ActionTypes.ADD_TYPES;
}

interface AddTypesSuccessAction {
  type: ActionTypes.ADD_TYPES_SUCCESS;
  payload: IType[];
}

interface AddTypesErrorAction {
  type: ActionTypes.ADD_TYPES_ERROR;
  payload: string;
}

export type typeAction =
  | FetchTypesAction
  | FetchTypesSuccessAction
  | FetchTypesErrorAction
  | AddTypesAction
  | AddTypesSuccessAction
  | AddTypesErrorAction;
