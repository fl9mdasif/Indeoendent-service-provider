
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Common/Header/Header';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Common/Footer/Footer';
import AboutMe from './pages/About/AboutMe';
import Registration from './pages/Login/Registration/Registration';

import NotFound404 from './pages/404ErrPage/NotFound404';
import CheckOut from './pages/CheckOut/CheckOut';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Blog from './pages/Home/Blog/Blog';
import ThankYou from './pages/ThankYou/ThankYou';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="about" element={<AboutMe />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="thankyou" element={<ThankYou />}></Route>
        <Route path="checkout" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
