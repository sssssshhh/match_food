import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home.js';
import Wine1 from 'pages/wine1.js';
import Wine2 from 'pages/wine2.js';
import Wine3 from 'pages/wine3.js';
import Wine4 from 'pages/wine4.js';
import Wine5 from 'pages/wine5.js';
import Wine6 from 'pages/wine6.js';
import '../wine.css';
import Searching from 'pages/Searching.js';

const AppRouter = () => {
    return (<Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/wine1" element={<Wine1 />} />
            <Route exact path="/wine2" element={<Wine2 />} />
            <Route exact path="/wine3" element={<Wine3 />} />
            <Route exact path="/wine4" element={<Wine4 />} />
            <Route exact path="/wine5" element={<Wine5 />} />
            <Route exact path="/wine6" element={<Wine6 />} />
            <Route exact path="/searching:keyword" element={<Searching />} />
        </Routes>
    </Router>)
}

export default AppRouter;