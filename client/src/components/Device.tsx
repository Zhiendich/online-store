import React from "react";
import { Link } from "react-router-dom";
import { IDevice } from "../types/device";

const Device = ({
  name,
  price,
  rating,
  img,
  id,
  brandname,
  typename,
}: IDevice) => {
  return (
    <Link
      to={`device/${id}`}
      className="flex flex-col items-center basis-1/5 mr-2 mt-4"
    >
      <img
        className="max-w-[180px] w-full h-[250px]"
        src={`${process.env.REACT_APP_API_URL_IMG}/${img}`}
        alt=""
      />
      <div className="flex">
        <span className="text-[gray]">{typename}</span>
        <span className="text-[gray] ml-1">{brandname}</span>
      </div>
      <h1 className="text-[20px] font-bold">{name}</h1>
    </Link>
  );
};

export default Device;
