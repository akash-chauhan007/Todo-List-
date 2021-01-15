import React, { Component } from 'react';
import firee from './firee';
import Login from './login';
import Home from './Home';



class Appp extends Component{
    constructor(props){
       super(props);
       this.state={
          user : {}
       }
    }
    componentDidMount()
    {
       this.authListener();
    }
    authListener(){
       firee.auth().onAuthStateChange((user) => {
          if(user)
          {
             this.setState({user})
          }
          else{
             this.setState({user : null})
          }
       })
 
    }
    render(){
       return (
          <div className="Appp">
             {this.state.user ? (<Home/>) : (<login/>)}
          </div>
       );
    }
 }
 
 export default Appp;
 
 
 
 