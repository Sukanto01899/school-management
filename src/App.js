import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RequireAuth from './components/RequireAuth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Students from './pages/Students';
import Teachers from './pages/Teachers';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<RequireAuth><Home/></RequireAuth>}>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/teachers' element={<Teachers/>}></Route>
        <Route path='/department' element={<Dashboard/>}></Route>
        <Route path='/subject' element={<Dashboard/>}></Route>
        <Route path='/library' element={<Dashboard/>}></Route>
        <Route path='/blog' element={<Dashboard/>}></Route>
        <Route path='/setting' element={<Dashboard/>}></Route>
        <Route path='/more' element={<Dashboard/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
     </Routes>
     <ToastContainer/>
     
    </>
  );
}

export default App;
