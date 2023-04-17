import React from "react";
import BrandBar from "./BrandBar";
import DeviceList from "./DeviceList";
import Typebar from "./Typebar";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectCount } from "../store/selectors/deviceSelector";

interface IStore {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const Store = ({ path, setPath }: IStore) => {
  const count = useTypedSelector(selectCount);
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [];
  if (count) {
    const pageCount = Math.ceil(count / Number(process.env.REACT_APP_LIMIT));
    for (let i = 0; i < pageCount; i++) {
      pages.push(i + 1);
    }
  }

  return (
    <div className="flex container-handler items-start ">
      <Typebar path={path} setPath={setPath} />
      <div className="ml-5 flex flex-col mt-2 w-full">
        <BrandBar path={path} setPath={setPath} />
        <DeviceList page={currentPage} />
        <div className="my-3 flex">
          {pages.map((page) => (
            <div
              key={page}
              onClick={() => setCurrentPage(page)}
              className="border-[2px] border-[#0000FF] p-2 cursor-pointer mx-1 text-[22px]"
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
