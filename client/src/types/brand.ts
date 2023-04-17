export interface IBrand {
  id?: number;
  name: string;
}

export interface IBrandBar extends Partial<IBrand> {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export interface IBrandState {
  brands: IBrand[];
  isBrandLoading: boolean;
  isBrandError?: null | string;
}

export enum ActionBrands {
  FETCH_BRANDS = "FETCH_BRANDS",
  FETCH_BRANDS_SUCCESS = "FETCH_BRANDS_SUCCESS",
  FETCH_BRANDS_ERROR = "FETCH_BRANDS_ERROR",
  ADD_BRANDS = "ADD_BRANDS",
  ADD_BRANDS_SUCCESS = "ADD_BRANDS_SUCCESS",
  ADD_BRANDS_ERROR = "ADD_BRANDS_ERROR",
}

interface FetchBrandsAction {
  type: ActionBrands.FETCH_BRANDS;
}

interface FetchBrandsSuccessAction {
  type: ActionBrands.FETCH_BRANDS_SUCCESS;
  payload: IBrand[];
}

interface FetchBrandsErrorAction {
  type: ActionBrands.FETCH_BRANDS_ERROR;
  payload: string;
}

interface AddBrandsAction {
  type: ActionBrands.ADD_BRANDS;
}

interface AddBrandsSuccessAction {
  type: ActionBrands.ADD_BRANDS_SUCCESS;
  payload: IBrand[];
}

interface AddBrandsErrorAction {
  type: ActionBrands.ADD_BRANDS_ERROR;
  payload: string;
}

export type brandAction =
  | FetchBrandsAction
  | FetchBrandsSuccessAction
  | FetchBrandsErrorAction
  | AddBrandsAction
  | AddBrandsSuccessAction
  | AddBrandsErrorAction;
