import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideMenu from './SideMenu';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Poll from 'react-polls';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const location = useLocation();
  const showPersonalInfo = location.pathname === '/home';

  // Example data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Stock Prices',
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: '#3498db', // Primary color
        backgroundColor: 'rgba(52, 152, 219, 0.2)', // Primary color with transparency
      },
    ],
  };

  // Example options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw}`,
        },
      },
    },
  };

  // Example poll data
  const pollQuestion = "What's your favorite programming language?";
  const pollAnswers = [
    { option: 'JavaScript', votes: 12 },
    { option: 'Python', votes: 5 },
    { option: 'Java', votes: 8 },
  ];

  return (
    <main>
      <SideMenu />
      <div className="main-content">
        <div className="content-container">
          {showPersonalInfo && (
            <>
              <h1>Personal Information</h1>
              <p><strong>Name:</strong> Maryam</p>
              <p><strong>Email:</strong> maryam@example.com</p>
              <p><strong>Phone:</strong> 123-456-7890</p>

              <h2>Stock Price Trends</h2>
              <div style={{ maxWidth: '600px', margin: 'auto' }}>
                <Line data={data} options={options} />
              </div>

              <h2>Poll</h2>
              <div style={{ maxWidth: '600px', margin: 'auto' }}>
                <Poll question={pollQuestion} answers={pollAnswers} onVote={() => { /* Handle vote */ }} />
              </div>

              <h2>More Information</h2>
              <p>Here is more information about stocks and other relevant data.</p>
            </>
          )}
          <Outlet /> {/* Render the nested routes: About, Contact Us, Feedback */}
        </div>
      </div>
    </main>
  );
};

export default Home;
