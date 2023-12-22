import React from "react";
import DashboardHelmet from "../../Components/DashboardHelmet/DashboardHelmet";
import DashboardProductCard from "../../Components/DashboardProductCard/DashboardProductCard";
import Product from "../../Data/Product";
const ViewItem = () => {
  return (
    <DashboardHelmet>
      <div className="w-full">
        <div className="flex justify-evenly gap-4 flex-wrap">
          {Product.map((item) => {
            return <DashboardProductCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </DashboardHelmet>
  );
};

export default ViewItem;
