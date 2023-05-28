import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ListMenu from './ListMenu';
import MainPage from './mainPage';
import NotFound from './404';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
