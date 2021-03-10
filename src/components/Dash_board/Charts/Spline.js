import { Chart } from "react-google-charts";
import * as React from "react";
import { render } from "react-dom";

const options = {
  title: "Months vs. Number of cars inspected",
  hAxis: { title: "Months", viewWindow: { min: 0, max: 12 } },
  vAxis: {
    title: "Number of cars inspected",
    viewWindow: { min: 0, max: 120 },
  },
  legend: "none",
};
const data = [
  ["Months", "Number of cars inspected"],
  [0, 0],
  [1, 5],
  [2, 14],
  [3, 5],
  [4, 3],
  [5, 7],
  [6, 7],
  [7, 10],
  [8, 7],
  [9, 7],
  [10, 7],
  [11, 7],
  [12, 7],
];

function Spline() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "red",

        width: "auto",
      }}
    >
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height="500px"
        legendToggle
      />
    </div>
  );
}

export default Spline;
