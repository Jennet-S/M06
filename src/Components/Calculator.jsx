import React, { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [op, setOp] = useState("+");
    const [result, setResult] = useState(0);

    const calculate = () => {
        switch (op) {
            case "+":
                setResult(num1 + num2);
                break;
                case "-":
                setResult(num1 - num2);
                break;
                case "*":
                setResult(num1 * num2);
                break;
                case "/":
                setResult(num1 / num2);
                break;
        }
    } 

    return (
        <div className="calculator-container">
            <input className="inputnum" type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))}/>
            <select onChange={(e) => setOp(e.target.value)}>
                <option value="+">&#43;</option>
                <option value="-">&#8722;</option>
                <option value="*">&#215;</option>
                <option value="/">&#247;</option>

            </select>
            <input className="inputnum" type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))}/>
            <button onClick={calculate}>&#61;</button>
            <div className="result">{result}</div>
        </div>
    )
}

export default Calculator;