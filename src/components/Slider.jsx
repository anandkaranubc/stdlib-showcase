import React from "react";

const Slider = ({ label, value, setValue, min, max, step }) => {
  return (
    <div className="flex flex-col items-center">
      <label className="text-gray-700 font-semibold mb-2">{label}: {value.toFixed(2)}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="w-full mt-3 cursor-pointer appearance-none h-2 bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-400 transition-all"
      />
    </div>
  );
};

export default Slider;
