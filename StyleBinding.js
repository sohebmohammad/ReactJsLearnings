import React, { useState } from "react";
export default function StyleBinding() {
    const [theme, setTheme] = useState();
    function changeTheme(e){
        if(e.target.checked){
            setTheme({
                backgroundColor: "#000",
                color: "#fff",
                width:'300px',
                marginLeft:'500px'
            })
        }
        else{
            setTheme({
                backgroundColor: "#fff",
                color: "#000"
            })
        }
    }
    return (
        <div className="form p-2 m-4" style={theme}>
            <p class="text-start">Login Here!</p>
            <div class="form-check form-switch">
                <input onChange={changeTheme} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Select Theme</label>
            </div>
            <br></br>
            <label>name</label>
            <br></br>
            <input></input>
            <br></br>
            <lable>password</lable>
            <br></br>
            <input></input>
        </div>
    )
}