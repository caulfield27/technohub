import { Title2 } from "@fluentui/react-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import {
  Bar,
  Pie,
  Line,
  Doughnut,
  PolarArea,
  Radar,
  Scatter,
  Bubble,
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // radar and polar area
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "flex-start",
      }}
    >
      <Title2>Статистика</Title2>
      <Bar data={data} options={options} />
      <Line data={data} options={options} />
      <Pie data={data} options={options} />
      <Doughnut data={data} options={options} />
      <PolarArea data={data} options={options} />
      <Radar data={data} options={options} />
      <Scatter
        data={{
          datasets: [
            {
              label: "Scatter Dataset",
              data: [
                { x: -10, y: 0 },
                { x: 0, y: 10 },
                { x: 10, y: 5 },
              ],
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
        options={options}
      />
      <Bubble
        data={{
          datasets: [
            {
              label: "Bubble Dataset",
              data: [
                { x: 20, y: 30, r: 15 },
                { x: 40, y: 10, r: 10 },
              ],
              backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default Statistics;
