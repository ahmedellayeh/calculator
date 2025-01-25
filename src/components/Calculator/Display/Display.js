import React from "react";
import './style.css'
const Display = (props) => {
    return (
        <div className="display">{props.innerhtml}</div>
    )
}

export default Display;