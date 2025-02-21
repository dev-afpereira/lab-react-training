import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import IdCardsPage from './pages/IdCardsPage';
import GreetingsPage from './pages/GreetingsPage';
import RandomPage from './pages/RandomPage';
import BoxColorPage from './pages/BoxColorPage';
import CreditCardPage from './pages/CreditCardPage';
import RatingPage from './pages/RatingPage';
import DriverCardPage from './pages/DriverCardPage';
import LikeButtonPage from './pages/LikeButtonPage';
import ClickablePicturePage from './pages/ClickablePicturePage';
import DicePage from './pages/DicePage';
import CarouselPage from './pages/CarouselPage';
import NumbersTablePage from './pages/NumbersTablePage';
import FaceBookPage from './pages/FaceBookPage';
import FacebookAdvancedPage from './pages/FacebookAdvancedPage';
import SignupPage from './pages/SignupPage';
import RGBColorPickerPage from './pages/RGBColorPickerPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/id-cards" element={<IdCardsPage />} />
            <Route path="/greetings" element={<GreetingsPage />} />
            <Route path="/random" element={<RandomPage />} />
            <Route path="/box-color" element={<BoxColorPage />} />
            <Route path="/credit-cards" element={<CreditCardPage />} />
            <Route path="/rating" element={<RatingPage />} />
            <Route path="/drivers" element={<DriverCardPage />} />
            <Route path="/likes" element={<LikeButtonPage />} />
            <Route path="/clickable-picture" element={<ClickablePicturePage />} />
            <Route path="/dice" element={<DicePage />} />
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="/numbers-table" element={<NumbersTablePage />} />
            <Route path="/facebook" element={<FaceBookPage />} />
            <Route path="/facebook-advanced" element={<FacebookAdvancedPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/rgb-picker" element={<RGBColorPickerPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
