import React, { useState, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { uploadImage } from "../../services/upload";
import { selectBrands } from "../../store/selectors/brandSelector";
import { selectTypes } from "../../store/selectors/typeSelector";
import { IDevice, IInfo } from "../../types/device";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

interface IModel {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddDevice = ({ visible, setVisible }: IModel) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const [rating, setRating] = useState("");
  const brands = useTypedSelector(selectBrands);
  const types = useTypedSelector(selectTypes);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [info, setInfo] = useState<IInfo[]>([]);
  const file = React.useRef<File | null>(null);
  const { fetchTypes, fetchBrands, addDevice } = useActions();
  const addDeviceHandler = () => {
    if (name !== "" && file.current) {
      const newDevice = {
        name,
        brandId: +brand,
        price: +price,
        // rating: +rating,
        typeId: +type,
        img: file.current.name,
      } as IDevice;
      const formData = new FormData();
      formData.append("file", file.current);
      formData.append("name", file.current.name);
      uploadImage(formData);
      addDevice(newDevice, info);
      setName("");
      setPrice("");
      // setRating("");
      file.current = null;
      setInfo([]);
    } else {
      alert("Не удалось добавить девайс заполните все поля!");
    }
  };
  console.log(type);
  const closeHandler = () => {
    setVisible(false);
  };
  const uploadFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      file.current = e.target.files[0];
    }
  };
  const addInfoHandler = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const selectTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  const selectBrandHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };
  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  const removeInfoHandler = (id: number) => {
    setInfo(info.filter((i) => i.number !== id));
  };
  useEffect(() => {
    fetchTypes();
    fetchBrands();
  }, []);
  return (
    <div
      className={
        visible
          ? "w-full h-screen flex justify-center items-center bg-white absolute top-0 left-0"
          : "hidden"
      }
    >
      <div className="bg-[blue] p-5 flex flex-col items-center w-full max-w-[571px]">
        <h1 className="text-[25px] font-bold mb-4 text-white">
          Добавить девайс
        </h1>
        <TextField
          fieldType="text"
          value={name}
          setValue={setName}
          placeholder="Название"
        />
        <TextField
          className="mt-3"
          fieldType="number"
          value={price}
          setValue={setPrice}
          placeholder="Цена"
        />
        {/* <TextField
          className="mt-3"
          fieldType="number"
          value={rating}
          setValue={setRating}
          placeholder="Рейтинг"
        /> */}
        <label htmlFor="file">
          <div className=" cursor-pointer my-3 text-[18px] font-bold text-white">
            Добавить фото девайса
          </div>
          <input
            className="hidden"
            type="file"
            id="file"
            onChange={uploadFileHandler}
          />
        </label>
        <select value={brand} onChange={selectBrandHandler}>
          <option>Выберите бренд</option>
          {brands.length > 0 &&
            brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
        </select>
        <select value={type} onChange={selectTypeHandler} className="mt-3">
          <option>Выберите тип</option>
          {types.length > 0 &&
            types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
        </select>
        <Button
          styles="bg-white text-black mt-3"
          text="Добавить свойства"
          onClick={addInfoHandler}
        />
        {info.map((i) => (
          <div key={i.number} className="flex my-3">
            <input
              value={i.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeInfo("title", e.target.value, i.number)
              }
              placeholder="Введите название свойства"
            />
            <input
              className="ml-2"
              value={i.description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeInfo("description", e.target.value, i.number)
              }
              placeholder="Введите описание свойства"
            />
            <Button
              styles="ml-2"
              onClick={() => removeInfoHandler(i.number)}
              text="Удалить свойство"
            />
          </div>
        ))}
        <div className="flex mt-4 justify-between w-[190px]">
          <Button
            styles="bg-white text-black"
            text="Добавить"
            onClick={addDeviceHandler}
          />
          <Button
            styles="bg-white text-black"
            text="Закрыть"
            onClick={closeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
