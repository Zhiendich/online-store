import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Admin from "./pages/Admin";
import DeviceList from "./components/DeviceList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { selectUser } from "./store/selectors/userSelector";
import { IUser } from "./types/user";
import Store from "./components/Store";
import DevicePage from "./pages/DevicePage";
import Basket from "./pages/Basket";

function App() {
  const { isUserAuth, fetchBasket } = useActions();
  const [user, setUser] = React.useState<IUser | null | undefined>(null);
  const currentUser = useTypedSelector(selectUser);
  const [path, setPath] = React.useState("");
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      isUserAuth();
    }
  }, [window.localStorage.getItem("token")]);
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);
  useEffect(() => {
    if (user?.id) {
      fetchBasket(user.id);
    }
  }, [user]);

  return (
    <Routes>
      <Route
        path="/*"
        element={window.localStorage.getItem("token") ? <Home /> : <Login />}
      >
        <Route
          path="admin"
          element={
            user?.role !== "ADMIN" ? <Navigate to="/" replace /> : <Admin />
          }
        />
        <Route path="device/:id" element={<DevicePage />} />
        <Route path="basket" element={<Basket />} />
        <Route path="*" element={<Store path={path} setPath={setPath} />} />
      </Route>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/registration"
        element={user ? <Navigate to="/" replace /> : <Registration />}
      />
    </Routes>
  );
}

export default App;
