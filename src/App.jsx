import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GamesPage from './pages/GamesPage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<PageLayout><LandingPage /></PageLayout>} />
        <Route path="/home" element={<PageLayout><HomePage /></PageLayout>} />
        <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
        <Route path="/games" element={<PageLayout><GamesPage /></PageLayout>} />
        <Route path="/community" element={<PageLayout><CommunityPage /></PageLayout>} />
        <Route path="/support" element={<PageLayout><SupportPage /></PageLayout>} />
      </Routes>
    </div>
  );
}

function PageLayout({ children }) {
  return (
    <div className="main">
      <Navbar />
      {children}
      <Footer />
      <Chatbot />
    </div>
  );
}