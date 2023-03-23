import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Data from './components/Data';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/data' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
