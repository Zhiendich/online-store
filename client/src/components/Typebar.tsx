import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectTypes } from "../store/selectors/typeSelector";

interface ITypeBar {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const TypeBar = ({ path, setPath }: ITypeBar) => {
  const { fetchTypes } = useActions();
  const navigate = useNavigate();
  const cat = useLocation().search;
  const types = useTypedSelector(selectTypes);
  const changePathHandler = (id: number | undefined) => {
    if (id && !path) {
      navigate(`/?typeId=${id}`);
      setPath(`/?typeId=${id}`);
    } else if (
      path &&
      path.startsWith("/?typeId") &&
      path.endsWith(`&brandId=${path[path.length - 1]}`)
    ) {
      const symbol = path.indexOf("&");
      const result = path.slice(symbol);
      navigate(`/?typeId=${id}${result}`);
      setPath(`/?typeId=${id}${result}`);
    } else if (path.includes("typeId") && path.startsWith("/?brandId")) {
      console.log("ОТРАБОТАЛО");
      const symbol = path.indexOf("&");
      const result = path.slice(0, symbol);
      navigate(`${result}&typeId=${id}`);
      setPath(`${result}&typeId=${id}`);
    } else if (path.includes("typeId")) {
      navigate(`/?typeId=${id}`);
      setPath(`/?typeId=${id}`);
    } else {
      navigate(`${path}&typeId=${id}`);
      setPath(`${path}&typeId=${id}`);
    }
  };
  React.useEffect(() => {
    fetchTypes();
  }, []);
  return (
    <div className="bg-[blue] p-4 mt-10 w-[180px] text-[white] text-[18px] text-center flex flex-col">
      {types &&
        types.map((type) => (
          <p
            onClick={() => changePathHandler(type.id)}
            className={
              path.includes(`typeId=${type.id}`) && cat
                ? " underline my-2 font-bold"
                : "my-2 font-semibold"
            }
            key={type.id}
          >
            {type.name}
          </p>
        ))}
    </div>
  );
};

export default TypeBar;
