import React from "react";
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
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false, // Set display to false to remove the background grid on the x-axis
      },
    },
    y: {
      grid: {
        display: false, // Set display to false to remove the background grid on the y-axis
      },
    },
  },
  plugins: {
    legend: {
        display: false, 
    }
  },
};

// const;

export const data = {
    labels : ["January", "February", "March", "April"],
    datasets: [
        {
            label: "",
            data:  [-800, 372, -374, 684],
            borderColor: "rgba(66, 153, 225)",
            backgroundColor: "rgba(66, 153, 225)",
        }
    ],
   
};

export function StockChart() {
  return (
    <Box>
      <Line options={options} data={data} />
    </Box>
  );
}
