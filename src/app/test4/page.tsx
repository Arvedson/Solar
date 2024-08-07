"use client";

import React, { useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Page = () => {
  const [data, setData] = useState<number[]>([]);
  const [imageUrl, setImageUrl] = useState<string>('');
  const chartRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newData = (formData.get('data') as string).split(',').map(Number);
    setData(newData);
  };

  const saveChartAsImage = async () => {
    const chartElement = chartRef.current;
    if (chartElement) {
      const canvas = await html2canvas(chartElement);
      const imageData = canvas.toDataURL('image/png');

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageData }),
      });

      if (response.ok) {
        const { url } = await response.json();
        setImageUrl(url);
      } else {
        console.error('Failed to upload image');
      }
    }
  };

  const chartData = {
    labels: data.map((_, index) => `Point ${index + 1}`),
    datasets: [
      {
        label: 'My Dataset',
        data: data,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div>
      <h1>Generate Chart</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Data Points (comma separated):
          <input type="text" name="data" required />
        </label>
        <button type="submit">Generate Chart</button>
      </form>
      {data.length > 0 && (
        <div>
          <div ref={chartRef} style={{ width: '600px', height: '400px' }}>
            <Line data={chartData} />
          </div>
          <button onClick={saveChartAsImage}>Save as Image</button>
        </div>
      )}
      {imageUrl && (
        <div>
          <p>Image URL: <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a></p>
          <img src={imageUrl} alt="Generated Chart" />
        </div>
      )}
    </div>
  );
};

export default Page;
