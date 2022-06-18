
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import PatientTable from './Components/PatientTable';
import Login from "./Components/Login";
import UserRegistration from "./Components/UserRegistration";
import UserTable from './Components/UserTable';
import UploadImage from './Components/UploadImage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/patientTable" element={<PatientTable/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/userReg" element={<UserRegistration/>} />
      <Route path="/userTable" element={<UserTable/>} />
      <Route path="/uploadImage" element={<UploadImage/>} />

    </Routes>
    </div>
  );
}

export default App;
