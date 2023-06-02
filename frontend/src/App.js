// import logo from './logo.svg';
// import './App.css';
import Home from "./Home"
import Admin from "../src/admin/index"
import AdminProduk from "../src/admin/produk"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/produk" element={<AdminProduk/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
