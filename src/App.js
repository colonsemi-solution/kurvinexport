import './App.css';
import Home from '../src/modules/Home/pages/index'
import Contact from '../src/modules/Contact/pages/index'
import About from '../src/modules/About/pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpicesHeader from './Component/SpicesHeader';
import SpicesFooter from './Component/SpicesFooter';

function App() {
  return (
    <BrowserRouter basename='/kurvinexport'>
    <SpicesHeader/>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
    </Routes>
    <SpicesFooter/>
    </BrowserRouter>
  );
}

export default App;
