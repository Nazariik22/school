import React from 'react';
import { Routes,Route } from "react-router-dom";
import { Footer } from './Component/Footer/Footer';
import { Header } from './Component/Header/Header';
import { Aside } from './Component/Aside/Aside';


function App() {
  return (
    <div >
     <Header/>
     <div className="wrapper">
        <Aside/>
        <main></main>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
