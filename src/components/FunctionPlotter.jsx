import React from "react";
import HypergeometricPlot from "./HypergeometricPlot";
import RangeSlider from "./RangeSlider";

function FunctionPlotter() {
  const [xRange, setXRange] = React.useState([-2, 2]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-10 space-y-6">
      <div className="flex justify-around items-center w-full">
        <HypergeometricPlot
          dataUrl="mixed.json"
          yMin={-2}
          yMax={20}
          xRange={xRange}
        />
        <HypergeometricPlot
          dataUrl="wiki.json"
          yMin={-10}
          yMax={20}
          xRange={xRange}
        />
      </div>
      <RangeSlider xRange={xRange} setXRange={setXRange} />
    </div>
  );
}

export default FunctionPlotter;
