import React,{ Component }  from 'react';
import firee from './firee';
import { Redirect } from "react-router-dom";


const Login = () => {
    return <Redirect to="/App" />;
};


class Login extends Component{
    constructor(props)
    {
        super(props);
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }

    login(e){
        e.preventDefault();
        firee.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    signup(e){
        e.preventDefault();
        fire.auth().creatUserWithEmailAndPassword(this.state.email,this.state.password).than((u) => {
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

handleChange(e){
     this.setState({
         [e.target.name] : e.target.value
     })
}

    render()
    {
        return(
            <div>
                <from>
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter a email"
                    onClick={this.handleChange}
                    value={this.state.email}
                    />
                    <input 
                    name="password"
                    type="password"
                    onClick={this.handleChange}
                    id="password"
                    placeholder="Enter a password"
                    value={this.state.password}
                    />
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                    
                </from>
            </div>
        )
    }
}
export default Login;