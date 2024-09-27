// App.js
import React from 'react';
import DataFetcher from './components/DataFetcher.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <DataFetcher endpoint="/getCustomers" /> {/* Only using DataFetcher */}
    </div>
  );
}

export default App;
