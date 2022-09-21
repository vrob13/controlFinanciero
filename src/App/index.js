import React from 'react';
import { TransProvider } from '../TransContext';
import './App.css';
import { AppUI } from './AppUI';

function App() {

  return (
    <TransProvider>
      <AppUI/>
    </TransProvider>
    
  );
}

export default App;
