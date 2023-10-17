import '../App.css'

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Exercise1 from "../pages/Exercise1";
import Exercise2 from "../pages/Exercise2";
import Exercise3 from "../pages/Exercise3";
import Exercise6 from "../pages/Exercise6";
import PageNotFound from "../pages/PageNotFound";


function AppRoutes(props) {

    return (
        <Routes>
        <Route index element={<Home {...props}/>} />

        <Route path="exercise1" element={<Exercise1 />} />
        <Route path="exercise2" element={<Exercise2 />} />
        <Route path="exercise3" element={<Exercise3 />} />
        <Route path="exercise6" element={<Exercise6 />} />

        <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;