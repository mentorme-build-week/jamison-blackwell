import './Login.css'
import React, { Component } from 'react'
import dummyData from '../dummyData';
import axios from 'axios'

export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            isExpandedSignIn: false,
            isExpandedSignUp: false,
            username: '',
            password: '',
            users: dummyData,
            loggedInStatus: 'Not_Logged_In'
           
            
        }        
    }

componentDidMount(){
    axios
    .post('https://mentor-me-app-be.herokuapp.com//api/questions', {
        user_id: 1,
        content:'test',
        topic: 'testing',
        imageUrl: 'checking'
    })
    .then(res => {
        console.log(res.config.data)
    })
}


    changeHandler = (event) => {
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value})
    }

        checkLoggedInStatus = (e) => {
            e.preventDefault();
            dummyData.includes(this.state.username) ? console.log('yes') : console.log('no')
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
        console.log(this.state.users)
        const { isExpandedSignIn } = this.state;
        const { isExpandedSignUp } = this.state;
        return(
            <div className='login'>
                
                <div className={` ${isExpandedSignUp ? 'close_panel' : 'sign_in'}`}>
                <h3 className={`${isExpandedSignIn ? 'close_panel': 'member'}`}>Already a member</h3>
                <h3 className={`${isExpandedSignIn ? 'member': 'close_panel'}`}>Not a member</h3>

                    <button className={`${isExpandedSignIn ? 'close_panel' : 'button'}`} onClick={(e) => this.signInToggle(e)}>Sign In</button>
                    <button className={`${isExpandedSignIn ? 'button' : 'close_panel'}`} onClick={(e) => this.signUpToggle(e)}>Sign Up</button>

                    <form onSubmit={this.checkLoggedInStatus} className={` ${isExpandedSignIn ? 'sign_in' : 'close_panel'}`}> 
                        <h4>Enter Username and Password</h4>           
                        <input value={this.state.username} onChange={this.changeHandler} name='username' placeholder='username' />
                        <input value={this.state.password} onChange={this.changeHandler} name='password' placeholder='password' />
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




