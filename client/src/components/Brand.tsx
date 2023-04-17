import { useLocation, useNavigate } from "react-router-dom";
import { IBrandBar } from "../types/brand";

const Brand = ({ name, id, path, setPath }: IBrandBar) => {
  const navigate = useNavigate();
  const cat = useLocation().search;
  const changePathHandler = (id: number | undefined) => {
    if (id && !path && !path.includes("brandId")) {
      navigate(`/?brandId=${id}`);
      setPath(`/?brandId=${id}`);
    } else if (
      path &&
      path.startsWith("/?brandId") &&
      path.endsWith(`&typeId=${path[path.length - 1]}`)
    ) {
      const symbol = path.indexOf("&");
      const result = path.slice(symbol);
      navigate(`/?brandId=${id}${result}`);
      setPath(`/?brandId=${id}${result}`);
    } else if (path.includes("brandId") && path.startsWith("/?typeId")) {
      const symbol = path.indexOf("&");
      const result = path.slice(0, symbol);
      navigate(`${result}&brandId=${id}`);
      setPath(`${result}&brandId=${id}`);
    } else if (path.includes("brandId")) {
      navigate(`/?brandId=${id}`);
      setPath(`/?brandId=${id}`);
    } else {
      navigate(`${path}&brandId=${id}`);
      setPath(`${path}&brandId=${id}`);
    }
  };
  return (
    <p
      onClick={() => changePathHandler(id)}
      className={
        path.includes(`brandId=${id}`) && cat
          ? "bg-[red] p-2 mr-3 text-white w-[90px] text-center"
          : "bg-[blue] p-2 mr-3 text-white w-[90px] text-center"
      }
    >
      {name}
    </p>
  );
};

export default Brand;
