import React from 'react';

/* import AddTransaction from './Components/AddTransaction';

import InputPage from './Components/InputPage'; 

/* import TransactionCard from './Components/TransactionCard'; */
import InputPage from './Components/InputPage';
import Transaction from './Components/Transaction';
import Teste from './Components/Teste';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="/create" element={<InputPage />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
