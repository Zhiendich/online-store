import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { selectUser } from "../store/selectors/userSelector";
import { UserActionTypes } from "../types/user";

const Header = () => {
  const user = useTypedSelector(selectUser);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch({ type: UserActionTypes.USER_LOG_OUT });
    window.localStorage.removeItem("token");
  };
  return (
    <div className="bg-[blue] w-full py-2">
      <div className="container-handler text-[white] flex justify-between items-center text-[18px]">
        <Link to="/" className="text-[25px] font-bold">
          КупиДевайс
        </Link>
        <div className="flex">
          {user?.role === "ADMIN" && <Link to={"/admin"}>Админка</Link>}
          {user && (
            <div>
              <Link className="ml-3 cursor-pointer" to="/basket">
                Корзина
              </Link>
              <span className="ml-3 cursor-pointer" onClick={logout}>
                Выйти
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
