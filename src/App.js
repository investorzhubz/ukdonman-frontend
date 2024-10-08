import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Pages/Create';
import GetLicense from './Pages/GetLicense';
import License from './Pages/License';


function App() {
  return (
    <div  className="App">
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/licence-number' element={<GetLicense />} />
        <Route path='/driving-record/:id' element={<License />} />
      </Routes>


    </div>
  );
}

export default App;
