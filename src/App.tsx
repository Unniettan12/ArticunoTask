import Main from './components/main'
import User from './components/User'
import Login from './components/Login'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { useState} from 'react';

const App:React.FC=() => {

  

  return (

    <div className='flex justify-between flex-col h-screen content-start'>
     <div className="fixed top-0 left-0 right-0 bottom-0 flex-rows flex justify-between h-fit border border-b-2 p-5 bg-white z-10">
      <div>
        E-Shop
      </div>
      <div>
        <button className='px-5 p-2 rounded-2xl'>Men</button>
        <button className='px-5 p-2 rounded-2xl'>Women</button>
        <button className='px-5 p-2 rounded-2xl'>Children</button>
     </div>
     <div>
       <User/>
     </div>
     </div>
    <BrowserRouter>
        <Routes>
            <Route index element={<Main/>}/>
             
        <Route path="/login" element={<Login/>}/>
           
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
