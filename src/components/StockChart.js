import React, { useEffect, useState } from "react";
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


export function StockChart({ symbol }) {
  const [stockData, setStockData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [values, setvalues] = useState([]);
  const fetchHistory = async () => {
    const res = await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/stock/trend?ticker=${symbol}`);
    const data = await res.json();
    console.log(data);
    setStockData(data);
    const labels = stockData?.map(item => {
      // Convert the date to a more readable format, e.g., "MMMM YYYY"
      const date = new Date(item.Date);
      return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    });
  
    const highValues = stockData?.map(item => item.High);
    setLabels(labels);
    setvalues(highValues);
  }
  
  const data = {
    // labels: ["January", "February", "March", "April"],
    labels: labels,
    datasets: [
      {
        label: "",
        data: values,
        // data: [-800, 372, -374, 684],
        borderColor: "rgba(66, 153, 225)",
        backgroundColor: "rgba(66, 153, 225)",
      }
    ],

  };
  useEffect(()=>{
    fetchHistory();
  },[])
  return (
    <Box>
      <Line options={options} data={data} />
    </Box>
  );
}
