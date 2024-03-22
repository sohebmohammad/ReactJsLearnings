import React, { useState } from "react";

export default function ClassBinding() {
    const [theme, setTheme] = useState("bg-light");

    function changeTheme(e) {
        if (e.target.checked) {
            setTheme("bg-danger");
        } else {
            setTheme("bg-light");
        }
    }

    return (
        <div className={theme}>
            <div className="form p-2 m-4">
                <p className="text-start">Login Here!</p>
                <div className="form-check form-switch">
                    <input
                        onChange={changeTheme}
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Select Theme
                    </label>
                </div>
                <br />
                <label>name</label>
                <br />
                <input />
                <br />
                <label>password</label>
                <br />
                <input />
            </div>
        </div>
    );
}
