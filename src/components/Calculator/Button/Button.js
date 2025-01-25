import React from "react";
import './style.css';

const Button = (props) => {
    let colSize;
    let buttonSymbol;
    let doaction;

    // Determine the button's symbol
    switch (props.button) {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
            buttonSymbol = `${props.button}`;
            break;
        case 10: buttonSymbol = "="; break;
        case 11: buttonSymbol = "+"; break;
        case 12: buttonSymbol = "-"; break;
        case 13: buttonSymbol = "×"; break;
        case 14: buttonSymbol = "÷"; break;
        case 15: buttonSymbol = "C"; break;
        case 16: buttonSymbol = "AC"; break;
        default: buttonSymbol = "undefined";
    }

    // Set column size
    switch (props.colSize) {
        case 1: colSize = 22; break;
        case 2: colSize = 47; break;
        case 3: colSize = 74; break;
        case 4: colSize = 100; break;
        default: colSize = 30;
    }

    // Define button actions
    switch (props.button) {
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
        case 11: case 12: case 13: case 14:
            doaction = () => {
                props.changehtml((prevHtml) => `${prevHtml}${buttonSymbol}`);
            };
            break;
        case 10: // "=" button
            doaction = () => {
                props.changehtml((prevHtml) => {
                    try {
                        return String(eval(prevHtml.replace(/[^0-9\(\)\+\-\*\/\.×÷]/g, "").replace(/×/g, "*").replace(/÷/g, "/")));
                    } catch {
                        return "Error";
                    }
                });
            };
            break;
        case 15: // "C" button
            doaction = () => {
                props.changehtml((prevHtml) => prevHtml.slice(0, -1));
            };
            break;
        case 16: // "AC" button
            doaction = () => {
                props.changehtml(() => "");
            };
            break;
        default:
            console.error("Button function undefined");
    }

    return (
        <div onClick={doaction} className="calc_btn" style={{ width: `${colSize}%` }}>
            {buttonSymbol}
        </div>
    );
};

export default Button;
