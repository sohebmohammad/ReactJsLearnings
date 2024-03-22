import { useState } from "react";
import CapchaVerify from "./Hooks/CapchaVerify";

export default function UseCustomCapchaInLogin() {
    const [UserDetails, setUserDetails] = useState({
        Email: '',
        Password: ''
    });
    
    const { captcha } = CapchaVerify(); // Destructure the result from CapchaVerify

    return (
        <>
            <div className="container">
                <h2>login here</h2>
                <dl>
                    <dt>Email</dt>
                    <dd>
                        <input
                            type="text"
                            value={UserDetails.Email}
                            onChange={(e) => setUserDetails({ ...UserDetails, Email: e.target.value })}
                        />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input
                            type="text"
                            value={UserDetails.Password}
                            onChange={(e) => setUserDetails({ ...UserDetails, Password: e.target.value })}
                        />
                    </dd>
                    <dt>verify Capcha</dt>
                    <dd>{captcha}</dd>
                    <dd>
                        <input placeholder="enter the captcha"></input>
                    </dd>
                </dl>
            </div>
        </>
    );
}
