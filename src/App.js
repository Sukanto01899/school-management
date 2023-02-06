import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import RequireAuth from './components/RequireAuth';
import AddStudent from './pages/adding-page/AddStudent';
import UpdateStudent from './pages/adding-page/UpdateStudent';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard';
import Departments from './pages/Departments';
import Home from './pages/Home';
import Libraries from './pages/Libraries';
import Login from './pages/Login';
import More from './pages/More';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Students from './pages/Students';
import Subjects from './pages/Subjects';
import Teachers from './pages/Teachers';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<RequireAuth><Home/></RequireAuth>}>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/add-student' element={<AddStudent/>}></Route>
        <Route path='/update-student/:studentid' element={<UpdateStudent/>}></Route>
        <Route path='/teachers' element={<Teachers/>}></Route>
        <Route path='/department' element={<Departments/>}></Route>
        <Route path='/subject' element={<Subjects/>}></Route>
        <Route path='/library' element={<Libraries/>}></Route>
        <Route path='/blog' element={<Blogs/>}></Route>
        <Route path='/setting' element={<Settings/>}></Route>
        <Route path='/more' element={<More/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
     </Routes>
     <ToastContainer/>
     
    </>
  );
}

export default App;
