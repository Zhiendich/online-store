import { bindActionCreators } from "redux";
import ActionsCreator from "../store/actions-creator/actions";
import { useAppDispatch } from "./useTypedSelector";
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionsCreator, dispatch);
};
