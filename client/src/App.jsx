import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header, ProtectedRoute } from './components';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Header />
      <div className="h-[95vh]">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoute />} >
            <Route path='/' element={<Home />} />
            <Route path='/addpost' element={<AddPost />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
