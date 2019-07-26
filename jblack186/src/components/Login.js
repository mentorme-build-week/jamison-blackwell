import './Login.css'
import React, { Component } from 'react'

export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            isExpandedSignIn: false,
            isExpandedSignUp: false,
           
            
        }        

    
    }
    signInToggle = (e) => {
        e.preventDefault();
        this.setState({
            isExpandedSignIn: !this.state.isExpandedSignIn,
            isExpandedSignUp: false

        })

    }

    signUpToggle = (e) => {
        e.preventDefault();
        this.setState({
            isExpandedSignUp: !this.state.isExpandedSignUp,
            isExpandedSignIn: false
        })

        
    }

    

    render(){
        const { isExpandedSignIn } = this.state;
        const { isExpandedSignUp } = this.state;
        return(
            <div className='login'>
                
                <div className={` ${isExpandedSignUp ? 'close_panel' : 'sign_in'}`}>
                <h3 className={`${isExpandedSignIn ? 'close_panel': 'member'}`}>Already a member</h3>
                <h3 className={`${isExpandedSignIn ? 'member': 'close_panel'}`}>Not a member</h3>

                    <button className={`${isExpandedSignIn ? 'close_panel' : 'button'}`} onClick={(e) => this.signInToggle(e)}>Sign In</button>
                    <button className={`${isExpandedSignIn ? 'button' : 'close_panel'}`} onClick={(e) => this.signUpToggle(e)}>Sign Up</button>

                    <form className={` ${isExpandedSignIn ? 'sign_in' : 'close_panel'}`}> 
                        <h4>Enter Username and Password</h4>           
                        <input placeholder='username' />
                        <input placeholder='password' />
                        <button>Sign In</button>
                    </form>
                </div>
                
                
                <form>  
                   
                <div className={` ${isExpandedSignIn ? 'close_panel' : 'create_account'}`}>
                <h3  className={` ${isExpandedSignUp ? 'close_panel' : 'create_account'}`}>Create Account</h3>
                <h3 className={`${isExpandedSignUp ? 'create_account': 'close_panel'}`}>Already a member</h3>

                    <button className={`${isExpandedSignUp ? 'close_panel' : 'button'}`} onClick={(e) => this.signUpToggle(e)}>Sign Up</button>
                    <button className={`${isExpandedSignUp ? 'button' : 'close_panel'}`} onClick={(e) => this.signInToggle(e)}>Sign In</button>
                    <form className={` ${isExpandedSignUp ? 'create_account' : 'close_panel'}`}>
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




