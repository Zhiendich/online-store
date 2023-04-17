import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  selectBasket,
  selectBasketDevices,
} from "../store/selectors/basketSelector";
import { useActions } from "../hooks/useActions";
import Device from "../components/Device";
import BasketDevice from "../components/BasketDevice";

const Basket = () => {
  const basker = useTypedSelector(selectBasket);
  const devices = useTypedSelector(selectBasketDevices);
  const { fetchBasketDevices } = useActions();
  console.log(devices);
  React.useEffect(() => {
    if (basker?.id) {
      fetchBasketDevices(basker?.id);
    }
  }, [basker]);
  if (!devices || devices.length === 0) {
    return (
      <h1 className="text-[35px] mt-6 font-bold text-center">Корзина пуста</h1>
    );
  }
  return (
    <div className="flex  container-handler">
      {devices.map((device) => (
        <BasketDevice
          name={device.name}
          img={device.img}
          brandId={device.brandId}
          price={device.price}
          rating={device.rating}
          typeId={device.typeId}
          brandname={device.brandname}
          typename={device.typename}
          id={device.id}
          key={device.id}
        />
      ))}
    </div>
  );
};

export default Basket;
