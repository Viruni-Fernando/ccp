import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Outlet, useRoutes, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import LandingPage from './Component/LandingPage';
import ChurnPrediction from './Component/ChurnPrediction';
import FeedbackAnalysis from './Component/FeedbackAnalysis';
import FeedbackForm from './Component/FeedbackForm';
function App() {
  return (
    <BrowserRouter>       
        <div className="App">
          <header>
           <NavBar/>
          </header>
          <main>
          <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/v" element={<Home/>}/>
          <Route path="/churnPrediction" element={<ChurnPrediction/>}/>
          <Route path='/feedback' element={<FeedbackAnalysis/>}/>
          <Route path='/feedbackForm' element={<FeedbackForm/>}/>

          </Routes>
          </main>         
          </div>
  </BrowserRouter>
  );
}

export default App;
