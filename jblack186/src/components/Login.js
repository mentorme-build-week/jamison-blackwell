import './Login.css'
import React, { Component } from 'react'

export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
        }        
    
    }
signInToggle = (e) => {
console.log('i work')
}


    


    render(){
        return(
            <div className='button'>
                <div>
                    <h3>Already a member</h3>
                    <button className='sign_in' onClick={this.signInToggle}>Sign In</button>
                </div>
                <div>
                    <form className='member_sign_in'>            
                        <input placeholder='username' />
                        <input placeholder='password' />
                        <button>Sign In</button>
                    </form>
                </div>
                <div>
                    <h3>Like what you see Sign Up</h3>
                    <button className='sign_up'>Sign Up</button>
                 </div>
                <form>  
                   
                <div className='create_account'>
                    <h4>Create Account</h4>
                    <input placeholder='name'/>
                    <input placeholder='email'/>
                    <input placeholder='password'/>
                    <button>Sign Up</button>
                </div>    
                </form>  
            </div>
        )
    }
}




