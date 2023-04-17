import React, { useState } from "react";
import Button from "../UI/Button/Button";
import AddBrand from "../UI/Modals/AddBrand";
import AddDevice from "../UI/Modals/AddDevice";
import AddType from "../UI/Modals/AddType";

const Admin = () => {
  const [typeFlag, setTypeFlag] = useState(false);
  const [brandFlag, setBrandFlag] = useState(false);
  const [deviceFlag, setDeviceFlag] = useState(false);
  const showTypeModel = () => {
    setTypeFlag(true);
  };
  const showBrandModel = () => {
    setBrandFlag(true);
  };
  const showDeviceModel = () => {
    setDeviceFlag(true);
  };
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="flex flex-col items-center  justify-between h-[180px]">
        <Button
          styles="w-[210px]"
          text="Добавить новый тип"
          onClick={showTypeModel}
        />
        <Button
          styles="w-[210px]"
          text="Добавить новый бренд"
          onClick={showBrandModel}
        />
        <Button
          styles="w-[210px]"
          text="Добавить новый девайс"
          onClick={showDeviceModel}
        />
      </div>
      <AddType visible={typeFlag} setVisible={setTypeFlag} />
      <AddBrand visible={brandFlag} setVisible={setBrandFlag} />
      <AddDevice visible={deviceFlag} setVisible={setDeviceFlag} />
    </div>
  );
};

export default Admin;
