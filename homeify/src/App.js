import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProfilePage from "./components/Main/ProfileActions/ProfilePage";
import TrackPage from "./components/Main/ProfileActions/TrackPage";
import WalletPage from "./components/Main/ProfileActions/WalletPage";
import Navbar from "./components/Main/Navbar/Navbar";
import { ErrorPage } from "./components/Main/ErrorPage/ErrorPage";
import Dummy from "./components/Personal/Aditya/Dummy/Dummy";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<TrackPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
    </>
  );
}

export default App;
