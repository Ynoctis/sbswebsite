import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration';
import LoginPage from './pages/LoginPage';
import MemberPage from './pages/MemberPage';
import NonMemberPage from './pages/NonMemberPage';
import HomePage from './pages/HomePage';
import PhotosPage from './pages/PhotosPage';
import LocationPage from './pages/LocationPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/memberlist' element={<MemberPage/>}></Route>
        <Route path='/nonmember' element={<NonMemberPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/photos' element={<PhotosPage/>}></Route>
        <Route path='/history' element={<HistoryPage/>}></Route>
        <Route path='/location' element={<LocationPage/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
