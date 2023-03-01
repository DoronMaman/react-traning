import './App.css';
import WitdhWindow from './witdth-window';
import { Route, Routes } from 'react-router-dom';
import LoadData from './load-data';
import NoFound from './no-found';
import NavBar from './nav-bar';
import InputRef from './input-ref';

function App() {
  return (
    <div className="App">
      <NavBar />
       <Routes>
          <Route path="/" element={<WitdhWindow />} />
          <Route path="/products" element={<LoadData />} />
          <Route path="/input-ref" element={<InputRef />} />
          <Route path="*" element={<NoFound />} />
       </Routes>   
        </div>
  );
}

export default App;
