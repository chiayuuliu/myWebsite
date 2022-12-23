import './Style/App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import WeatherPage from './Pages/WeatherPage';
import PlayerPage from './Pages/PlayerPage';
import Home from './Pages/Home';

function App() {
  return (
    // <WeatherPage />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

      </Route>
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/playerData" element={<PlayerPage />} />
    </Routes>
  );
}

export default App;
