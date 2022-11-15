import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import TourGuide from './pages/TourGuide';
import Destinations from './pages/Destinations';

import DetailGuides from './pages/DetailGuides';
import DetailDestinasi from './pages/DetailDestinasi';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' exact element={<Dashboard />} />
        <Route path='/tour-guide' element={<TourGuide />} />
        <Route path='/destinasi' element={<Destinations />} />
        <Route path='/detail-guide/:id' element={<DetailGuides />} />
        <Route path='/detail-destinasi/:id' element={<DetailDestinasi />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
