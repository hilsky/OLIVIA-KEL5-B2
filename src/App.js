import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import TourGuide from './pages/TourGuide';
import Destinations from './pages/Destinations';

import DetailGuides from './pages/DetailGuides';
import DetailDestinasi from './pages/DetailDestinasi';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/tour-guide' exact element={<TourGuide />} />
        <Route path='/destinasi' exact element={<Destinations />} />
        <Route path='/detail-guide/:id' exact element={<DetailGuides />} />
        <Route path='/detail-destinasi/:id' exact element={<DetailDestinasi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
