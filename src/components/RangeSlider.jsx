import React from "react";

const RangeSlider = ({ xRange, setXRange }) => {
  const handleSliderChange = (event) => {
    const newMax = parseFloat(event.target.value);
    setXRange([-newMax, newMax]);
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center bg-gray-100 p-5 rounded-2xl shadow-lg">
      <label className="text-lg font-semibold text-gray-700">
        Adjust x-axis Range: (-{Math.abs(xRange[1])}, {xRange[1]})
      </label>
      <input
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={Math.abs(xRange[1])}
        onChange={handleSliderChange}
        className="w-full mt-3 cursor-pointer appearance-none h-2 bg-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-400 transition-all"
      />
    </div>
  );
};

export default RangeSlider;
