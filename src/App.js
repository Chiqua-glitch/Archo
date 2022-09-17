import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Architecture from "./pages/Architecture";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import PostDetails from "./pages/PostDetails";
import InteriorDesign from "./pages/InteriorDesign";
import Error from "./pages/Error";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/architecture' element={<Architecture />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/post-details' element={<PostDetails />}></Route>
                <Route path='/interior-design' element={<InteriorDesign />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;