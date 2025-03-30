import React from "react";

const RangeSlider = ({ xRange, setXRange, min, max, step }) => {
  const [localMin, localMax] = xRange;

  const handleMinChange = (e) => {
    const newMin = parseFloat(e.target.value);
    if (newMin < localMax) setXRange([newMin, localMax]);
  };

  const handleMaxChange = (e) => {
    const newMax = parseFloat(e.target.value);
    if (newMax > localMin) setXRange([localMin, newMax]);
  };

  return (
    <div className="w-full max-w-md p-5 space-y-4">
      <label className="text-lg font-semibold text-gray-700 text-center">
        Adjust x-axis Range: ({xRange[0]}, {xRange[1]})
      </label>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">Min x: {localMin}</span>
          <input
            type="range"
            min={min}
            max={localMax - step}
            step={step}
            value={localMin}
            onChange={handleMinChange}
            className="w-full mt-3 cursor-pointer appearance-none h-2 bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-400 transition-all"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">Max x: {localMax}</span>
          <input
            type="range"
            min={localMin + step}
            max={max}
            step={step}
            value={localMax}
            onChange={handleMaxChange}
            className="w-full mt-3 cursor-pointer appearance-none h-2 bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-400 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
