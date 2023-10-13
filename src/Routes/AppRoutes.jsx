import { Route, Routes } from "react-router-dom";
import App from "../App";

function AppRoutes(props) {

    return (
        <Routes>
        <Route index element={<Homepage {...props}/>} />



        <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;