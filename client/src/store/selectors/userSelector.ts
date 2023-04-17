import { GlobalAppState } from "../reducers/reducer";

export const selectUser = (state: GlobalAppState) => state.user.data?.user;
