import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListMenu from "./components/ListMenu";
import MainPage from "./mainPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/item/:name" element={<ListMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
