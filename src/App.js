import "./Style/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import WeatherPage from "./Pages/WeatherPage";
import PlayerPage from "./Pages/PlayerPage";
import PlayerDetail from "./Pages/PlayerDetail";
import Home from "./Pages/Home";
import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    // 背景白
    lightBrown: {
      main: "#d9bca3",
    },
    // 主咖
    midBrown: {
      main: "#bf8360",
    },
    // 深咖
    darkBrown: {
      main: "#73463c",
    },
  },
});
function App() {
  return (
    // <WeatherPage />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/playerData" element={<PlayerPage />} />
      <Route path="/playerDetail" element={<PlayerDetail />} />
    </Routes>
  );
}

export default App;
