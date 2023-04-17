import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { GlobalAppState } from "../store/reducers/reducer";

export const useTypedSelector: TypedUseSelectorHook<GlobalAppState> =
  useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
