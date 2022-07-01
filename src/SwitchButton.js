import React from "react";
import './SwitchButton.css'

const SwitchButton = () => {
    return(
        <label className="switchBtn">
            <input type="checkbox"/>
            <span className="slide round"/>
        </label>
    )
}

export default SwitchButton