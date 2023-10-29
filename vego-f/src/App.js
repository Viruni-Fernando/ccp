import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Outlet, useRoutes, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
function App() {
  return (
    <BrowserRouter>
    
    
  <div className="content-container">
    <Routes>

    <Route path="/" element={<Home/>}/>

    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
