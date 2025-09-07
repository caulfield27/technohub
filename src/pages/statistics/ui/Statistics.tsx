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
import useSwr from "swr";
import { apiUrl } from "@/shared/api/api.config";
import { getStats } from "../api";
import DataLoader from "@/shared/ui/dataLoader/DataLoader";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { getStorages } from "@/pages/storage/api";

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

const formateData = (date: string) => {
  return date.slice(0, date.indexOf("T"));

}

const Statistics = () => {
  const styles = useStyles();
  const [chartType, setChartType] = useState<string>("bar");
  const [query, setQuery] = useState<{
    date_start: Date,
    date_end: Date
  }>({
    date_start: new Date(),
    date_end: new Date()
  });

  const { data: statistics, isLoading: statsLoading } =
    useSwr(`${apiUrl.stats}?date_start=${formateData(query.date_start.toISOString())}Z00:00:00&date_end=${formateData(query.date_end.toISOString())}Z23:59:59`, getStats, { revalidateOnFocus: false });

  const { data: warehouses, isLoading: warehouseLoading } = useSwr(apiUrl.warehouse, getStorages);

  const allData = statistics && warehouses ? statistics.concat(warehouses.filter((wh) => statistics.every((stat: any) => stat.warehouse !== wh.Name))) : null;

  const chartData = allData
    ? {
      labels: allData.map((s: any) => s.warehouse ?? s.Name) ?? "",
      datasets: [
        {
          label: "Покупки",
          data: statistics.map((s: any) => s.bought ?? 0),
          backgroundColor: "rgba(209, 49, 49, 1)",
        },
        {
          label: "Продажи",
          data: statistics.map((s: any) => s.sold ?? 0),
          backgroundColor: "rgba(13, 193, 0, 1)",
        },
      ],
    }
    : { labels: [], datasets: [] };


  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Статистика по складам" },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <div style={{ width: "100%", height: "400px" }}>
          <Bar data={chartData} options={options} />
        </div>;
      case "line":
        return <div style={{ width: "100%", height: "400px" }}>
          <Line data={chartData} options={options} />
        </div>;
      case "pie":
        return <div style={{ width: "100%", height: "400px" }}>
          <Pie data={chartData} options={options} />
        </div>;
      case "doughnut":
        return <div style={{ width: "100%", height: "400px" }}>
          <Doughnut data={chartData} options={options} />
        </div>;
      case "polarArea":
        return <div style={{ width: "100%", height: "400px" }}>
          <PolarArea data={chartData} options={options} />
        </div>;
      case "radar":
        return <div style={{ width: "100%", height: "400px" }}>
          <Radar data={chartData} options={options} />
        </div>;
      default:
        return <div style={{ width: "100%", height: "400px" }}>
          <Bar data={chartData} options={options} />
        </div>;
    }
  };

  return (
    <div className={styles.root}>
      <div style={{
        marginBottom: 16,
        display: "flex",
        flexDirection: 'row',
        gap: "12px",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <FilterDropdown
          options={chartOptionsList}
          placeholder="Тип графика"
          value={chartType}
          onChange={(val: string) => setChartType(val)}
        />
        <DatePicker
          onSelectDate={(data: any) => {
            setQuery(prev => ({ ...prev, date_start: data }))
          }}
          value={query.date_start}
          name="date_start"
          placeholder="Выберите начало даты"
          maxDate={new Date()}
          formatDate={(date?: Date) =>
            date ? formateData(date.toISOString()) : ""
          }
        />
        <DatePicker
          onSelectDate={(data: any) => {
            setQuery(prev => ({ ...prev, date_end: data }))
          }}
          name="date_end"
          value={query.date_end}
          placeholder="Выберите конец даты"
          maxDate={new Date()}
          formatDate={(date?: Date) =>
            date ? formateData(date.toISOString()) : ""
          }
        />
      </div>
      {statsLoading || warehouseLoading ? <DataLoader /> : renderChart()}
    </div>
  );
};

export default Statistics;
