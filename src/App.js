import React from 'react';
import{Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
// import Galleries from './Pages/Galleries';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Wedding from './Pages/Wedding';
import Potrait from './Pages/Potrait';
import './App.css'
import Footer from './Components/Footer';


function App() {
  return (
   <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='wedding' element={<Wedding/>}/>
        <Route path='potrait' element={<Potrait/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
   
    </>
  );
}

export default App;
