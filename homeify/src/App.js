import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProfilePage from "./components/Main/ProfileActions/ProfilePage";
import TrackPage from "./components/Main/ProfileActions/TrackPage";
import WalletPage from "./components/Main/ProfileActions/WalletPage";
import Navbar from "./components/Main/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/orders" element={<TrackPage/>}/>
      <Route path="/wallet" element={<WalletPage/>}/>
    </Routes>

    </>
  );
}

export default App;
