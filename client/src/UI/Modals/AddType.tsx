import React from "react";
import { useActions } from "../../hooks/useActions";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

interface IModel {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddType = ({ visible, setVisible }: IModel) => {
  const [name, setName] = React.useState("");
  const { addType } = useActions();
  const addTypeHandler = () => {
    if (name !== "") {
      addType(name);
      setVisible(false);
    }
  };
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div
      className={
        visible
          ? "w-full h-screen flex justify-center items-center bg-white absolute top-0 left-0"
          : "hidden"
      }
    >
      <div className="bg-[blue] p-5 flex flex-col items-center">
        <h1 className="text-[25px] font-bold mb-4 text-white">
          Добавить тип девайса
        </h1>
        <TextField fieldType="text" value={name} setValue={setName} />
        <div className="flex mt-4 justify-between w-[190px]">
          <Button
            styles="bg-white text-black"
            text="Добавить"
            onClick={addTypeHandler}
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

export default AddType;
