import React from "react";
import Display from "./Display/Display";
import Button from "./Button/Button";
import './style.css';

const Calculator = () => {
    const [displayhtml,changehtml] = React.useState("")
    return (
       <div className="calculator">
            <Display innerhtml={displayhtml}/>
            <div className="calculator_buttons">
                <Button button={9} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={8} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={7} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={6} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={5} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={4} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={3} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={2} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={1} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={11} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={12} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={13} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={14} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={15} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={16} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
                <Button button={10} colSize={1} innerhtml={displayhtml} changehtml={changehtml}/>
            </div>
       </div> 
    )
}

export default Calculator;