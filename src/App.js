import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';

import Travel from './pages/Travel';

import './global';

function App() {
  return (
     <>
      <Travel />
      <ToastContainer />
    </>
  );
}

export default App;
