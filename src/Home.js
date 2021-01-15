import React,{ Component }  from 'react';
import App from './App'

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
          
        }
    }

logout(){
    firee.auth().signOut();
}

    render()
    {
        return(
            <div>
                <h1>you are logged</h1>

            <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;