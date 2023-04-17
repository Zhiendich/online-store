import { GlobalAppState } from "../reducers/reducer";

export const selectTypes = (state: GlobalAppState) => state.type.types;
