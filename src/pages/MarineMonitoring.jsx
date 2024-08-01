import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import Navbar from '../components/Navbar1';
import Footer from '../components/Footer1';

function MarineMonitoring() {
  const [selectedSection, setSelectedSection] = useState('waterQuality');
  const chartRef = useRef(null);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const waterQualityData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'pH Level',
        data: [7.2, 7.4, 7.3, 7.5, 7.6, 7.8, 7.7, 7.9, 7.8, 7.6, 7.5, 7.3],
        borderColor: '#0A8EA8',
        tension: 0.1
      },
      {
        label: 'Dissolved Oxygen (mg/L)',
        data: [8.5, 8.3, 8.6, 8.8, 9.0, 8.7, 8.5, 8.2, 8.4, 8.6, 8.7, 8.9],
        borderColor: '#17C9F1',
        tension: 0.1
      }
    ]
  };

  const temperatureData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Surface Temperature (°C)',
        data: [15, 14, 16, 18, 22, 25, 27, 28, 26, 23, 19, 16],
        borderColor: '#0A8EA8',
        tension: 0.1
      },
      {
        label: 'Deep Water Temperature (°C)',
        data: [10, 9, 10, 11, 12, 14, 15, 16, 15, 14, 12, 11],
        borderColor: '#17C9F1',
        tension: 0.1
      }
    ]
  };

  const marineLifeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Fish Population (thousands)',
        data: [50, 52, 55, 60, 65, 70, 75, 78, 76, 72, 68, 60],
        borderColor: '#0A8EA8',
        tension: 0.1
      },
      {
        label: 'Coral Cover (%)',
        data: [30, 30, 31, 32, 33, 35, 36, 37, 37, 36, 35, 33],
        borderColor: '#17C9F1',
        tension: 0.1
      }
    ]
  };

  const renderChart = (data) => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: { color: '#4a5568' }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: { color: '#4a5568' }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#4a5568'
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    let data;
    switch (selectedSection) {
      case 'waterQuality':
        data = waterQualityData;
        break;
      case 'temperature':
        data = temperatureData;
        break;
      case 'marineLife':
        data = marineLifeData;
        break;
      default:
        data = waterQualityData;
    }
    renderChart(data);
  }, [selectedSection]);

  return (
    <>
      <Navbar />

      <div className="relative flex flex-col md:flex-row h-auto bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700">
        {/* Sidebar for larger screens */}
        <div className="md:w-64 w-full md:h-[calc(100vh-4rem)] p-3 bg-white bg-opacity-70 shadow-lg md:block hidden">
          <h1 className="text-2xl font-bold mb-6 text-teal-600 text-center">Marine Monitoring</h1>
          <ul className="space-y-4">
            {['waterQuality', 'temperature', 'marineLife'].map((section) => (
              <li
                key={section}
                className={`cursor-pointer transition-all duration-300 ease-in-out
                  ${selectedSection === section
                    ? 'bg-teal-500 text-white'
                    : 'bg-sky-200 hover:bg-sky-300 text-teal-700'}
                  rounded-lg p-3 shadow-md`}
                onClick={() => setSelectedSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        {/* Select dropdown and back button for smaller screens */}
        <div className="md:hidden flex flex-col items-center p-4 space-y-4">
          <button
            onClick={() => navigate('/marine-conservation')}
            className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Back to Marine Conservation
          </button>
          <div>

          <label htmlFor="sectionSelect" className="text-teal-600 font-bold mr-5">Select Data:</label>
          <select
            id="sectionSelect"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="mt-2 p-2 border border-teal-300 rounded"
          >
            <option value="waterQuality">Water Quality</option>
            <option value="temperature">Temperature</option>
            <option value="marineLife">Marine Life</option>
          </select>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col min-h-96">
          <div className="bg-white rounded-xl p-4 shadow-xl my-auto">
            <canvas id="myChart" className="w-full min-h-96"></canvas>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MarineMonitoring;
