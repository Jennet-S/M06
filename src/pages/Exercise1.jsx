import { useState } from "react";
import Greeting from "../Components/Greeting";

function Exercise1() {
    const [name, setName] = useState("");

    const nameChange = (e) => {
        const inputValue = e.target.value;
    if (inputValue.length <= 30) {
        setName(inputValue);
    }
};

    return(
        <div className="exercise1">
            <h1>Exercise 1</h1>
            <input type="text" placeholder="Input name here" value={name} onChange={nameChange}/>
            <Greeting name={name}></Greeting>
            <img src="https://img.freepik.com/premium-vector/cartoon-earth-with-face-cloud-top_835197-6050.jpg" alt="globe cartoon" />
        </div>
    )
}


export default Exercise1;