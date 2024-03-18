import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CrudPage from './crud/CrudPage';
import { Login } from './pages/auth/Login';
import Layout from './pages/Layout';
import './App.css';
import './assets/css/style.css'
import { useSelector } from "react-redux"
import PageNotFound from './component/PageNotFound';
import ProfilePage from './pages/ProfilePage';
import ContentEditor from './pages/ContentEditor';
import Timer from './pages/Timer';
import HomePage from './pages/HomePage';


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/profilePage" element={token ? <ProfilePage /> : <Navigate to="/login" />} />
            <Route path="/homepage" element={token ? <HomePage /> : <Navigate to="/login" />} />
            <Route path='/contentEditor' element={<ContentEditor />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/crudPage' element={<CrudPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
