import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Registration from './pages/Registration'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Welcomepage from './pages/welcome'
import Defaultconfig from './pages/Defaultconfig';
import Config from './pages/Config';
import Invoice from './pages/Invoice';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Image from './component/Image';

//import configure from "./pages/configure"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" exact element ={<Home />}></Route>
      <Route path ="/about" exact element ={<About />}></Route>
      <Route path ="/register" exact element ={<Registration />}></Route>
      <Route path ="/contact" exact element ={<Contact />}></Route>
      <Route path ="/feedback" exact element ={<Feedback />}></Route>
      <Route path ="/welcome" exact element ={<Welcomepage />}></Route>
      <Route path ="/login" exact element ={<Login />}></Route>
      <Route path ="/invoice" exact element ={<Invoice />}></Route>
      <Route path ="/defaultconfig/:model_id" exact element ={<Defaultconfig />}></Route>
      <Route path ="/configure" exact element ={<Config />}></Route>
      <Route path ="/logout" exact element ={<Logout />}></Route>
      <Route path ="/image" exact element ={<Image />}></Route>




    </Routes>
    </BrowserRouter>
    </>
 
  )
}

export default App;
