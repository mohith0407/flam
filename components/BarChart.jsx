"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ labels, data, title }) {
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
        label: "Average Rating",
        data,
        backgroundColor: "rgba(37, 99, 235, 0.7)", // Tailwind blue-600 with opacity
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
}
