import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CrudPage from './crud/CrudPage';
import { Login } from './pages/auth/Login';
import Layout from './pages/Layout';
import './App.css';
import './assets/css/style.css'
import PageNotFound from './component/PageNotFound';
import ProfilePage from './pages/ProfilePage';
import ContentEditor from './pages/ContentEditor';
import Timer from './pages/Timer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import {useSelector} from "react-redux"

function App() {

  const activeTheme=useSelector((state)=>state.theme.activeTheme)
  console.log(activeTheme,"activeTheme")
  const token = localStorage.getItem('token')
  return (

    <div className={`App theme-${activeTheme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/profilePage" element={token ? <ProfilePage /> : <Navigate to="/login" />} />
            <Route path="/homepage" element={token ? <HomePage /> : <Navigate to="/login" />} />
            <Route path='/contentEditor' element={<ContentEditor />} />
            <Route path="/about" element={token ? <About />:<Navigate to="/login"/>} />
            <Route path="/contact" element={token ? <Contact />:<Navigate to="/login"/>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/crudPage' element={<CrudPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
