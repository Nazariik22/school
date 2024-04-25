import React from 'react';
import { Routes,Route } from "react-router-dom";
import { Footer } from './Component/Footer/Footer';
import { Header } from './Component/Header/Header';
import { Aside } from './Component/Aside/Aside';
import style from './App.module.css';

function App() {
  return (
    <div className={style.body}>
     <Header/>
     <div className={style.wrapper}>
        <Aside/>
        <Routes>
            <Route path='/' element={<div></div>}/>
            <Route path='/news' element={<div></div>}/>
            <Route path='/new/:id' element={<div></div>}/>
            <Route path='/fotoall' element={<div></div>}/>
            <Route path='/foto/:id' element={<div></div>}/>
            <Route path='/contact' element={<div></div>}/>
            <Route path='/admin' element={<div></div>}/>
            <Route path='/teachers' element={<div></div>}/>
            <Route path='/teacher/:id' element={<div></div>}/>
            <Route path='/doc' element={<div></div>}/>
        </Routes>
        <main></main>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
