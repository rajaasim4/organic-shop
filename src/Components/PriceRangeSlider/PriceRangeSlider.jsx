import React, { useState } from "react";

const PriceRangeSlider = ({ minPrice, maxPrice, onPriceChange }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleSliderChange = (event) => {
    const sliderWidth = event.currentTarget.clientWidth;
    const offsetX = event.nativeEvent.offsetX;
    const newPosition = sliderWidth !== 0 ? (offsetX / sliderWidth) * 100 : 0;

    setSliderPosition(newPosition);
    setTooltipVisible(true);

    // Calculate the price based on the slider position and update the parent component
    const newPrice = minPrice + (maxPrice - minPrice) * (newPosition / 100);
    onPriceChange(newPrice);
  };

  const handleSliderRelease = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="flex w-64 m-auto items-center h-32 justify-center">
      <div className="py-1 relative min-w-full">
        <div
          className="h-2 bg-gray-200 rounded-full cursor-pointer relative"
          onMouseMove={handleSliderChange}
          onMouseUp={handleSliderRelease}
          onMouseLeave={handleSliderRelease}
        >
          <div
            className="absolute h-2 rounded-full bg-teal-600"
            style={{ width: `${sliderPosition}%`, left: 0 }}
          ></div>
          {tooltipVisible && (
            <>
              <div
                className="absolute -mt-8 text-white truncate text-xs rounded py-1 px-4 bg-black shadow-md"
                style={{ left: `${sliderPosition}%`, marginLeft: "-25px" }}
              >
                $
                {Math.round(
                  (minPrice + (maxPrice - minPrice) * (sliderPosition / 100)) *
                    100
                ) / 100}
              </div>
              <div
                className="absolute -mt-8 text-white truncate text-xs rounded py-1 px-4 bg-black shadow-md"
                style={{ left: `${sliderPosition}%`, marginLeft: "-25px" }}
              >
                $
                {Math.round(
                  (minPrice + (maxPrice - minPrice) * (sliderPosition / 100)) *
                    100
                ) / 100}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
