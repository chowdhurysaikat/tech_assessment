// React.js Frontend for EV Dashboard
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import necessary for Chart.js v3+

const App = () => {
  const [topManufacturers, setTopManufacturers] = useState({});
  const [evTypes, setEvTypes] = useState({});
  const [modelYearTrends, setModelYearTrends] = useState({});
  const [topCities, setTopCities] = useState({});

  useEffect(() => {
    axios.get('/api/top-manufacturers').then((res) => setTopManufacturers(res.data));
    axios.get('/api/ev-types').then((res) => setEvTypes(res.data));
    axios.get('/api/model-year-trends').then((res) => setModelYearTrends(res.data));
    axios.get('/api/top-cities').then((res) => setTopCities(res.data));
  }, []);

  const createChartData = (data, label) => ({
    labels: Object.keys(data),
    datasets: [
      {
        label: label,
        data: Object.values(data),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        ],
      },
    ],
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Electric Vehicle Dashboard</h1>

      <section>
        <h2>Top EV Manufacturers</h2>
        <Bar data={createChartData(topManufacturers, 'Top Manufacturers')} />
      </section>

      <section>
        <h2>EV Type Distribution</h2>
        <Pie data={createChartData(evTypes, 'EV Types')} />
      </section>

      <section>
        <h2>Model Year Trends</h2>
        <Line data={createChartData(modelYearTrends, 'Model Year')} />
      </section>

      <section>
        <h2>Top Cities with EV Registrations</h2>
        <Bar data={createChartData(topCities, 'Top Cities')} />
      </section>
    </div>
  );
};

export default App;
