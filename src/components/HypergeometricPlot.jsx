import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Local imports:
import hyp2f1 from "../utils/index.js";

const HypergeometricPlot = ({ a, b, c, yMin, yMax, xRange, step = 0.1 }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const computeData = () => {
      const data = [];
      for (let x = xRange[0]; x <= xRange[1]; x += step) {
        let y;
        try {
          y = hyp2f1(a, b, c, x);
        } catch (e) {
          y = "NaN";
        }

        if (y === Infinity || y > 1e5) y = "Inf";
        else if (y === -Infinity || y < -1e5) y = "-Inf";

        data.push({
          x: parseFloat(x.toFixed(2)),
          hyp2f1: y,
        });
      }
      setChartData(data);
    };

    computeData();
  }, [a, b, c, xRange, step]);

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 mx-auto h-[500px] bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl px-8 py-6 mb-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
        Hypergeometric Function{" "}
        <span className="text-blue-600">
          ₂F₁({a},{b};{c};x)
        </span>
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#ddd" />
          <XAxis
            dataKey="x"
            domain={xRange}
            label={{
              value: "x",
              position: "insideBottom",
              offset: -15,
              fontSize: 14,
            }}
            tick={{ fontSize: 12, fill: "#333" }}
          />
          <YAxis
            domain={[yMin, yMax]}
            tickFormatter={(value) =>
              value === "Inf" || value === "-Inf" || isNaN(value)
                ? value
                : value.toFixed(2)
            }
            label={{
              value: "₂F₁(a,b;c;x)",
              angle: -90,
              position: "insideLeft",
              fontSize: 16,
              fill: "#333",
              dx: -10,
            }}
            tick={{ fontSize: 12, fill: "#333" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            formatter={(value) =>
              value === "Inf" || value === "-Inf" || isNaN(value)
                ? value
                : value.toFixed(4)
            }
          />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="top"
            wrapperStyle={{ fontSize: "14px", marginBottom: "10px" }}
          />
          <Line
            type="monotone"
            dataKey="hyp2f1"
            stroke="#ff7300"
            strokeWidth={1}
            dot={{ r: 4, fill: "#ff7300" }}
            activeDot={{ r: 6, fill: "#ff4500" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HypergeometricPlot;
