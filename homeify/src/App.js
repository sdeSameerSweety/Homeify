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
import { UserContextProvider } from "./UserContext";
import AddressAdditon from "./components/Main/ProfileActions/AddressAdditon";
import AllAddressPage from "./components/Main/ProfileActions/AllAddressPage";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;
import Trends from "./components/Personal/Somya/Cards/Furniture";
import Sofas from "./components/Personal/Somya/Cards/SofaProducts";
function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<TrackPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/editaddress" element={<AddressAdditon />} />
          <Route path="/addresses" element={<AllAddressPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/dummy" element={<Dummy />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
