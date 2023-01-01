import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainComponant from './MainComponant';
import MainComponantProjects from './MainComponantProjects';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<MainComponant />} />
          <Route path='/Projects' element={<MainComponantProjects/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
