import React from "react";
import { Link } from "react-router-dom";
import { IDevice } from "../types/device";
import Button from "../UI/Button/Button";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectBasket } from "../store/selectors/basketSelector";

const BasketDevice = ({
  name,
  price,
  rating,
  img,
  id,
  brandname,
  typename,
}: IDevice) => {
  const { deleteBasketDevice } = useActions();
  const basket = useTypedSelector(selectBasket);
  const deleteDeviceHandler = () => {
    if (id && basket?.id) {
      deleteBasketDevice(id, basket.id);
    }
  };
  return (
    <div className=" flex flex-col items-center basis-1/5  border-[2px] border-[black] max-w-[400px] my-6 p-3 ml-5">
      <img
        className="max-w-[180px] w-full h-[180px]"
        src={`${process.env.REACT_APP_API_URL_IMG}/${img}`}
        alt=""
      />
      <div className="flex">
        <span className="text-[gray]">{typename}</span>
        <span className="text-[gray] ml-1 ">{brandname}</span>
      </div>
      <h1 className="text-[20px] font-bold mb-6">{name}</h1>
      <Button
        styles="w-full"
        text="Удалить из корзины"
        onClick={deleteDeviceHandler}
      />
    </div>
  );
};

export default BasketDevice;
