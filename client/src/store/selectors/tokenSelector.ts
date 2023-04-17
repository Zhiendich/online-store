import { GlobalAppState } from "../reducers/reducer";

export const selectToken = (state: GlobalAppState) => state.user.data?.token;
