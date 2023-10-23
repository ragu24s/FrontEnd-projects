import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const { dataPoints } = props;
 
  const dataProvider = dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataProvider);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
