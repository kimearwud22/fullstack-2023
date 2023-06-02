// import logo from './logo.svg';
// import './App.css';
import Navbar from "../src/component/Navbar";
import Body from "../src/component/Body";
// import Admin from "../src/admin/index"
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar/>
      <Body/>
    </div>
  );
}

export default Home;
