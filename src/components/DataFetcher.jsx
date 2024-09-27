import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerTable from './CustomerTable'; // Ensure this import is correct

// Default base URI
const BASE_URI = 'https://server.lawrence-kps.online:8080/api';

const DataFetcher = ({ endpoint }) => { // Accepting endpoint as a prop
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URI}${endpoint}`); // Use the base URI with the endpoint
        setData(response.data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Added endpoint to the dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return (
    <div>
      <CustomerTable data={data} />  {/* Passing data as a prop */}
    </div>
  );
};

export default DataFetcher;
