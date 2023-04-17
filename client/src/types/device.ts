interface IDeviceInfo {
  id: number;
  device_id: number;
  title: string;
  description: string;
}
export interface IDevice {
  id?: number;
  name: string;
  price: number;
  rating?: number;
  img?: string;
  typeId: number;
  brandId: number;
  brandname?: string;
  typename?: string;
  info?: IDeviceInfo[];
}

export interface IInfo {
  title: string;
  description: string;
  number: number;
}

export interface IDeviceState {
  devices: IDevice[];
  count?: number;
  isDevicesLoading: boolean;
  isDevicesError?: null | string;
}

export enum ActionDevice {
  FETCH_DEVICE = "FETCH_DEVICE",
  FETCH_DEVICE_SUCCESS = "FETCH_DEVICE_SUCCESS",
  FETCH_DEVICE_ERROR = "FETCH_DEVICE_ERROR",
  ADD_DEVICE = "ADD_DEVICE",
  ADD_DEVICE_SUCCESS = "ADD_DEVICE_SUCCESS",
  ADD_DEVICE_ERROR = "ADD_DEVICE_ERROR",
}

interface FetchDeviceAction {
  type: ActionDevice.FETCH_DEVICE;
}

interface FetchDeviceSuccessAction {
  type: ActionDevice.FETCH_DEVICE_SUCCESS;
  payload: { devices: IDevice[]; count: number };
}

interface FetchDeviceErrorAction {
  type: ActionDevice.FETCH_DEVICE_ERROR;
  payload: string;
}

interface AddDeviceAction {
  type: ActionDevice.ADD_DEVICE;
}

interface AddDeviceSuccessAction {
  type: ActionDevice.ADD_DEVICE_SUCCESS;
  payload: IDevice[];
}

interface AddDeviceErrorAction {
  type: ActionDevice.ADD_DEVICE_ERROR;
  payload: string;
}

export type deviceAction =
  | FetchDeviceAction
  | FetchDeviceSuccessAction
  | FetchDeviceErrorAction
  | AddDeviceAction
  | AddDeviceSuccessAction
  | AddDeviceErrorAction;
