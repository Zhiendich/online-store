import { GlobalAppState } from "../reducers/reducer";

export const selectBrands = (state: GlobalAppState) => state.brand.brands;
