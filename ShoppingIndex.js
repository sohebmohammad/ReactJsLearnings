import React from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom"
import FootWare from "./FootWare";
import MensWare from "./MensWare";
import LadiesWare from "./LadiesWare";

export default function ShoppingIndex(){
    return (
    <Router>
        <ul>
            <li> <Link to="/FootWare">FootWare</Link></li>
            <li ><Link to="/MensWare">MensWare</Link></li>
            <li ><Link to="/LadiesWare">LadiesWare</Link></li>
        </ul>
        <hr>
        </hr>
        <Routes>
            <Route path="/FootWare" element={<FootWare/>}/>
            <Route path="/MensWare" element={<MensWare/>}/>
            <Route path="/LadiesWare" element={<LadiesWare/>}/>
        </Routes>
    </Router>

    )
}