import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import $ from 'jquery'; // Import jQuery

export default function JQueryAjaxDemo() {
    const [userDetails, setUserDetails] = useState([]); // Use correct variable name userDetails

    useEffect(() => {
        $.ajax({
            url: "http://localhost:4002",
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data);
                setUserDetails(data);
            }
        })
    }, []); // Add empty dependency array to useEffect

    return (
        <div className="container">
            <h1>User Details</h1>
            <ol>
                {userDetails.map(user => // Fix variable name in map function
                    <li key={user.userName}>{user.userName}</li>
                )}
            </ol>
        </div>
    );
}
