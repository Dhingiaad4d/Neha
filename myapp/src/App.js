
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import CrudPage from './crud/CrudPage';
import Header from './pages/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
         <Route path='/crudPage' element={<CrudPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
