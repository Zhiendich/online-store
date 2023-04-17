import React from "react";
import { useLocation } from "react-router-dom";
import Device from "./Device";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectDevices } from "../store/selectors/deviceSelector";

interface IDeviceList {
  page: number;
}

const DeviceList = ({ page }: IDeviceList) => {
  const cat = useLocation().search;
  const devices = useTypedSelector(selectDevices);
  const { fetchDevices } = useActions();
  React.useEffect(() => {
    fetchDevices(cat || "", page);
  }, [cat, page]);
  return (
    <div className="flex flex-wrap w-full mt-3">
      {devices && devices.length > 0 ? (
        devices.map((device) => (
          <Device
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
        ))
      ) : (
        <h1 className="text-[30px] font-bold text-center mt-6">
          Товаров по заданому фильтру нет
        </h1>
      )}
    </div>
  );
};

export default DeviceList;
