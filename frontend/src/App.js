// import logo from './logo.svg';
// import './App.css';
import Home from "./Home"
import Admin from "../src/admin/index"
import Produk from "../src/admin/produk"
import Testimoni from "../src/admin/testimoni"
import Pelanggan from "../src/admin/pelanggan"
import EditProduk from "../src/admin/editproduk"
import EditAdmin from "../src/component/admin/EditAdmin"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/produkall" element={<Produk/>}/>
          <Route path="/admin/testiall" element={<Testimoni/>}/>
          <Route path="/admin/pelanggan" element={<Pelanggan/>}/>
          <Route path="/admin/editproduk" element={<EditProduk/>}/>
          <Route path="/admin/editadmin" element={<EditAdmin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
