import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import CrudPage from './crud/CrudPage';
import { Login } from './pages/auth/Login';
import Layout from './pages/Layout';
import './App.css';
import './assets/css/style.css'
import {useSelector} from "react-redux"
import PageNotFound from './component/PageNotFound';
import ProfilePage from './pages/ProfilePage';


function App() {
  const token=localStorage.getItem('token')
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route  path="/" element={<Layout />}>
          <Route path="*" element = {<PageNotFound/>}/>
          <Route path='/crudPage' element={token? <CrudPage />:<Navigate to="/login"/>} />
          <Route path="/profilePage" element={token? <ProfilePage/>:<Navigate to="/login"/>}/>
         </Route>
         <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
