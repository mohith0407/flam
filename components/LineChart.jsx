"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ labels, data, title }) {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: !!title, text: title },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Bookmarks",
        data,
        fill: false,
        borderColor: "rgba(234, 179, 8, 0.8)", // Tailwind yellow-500 with opacity
        tension: 0.3,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
