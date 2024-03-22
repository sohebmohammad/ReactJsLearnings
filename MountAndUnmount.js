import { react, Component } from 'react';
class Success extends Component {
    componentDidMount(){
        alert('Success component is loaded');
    }
    componentWillUnmount(){
        alert('Success component is unmounted');
    }
    render() {
        return (
            <div className="container">
                <h1>Success</h1>
            </div>
        )
    }
}
class Error extends Component {
    componentDidMount(){
        alert('Error component is loaded');
    }
    componentWillUnmount(){
        alert('Error component is unmounted');
    }
    render() {
        return (
            <div className="container">
                <h1>Error</h1>
            </div>
        )
    }
}
export default class MountAndUnmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserDetails: {
                Name: 'shoju',
                Password: 'Shoju@786'
            },
            PresentDetails: {
                Name: '',
                Password: ''
            },
            result: ''

        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleName(e) {
        this.setState({
            PresentDetails: {
                Name: e.target.value,
                Password: this.state.PresentDetails.Password
            }
        });
    }
    handlePassword(e) {
        this.setState({
            PresentDetails: {
                Name: this.state.PresentDetails.Name,
                Password: e.target.value
            }
        });
    }
    handleLogin(e) {
        if (this.state.PresentDetails.Name === this.state.UserDetails.Name && this.state.PresentDetails.Password === this.state.UserDetails.Password) {
            alert('ok');
            this.setState({ result: <Success /> });
        } else {
            this.setState({ result: <Error /> });
        }
    }
    
        render(){
            return (
                <div className="container">
                    <dl>
                        <dt>Name</dt>
                        <dd><input onChange={this.handleName} type="text"></input></dd>
                        <dt>Password</dt>
                        <dd><input onChange={this.handlePassword} type="text"></input></dd>
                        <dt><button onClick={this.handleLogin} className='btn btn-danger'>login</button></dt>
                    </dl>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            )
        }
    }
