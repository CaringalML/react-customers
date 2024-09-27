import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelTable from './HotelTable'; // Import a new table component to display the data

// Default base URI
const BASE_URI = 'http://localhost/api';

const Hotel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URI}/getRooms`); // Fetch data from /getRooms
        setData(response.data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div>
      <h1>Room Data</h1>
      <HotelTable data={data} /> {/* Pass the data to the HotelTable component */}
    </div>
  );
};

export default Hotel;
