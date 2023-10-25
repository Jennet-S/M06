import BigCats from "../Components/BigCats";
import { useNavigate } from "react-router-dom";

function Exercise2() {
    const navigate = useNavigate();
    return(
        <>
        <div className="exercise2">
            <h1>Baby Cats</h1>        
            <button onClick={() => navigate('/CatsForm')} className="CatsForm">Form</button>
            <BigCats/>
        </div>
    </>
    )
}

export default Exercise2;