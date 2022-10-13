import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Network from './components/Network';
import Features from './components/Features';
import Type from './components/Type';
import Mint from './components/Mint';
import Poap from './components/Poap';
import './App.css';
import Drop from './components/Drop';

function App() {

  const [token, setToken] = useState({ network: "", type: "", features: [] });

  const chooseNetwork = (network) => {
    setToken({ ...token, network })
  }
  
  const chooseType = (type) => {
    setToken({ ...token, type })
  }

  const addFeatures = (features) => {
    let newFeatures;
    if(!token.features.includes(features)){
      newFeatures = [...token.features, features];
    } else {
      newFeatures = token.features.filter(item => item !== features);
    }
    setToken({ ...token, features: newFeatures });
  }

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/network" element={<Network chooseNetwork={chooseNetwork} token={token} />} />
        <Route path="/type" element={<Type chooseType={chooseType} token={token} />} />
        <Route path="/features" element={<Features addFeatures={addFeatures} token={token} />} />
        <Route path="/mint" element={<Mint token={token} />} />
        <Route path="/poap" element={<Poap />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
