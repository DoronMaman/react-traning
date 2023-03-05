import './App.css';
import WitdhWindow from './useEffect/witdth-window';
import { Route, Routes } from 'react-router-dom';
import LoadData from './useEffect/load-data';
import NoFound from './no-found';
import NavBar from './nav-bar';
import InputRef from './useRef/input-ref';
import ItemList from './context/item-list';

function App() {
  return (
    <div className="App">
      <NavBar />
       <Routes>
          <Route path="/" element={<WitdhWindow />} />
          <Route path="/products" element={<LoadData />} />
          <Route path="/input-ref" element={<InputRef />} />
          <Route path="/item-context" element={<ItemList />} />
          <Route path="*" element={<NoFound />} />
       </Routes>   
        </div>
  );
}

export default App;
