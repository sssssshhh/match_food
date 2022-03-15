import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home.js';
import Lemon from 'pages/lemon.js';
import Wine from 'pages/wine.js';
import Icecream from 'pages/icecream';
import Martini from 'pages/martini.js';
import Fish from 'pages/fish.js';
import Cheese from 'pages/cheese.js';
import '../wine.css';
import Searching from 'pages/searching.js';

const AppRouter = () => {
    return (<Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/lemon" element={<Lemon />} />
            <Route exact path="/wine" element={<Wine />} />
            <Route exact path="/icecream" element={<Icecream />} />
            <Route exact path="/martini" element={<Martini />} />
            <Route exact path="/fish" element={<Fish />} />
            <Route exact path="/cheese" element={<Cheese />} />
            <Route exact path="/searching:keyword" element={<Searching />} />
        </Routes>
    </Router>)
}

export default AppRouter;