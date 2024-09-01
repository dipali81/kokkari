import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// Import your page components here
import About from './pages/About';
import Cuisine from './pages/Cuisine';
import Menus from './pages/Menus';
import Reservations from './pages/Reservations';
import PrivateDining from './pages/PrivateDining';

function App() {
  return (
    <div className="bg-[#eae2c8] min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/menus/*" element={<Menus />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/private-dining" element={<PrivateDining />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
