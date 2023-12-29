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
  const [selectCategory, setSelectCategory] = useState("All");

  const handleSorting = (sortValue) => {
    let sortedData = null;
    console.log(sortValue);

    switch (sortValue) {
      case "Default":
        setData(Product);
        break;

      case "Low Price":
        sortedData = data.toSorted((a, b) => a.price - b.price);
        setData(sortedData);
        break;

      case "High Price":
        sortedData = data.toSorted((a, b) => b.price - a.price);
        setData(sortedData);
        break;

      case "Ascending":
        setData(Product);
        break;

      case "Descending":
        sortedData = data.toSorted((a, b) => b.name.localeCompare(a.name));
        setData(sortedData);
        break;

      default:
        setData(Product);
        break;
    }
  };

  //Handling the Product Selection Sorting
  const handleSelectSortValue = (e) => {
    const value = e.target.value;

    setSelectSortValue(value);
    setShowSortFilter((prev) => !prev);

    //Calling the Sorting Function
    handleSorting(value);
  };

  //Hiding the Sort Filter by Clicking Outside

  let sortRef = useRef();

  useClickOutsideDetector(sortRef, () => {
    setShowSortFilter(false);
  });

  //Checking for the Page Refresh

  let isPageRefreshed = useRef(!sessionStorage.getItem("pageLoaded"));

  useEffect(() => {
    sessionStorage.setItem("pageLoaded", true);
  }, []);

  const dummySkeletonLoader = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (isPageRefreshed.current) {
      setTimeout(() => {
        setShowSkeletonLoader(false);
      }, 4300);
    } else {
      setShowSkeletonLoader(false);
    }
  }, []);

  const [searchProduct, setSearchProduct] = useState("");

  //Handling the Searching

  const handleSearch = () => {
    const searchedProducts = Product.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setData(searchedProducts);
  };

  //if the Search feild is empty then show Data after 1400ms
  useEffect(() => {
    let time = null;
    if (searchProduct === "") {
      time = setTimeout(() => {
        setData(Product);
      }, 1400);
    } else {
      clearTimeout(time);
    }
  }, [searchProduct]);

  //Filtering data based on category

  const handleCategoryFilter = (category) => {
    console.log(category);
    if (category === "View All") {
      setData(Product);
    } else {
      let categoryFilteredData = Product.filter(
        (item) => item.category === category
      );
      setData(categoryFilteredData);
    }
  };

  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <Helmet>
          <div className="flex gap-x-9">
            <div className="">
              <ShopAside
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
                handleSearch={handleSearch}
                handleCategoryFilter={handleCategoryFilter}
              />
            </div>
            <div className="w-full ">
              {/* Handling Sorting of Products */}
              <SortBy
                selectSortValue={selectSortValue}
                setSelectSortValue={setSelectSortValue}
                handleSelectSortValue={handleSelectSortValue}
                showSortFilter={showSortFilter}
                setShowSortFilter={setShowSortFilter}
              />

              {/* Skeleton Loader */}
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
                      {data.map((item, Index) => (
                        <ProductCard key={Index} {...item} />
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
