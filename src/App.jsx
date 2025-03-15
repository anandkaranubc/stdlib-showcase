import React, { useState } from "react";
import RangeSlider from "./components/RangeSlider";
import HypergeometricPlot from "./components/HypergeometricPlot";

function App() {
  const [xRange, setXRange] = useState([-2, 2]);

  return (
    <>
      {/* Title Section */}
      <div className="text-center py-10 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">
          Hypergeometric Function Visualization
        </h1>
        <p className="text-lg mt-2">
          Interactive plots comparing different data sets
        </p>
      </div>

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
    </>
  );
}

export default App;
