import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserRegistrationForm from './components/UserRegistrationForm';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserRegistrationForm/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
