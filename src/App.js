import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import TourGuide from './pages/TourGuide';
import Destinations from './pages/Destinations';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/tour-guide' element={<TourGuide />} />
        <Route path='/destinations' element={<Destinations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
