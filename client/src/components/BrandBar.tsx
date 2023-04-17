import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { selectBrands } from "../store/selectors/brandSelector";
import Brand from "./Brand";
import { IBrandBar } from "../types/brand";

const BrandBar = ({ path, setPath }: IBrandBar) => {
  const brands = useTypedSelector(selectBrands);
  const { fetchBrands } = useActions();
  React.useEffect(() => {
    fetchBrands();
  }, []);
  return (
    <div>
      {brands.length > 0 && (
        <nav className="flex ">
          {brands.map((brand) => (
            <Brand
              key={brand.id}
              id={brand.id}
              path={path}
              name={brand.name}
              setPath={setPath}
            />
          ))}
        </nav>
      )}
    </div>
  );
};

export default BrandBar;
