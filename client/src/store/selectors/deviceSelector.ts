import { GlobalAppState } from "../reducers/reducer";

export const selectDevices = (state: GlobalAppState) => state.device.devices;
export const selectCount = (state: GlobalAppState) => state.device.count;
