import React from "react";
import './LoginForm.css'

const Input = (props) => {
    return (
        <input
        type = {props.type}
        placeholder = {props.placeholder}
        onChange={(event) => props.onChange(event.target.value)}
        />
    )
}

export default Input