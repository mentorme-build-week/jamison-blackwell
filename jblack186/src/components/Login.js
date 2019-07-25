import './Login.css'
import React, { Component } from 'react'

export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            isExpandedSignIn: false,
            isExpandedSignUp: false

            
        }        

    
    }
signInToggle = (e) => {
    e.preventDefault();
    this.setState({
        isExpandedSignIn: !this.state.isExpandedSignIn

    })

}

signUpToggle = (e) => {
    e.preventDefault();
    this.setState({
        isExpandedSignUp: !this.state.isExpandedSignUp
        
    })

    
}

    render(){
        const { isExpandedSignIn } = this.state;
        const { isExpandedSignUp } = this.state;
        return(
            <div className='login'>
                
                <div className={` ${isExpandedSignUp ? 'close_panel' : 'sign_in'}`}>
                <h3 className={`${isExpandedSignIn ? 'close_panel': 'member'}`}>Already a member</h3>
                    <button className='sign_in' onClick={(e) => this.signInToggle(e)}>Sign In</button>

                    <form className={` ${isExpandedSignIn ? 'sign_in' : 'close_panel'}`}> 
                        <h4>Enter Username and Password</h4>           
                        <input placeholder='username' />
                        <input placeholder='password' />
                        <button>Sign In</button>
                    </form>
                </div>
                
                
                <form>  
                   
                <div className={` ${isExpandedSignIn ? 'close_panel' : 'create_account'}`}>
                <h3>Create Account</h3>
                    <button className='sign_up' onClick={(e) => this.signUpToggle(e)}>Sign Up</button>

                    <form  className={` ${isExpandedSignUp ? 'create_account' : 'close_panel'}`}>
                        <h4>Create Account</h4>
                        <input placeholder='name'/>
                        <input placeholder='email'/>
                        <input placeholder='password'/>
                        <button>Join</button>
                    </form>
                </div>    
                </form>  
            </div>
        )
    }
}




