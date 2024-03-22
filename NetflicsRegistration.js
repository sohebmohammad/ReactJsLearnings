export default function NetflicsRegistration(){
    return (
        <div className="container-fluid text-center mt-3 bg-dark p-3 text-white w-75">
            <p>Ready to watch? enter your Email to register or restart membership</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control"/>
                <button className="btn btn-danger">
                    get started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
     
        </div>
    );
}