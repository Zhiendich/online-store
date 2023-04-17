import React from "react";
import { useParams } from "react-router-dom";
import { fetchDevice } from "../services/device";
import { IDevice } from "../types/device";
import Button from "../UI/Button/Button";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectBasket } from "../store/selectors/basketSelector";
import Rating from "../components/Rating";
import { selectUser } from "../store/selectors/userSelector";

const DevicePage = () => {
  const [device, setDevice] = React.useState<IDevice>();
  const basket = useTypedSelector(selectBasket);
  const user = useTypedSelector(selectUser);
  const { id } = useParams();
  const { addDeviceToBasket } = useActions();
  React.useEffect(() => {
    if (id) {
      fetchDevice(id).then((data) => setDevice(data));
    }
  }, [id]);
  const addToBasketHandler = () => {
    if (device?.id && basket?.id) {
      addDeviceToBasket(device?.id, basket?.id);
    }
  };
  if (!device) {
    return (
      <h1 className="text-center font-bold text-[30px] mt-6">
        Не удалось получить информацию про товар
      </h1>
    );
  }
  return (
    <div className="container-handler mt-5 flex flex-col">
      <div className="flex">
        <img
          className="max-w-[302px] w-full h-[333px]"
          src={`${process.env.REACT_APP_API_URL_IMG}/${device?.img}`}
          alt=""
        />
        <h1 className="text-[32px] ml-2">{device.name}</h1>
        <div className="w-[399px] h-[319px] bg-[#C4C4C4] ml-[65px] flex flex-col justify-between items-center text-[32px] ">
          <h2 className="mt-[23px]">От {device.price} гривен</h2>
          <h2 className="mt-[20px] text-center">
            Средний рейтинг: {device.rating}
          </h2>
          <Rating
            overallRating={Math.ceil(device.rating || 0)}
            userId={user?.id}
            deviceId={id}
          />
          <Button
            styles="mb-[38px]"
            text="Добавить в корзину"
            onClick={addToBasketHandler}
          />
        </div>
      </div>
      <div>
        <h1 className="text-[32px]">Характеристики :</h1>
        <div className="mt-3 text-[20px]">
          {device.info?.map((i) => (
            <div key={i.id} className="flex ">
              <p>{i.title}:</p>
              <p className="ml-3">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevicePage;
