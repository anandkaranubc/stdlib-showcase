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

const HypergeometricPlot = ({ dataUrl, yMin, yMax, xRange }) => {
  const [chartData, setChartData] = useState([]);
  const [params, setParams] = useState({ a: null, b: null, c: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const text = await response.text();
        const jsonData = JSON.parse(text);

        if (
          Array.isArray(jsonData.a) &&
          jsonData.a.length > 0 &&
          Array.isArray(jsonData.b) &&
          jsonData.b.length > 0 &&
          Array.isArray(jsonData.c) &&
          jsonData.c.length > 0
        ) {
          setParams({ a: jsonData.a[0], b: jsonData.b[0], c: jsonData.c[0] });
        }

        const formattedData = jsonData.x.map((xVal, index) => {
          let yValue = jsonData.hyp2f1[index];

          if (yValue === Infinity || yValue > 1e5) yValue = "Inf";
          else if (yValue === -Infinity || yValue < -1e5) yValue = "-Inf";

          return {
            x: parseFloat(xVal.toFixed(2)),
            hyp2f1: yValue,
          };
        });

        setChartData(formattedData);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, [dataUrl]);

  // Filter data based on the xRange
  const filteredData = chartData.filter(
    (point) => point.x >= xRange[0] && point.x <= xRange[1]
  );

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 mx-auto h-[500px] bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl px-8 py-6 mb-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
        Hypergeometric Function{" "}
        <span className="text-blue-600">
          ₂F₁({params.a ?? "a"},{params.b ?? "b"};{params.c ?? "c"};x)
        </span>
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={filteredData}
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
              value === "Inf" || value === "-Inf" ? value : value.toFixed(2)
            }
            label={{
              value: "₂F₁(a,b;c;x)",
              angle: -90,
              position: "insideLeft",
              fontSize: 14,
              fill: "#333",
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
              value === "Inf" || value === "-Inf" ? value : value.toFixed(4)
            }
          />
          <Legend wrapperStyle={{ fontSize: "14px", marginTop: "10px" }} />
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
