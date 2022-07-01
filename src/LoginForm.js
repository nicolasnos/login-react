import React from "react"
import Input from "./Input"
import SwitchButton from "./SwitchButton";
import './LoginForm.css';

const LogginForm = ()=> {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [answer, setAnswer] = React.useState('')
    
    function check(){
    let valor1 = false
    let valor2 = false


    if (email === "michael@gmail.com"){
        valor1 = true
    } 
    if (password === "perro123"){
        valor2 = true
    } 
    if (valor1 && valor2 === true){
        setAnswer( "Ok")
    }
    else {setAnswer ("hay algo mal, revisalo")}
    alert(answer)
    }

    return (
    <div className="LogginForm">
        
        <h2>LOGIN</h2>

        <Input
        type='email'
        placeholder= "USERNAME"
        onChange={(value) => setEmail(value)}/>

        <Input
        type='password'
        placeholder= "PASSWORD"
        onChange={(value) => setPassword(value)}/>

        <SwitchButton/>
        <h4>REMEMBER ME</h4>
        <h3>FORGOT PASSWORD</h3>
        <button
        onClick={()=> {check()}}>
        SIGN IN
        </button>

    </div>
    )
}

export default LogginForm