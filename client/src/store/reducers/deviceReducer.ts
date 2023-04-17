import { ActionDevice, deviceAction, IDeviceState } from "../../types/device";

const initialState: IDeviceState = {
  devices: [],
  isDevicesError: null,
  isDevicesLoading: false,
};

export const deviceReducer = (
  state = initialState,
  action: deviceAction
): IDeviceState => {
  switch (action.type) {
    case ActionDevice.FETCH_DEVICE:
      return {
        devices: state.devices,
        isDevicesLoading: true,
        isDevicesError: state.isDevicesError,
      };
    case ActionDevice.FETCH_DEVICE_SUCCESS:
      return {
        devices: action.payload.devices,
        count: action.payload.count,
        isDevicesLoading: false,
        isDevicesError: state.isDevicesError,
      };
    case ActionDevice.FETCH_DEVICE_ERROR:
      return {
        devices: state.devices,
        isDevicesLoading: false,
        isDevicesError: action.payload,
      };
    case ActionDevice.ADD_DEVICE:
      return {
        devices: state.devices,
        isDevicesLoading: true,
        isDevicesError: state.isDevicesError,
      };
    case ActionDevice.ADD_DEVICE_SUCCESS:
      return {
        devices: [...action.payload, ...state.devices],
        isDevicesLoading: false,
        isDevicesError: state.isDevicesError,
      };
    case ActionDevice.ADD_DEVICE_ERROR:
      return {
        devices: state.devices,
        isDevicesLoading: false,
        isDevicesError: action.payload,
      };
    default:
      return state;
  }
};
