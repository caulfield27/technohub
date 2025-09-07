import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Pie, Line, Doughnut, PolarArea, Radar } from "react-chartjs-2";
import { useStyles } from "./styles";
import FilterDropdown from "@/shared/ui/filterDropdown/FilterDropdown";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement
);

const chartOptionsList = [
  { id: "bar", value: "Bar" },
  { id: "line", value: "Line" },
  { id: "pie", value: "Pie" },
  { id: "doughnut", value: "Doughnut" },
  { id: "polarArea", value: "PolarArea" },
  { id: "radar", value: "Radar" },
];

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Покупки",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["rgba(75, 192, 192, 0.5)"],
    },
    {
      label: "Продажи",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["rgba(255, 99, 132, 0.5)"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Sales",
    },
  },
};

const Statistics = () => {
  const styles = useStyles();
  const [chartType, setChartType] = useState<string>("bar");

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <Bar data={data} options={options} />;
      case "line":
        return <Line data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      case "polarArea":
        return <PolarArea data={data} options={options} />;
      case "radar":
        return <Radar data={data} options={options} />;
      default:
        return <Bar data={data} options={options} />;
    }
  };

  return (
    <div className={styles.root}>
      <div style={{ marginBottom: 16 }}>
        <FilterDropdown
          options={chartOptionsList}
          placeholder="Тип графика"
          value={chartType}
          onChange={(val: string) => setChartType(val)}
        />
      </div>
      {renderChart()}
    </div>
  );
};

export default Statistics;
