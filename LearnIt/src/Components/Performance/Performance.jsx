import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Performance.css'
const Performance = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }

    // Data for the first chart
    const data1 = {
      labels: ['Science-A', 'Physics', 'Maths'],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ['red', 'blue', 'green'],
        },
      ],
    };

    // Data for the second chart
    const data2 = {
        labels: ['Science-A', 'Physics', 'Maths'],
      datasets: [
        {
          data: [10, 40, 50],
          backgroundColor: ['orange', 'purple', 'pink'],
        },
      ],
    };

    // Chart 1
    const ctx1 = chartRef1.current.getContext('2d');
    chartInstance1.current = new Chart(ctx1, {
      type: 'pie',
      data: data1,
    });

    // Chart 2
    const ctx2 = chartRef2.current.getContext('2d');
    chartInstance2.current = new Chart(ctx2, {
      type: 'bar',
      data: data2,
    });
  }, []);

  return (
    <div>
      <h2>Test Performance</h2>
      <div className="chart-container">
        <canvas style={{border:"2px solid black", margin:"10px"}} ref={chartRef1} ></canvas>
        <canvas style={{border:"2px solid black"}} ref={chartRef2}></canvas>
      </div>
    </div>
  );
};

export default Performance;
