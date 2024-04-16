import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Home.jsx/Home';
import About from './About Us/About';
import Footer from './Footer/Footer';
import Explore from './Explore/Explore';
import Mens from './Mens/Mens';
import Womens from './Womens/Womens';
import Kids from './Kids/Kids';

// import Demo from './propsinReact/Demo';
// import Demo1 from './propsinReact/Demo1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Mens' element={<Mens/>} />
            <Route path='/Womens' element={<Womens/>} />
            <Route path='/Kids' element={<Kids/>} />
            <Route path='/Explore' element={<Explore/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    
    </> 
  );
}

export default App;
