import React, { useState, useContext } from 'react';

const UserDetailsContext = React.createContext(null);

export default function ContextHookDemo() {
    const [UserDetails, setUserDetails] = useState({
        Name: '',
        Email: ''
    });

    function handleEmail(e) {
        setUserDetails({
            ...UserDetails,
            Email: e.target.value
        });
    }

    function handleName(e) {
        setUserDetails({
            ...UserDetails,
            Name: e.target.value
        });
    }

    return (
        <div className="container">
            <UserDetailsContext.Provider value={UserDetails}>
                <h1>Index page</h1>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input onChange={handleName} type='text'></input>
                    </dd>
                    <dt>Email</dt>
                    <dd>
                        <input onChange={handleEmail} type='email'></input>
                    </dd>
                </dl>
                <NavBar />
                <Home />
            </UserDetailsContext.Provider>
        </div>
    );
}

function NavBar() {
    const UserDetails = useContext(UserDetailsContext);
    return (
        <div className='container bg-primary m-4 p-10'>
            <span>Navbar </span><span><p className='text-end'>{UserDetails.Name} </p></span>
        </div>
    );
}

function Home() {
    const UserDetails = useContext(UserDetailsContext);
    return (
        <div className='container bg-danger p-2'>
            <span>Home </span><p className='text-end'>{UserDetails.Email}</p>
        </div>
    );
}
