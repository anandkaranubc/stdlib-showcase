import React from "react";
import HypergeometricPlot from "./HypergeometricPlot";
import RangeSlider from "./RangeSlider";
import Slider from "./Slider";

function FunctionPlotter() {
  const [xRange, setXRange] = React.useState([-10, 10]);
  const [a, setA] = React.useState(-7);
  const [b, setB] = React.useState(1);
  const [c, setC] = React.useState(2);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-6 space-y-10">
      <div className="w-full max-w-6xl">
        <HypergeometricPlot
          a={a}
          b={b}
          c={c}
          yMin={-2}
          yMax={20}
          xRange={xRange}
        />
      </div>

      <div className="flex justify-center items-start gap-10 w-full max-w-6xl">
        <div className="flex-1 max-w-md bg-white p-4 rounded-2xl shadow-md">
          <RangeSlider
            label="x Range"
            xRange={xRange}
            setXRange={setXRange}
            min={-10}
            max={10}
            step={0.1}
          />
        </div>

        <div className="flex flex-col space-y-4 flex-1 max-w-md">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <Slider
              label="a"
              value={a}
              setValue={setA}
              min={-10}
              max={10}
              step={0.1}
            />
            <Slider
              label="b"
              value={b}
              setValue={setB}
              min={-10}
              max={10}
              step={0.1}
            />
            <Slider
              label="c"
              value={c}
              setValue={setC}
              min={-10}
              max={10}
              step={0.1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunctionPlotter;
