import React, { useState } from 'react-dom';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Compnents/loginComponent/LoginComponent';
import Employee from './Compnents/employee/Employee';
import Fp from './Compnents/fortgotPasswordComponent/Fp';

function App() {
  

  return (
  <div >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/fp' element={<Fp/>}/>
      </Routes>
    </BrowserRouter>

  </div>

    
  );
}

export default App;
