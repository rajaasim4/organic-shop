import ShopAside from "../../Layout/ShopAside/ShopAside";
import Helmet from "../../Components/Helmet/Helmet";
import Brands from "../../Layout/Brands/Brands";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
//Products Data
import Product from "../../Data/Product";
import SkeletonLoader from "../../utils/Helpers/Loaders/SkeletonLoader";
import SortBy from "../../Components/SortBy/SortBy";

const Shop = () => {
  const [data, setData] = useState(Product);
  const [showSortFilter, setShowSortFilter] = useState(false);

  const [selectSortValue, setSelectSortValue] = useState("Default");

  const [showSkeletonLoader, setShowSkeletonLoader] = useState(true);

  //Handling the Sorting
  const handleSelectSortValue = (e) => {
    setSelectSortValue(e.target.value);
    setShowSortFilter((prev) => !prev);
  };

  //Hiding the Sort Filter by Clicking Outside

  let sortRef = useRef();

  useClickOutsideDetector(sortRef, () => {
    setShowSortFilter(false);
  });

  const dummySkeletonLoader = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    setTimeout(() => {
      setShowSkeletonLoader(false);
    }, 4300);
  });

  const [searchProduct, setSearchProduct] = useState("");

  //Handling the Searching

  console.log(searchProduct);

  const handleSearch = () => {
    const searchedProducts = Product.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setData(searchedProducts);
  };

  useEffect(() => {
    if (searchProduct === "") {
      setData(Product);
    }
  }, [searchProduct]);

  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <Helmet>
          <div className="flex gap-x-9">
            <div className="">
              <ShopAside
                handleSearch={handleSearch}
                searchProduct={searchProduct}
                setSearchProduct={setSearchProduct}
              />
            </div>
            <div className="w-full ">
              {/* Handling Sorting of Products */}
              <SortBy />
              {showSkeletonLoader ? (
                <>
                  {/* Showing Skeleton Loader */}

                  <div className="flex gap-x-5 gap-y-8 flex-wrap">
                    {dummySkeletonLoader.map((item, Index) => {
                      return <SkeletonLoader key={Index} />;
                    })}
                  </div>
                </>
              ) : (
                <>
                  {/* Showing All Items or No data found */}
                  {data.length === 0 ? (
                    <h2 className="text-5xl  text-center text-primary_green">
                      No data found
                    </h2>
                  ) : (
                    <div className="flex gap-x-5 gap-y-8 flex-wrap">
                      {data.map((item) => (
                        <ProductCard key={item.id} {...item} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Helmet>
        <div className="h-24"></div>
      </div>
      <Brands />
    </>
  );
};

export default Shop;
