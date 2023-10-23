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
  const [data, setData] = useState({
    // labels: ["January", "February", "March", "April"],
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        // data: [-800, 372, -374, 684],
        borderColor: "rgba(66, 153, 225)",
        backgroundColor: "rgba(66, 153, 225)",
      }
    ],
  })
  const fetchHistory = async () => {
    const res = await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/stock/trend?ticker=${symbol}`);
    const datas = await res.json();
    setStockData(datas)
  }
  
  useEffect(()=>{
    const datas = fetchHistory(); 
  },[]);

  useEffect(()=>{

    const label = stockData?.slice(0, -1).map(item => {
      const date = new Date(item.Date);
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (1-12) and pad with '0' if needed
      const year = date.getFullYear().toString().slice(-2); // MM/YY
      return `${month}/${year}`;
    });
  
    const highValues = stockData?.slice(0, -1).map(item => item.High);
    setLabels(label);
    setvalues(highValues);
    setData({
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
    })
  }, [stockData])

  return (
    <Box>
      <Line options={options} data={data} />
    </Box>
  );
}
