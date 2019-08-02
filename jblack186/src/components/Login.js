import './Login.css'
import React, { Component } from 'react'
import dummyData from '../dummyData';
import axios from 'axios'

export default class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            questions: []
           
            
        }        
    }

registerUser = (e) => {
    e.preventDefault();
    axios
    .post('https://mentor-me-app-be.herokuapp.com/api/users/register', {
        "firstname": "Jagfmison",
        "lastname": "Blacgkfwell",
        "email": "blackwellj1040@gmail.com",
        "password": "beendoingthisforamin"
    })
    .then(res => {
        console.log(res)
    })
}

login = (e) => {
    e.preventDefault();
    axios 
    .post("https://mentor-me-app-be.herokuapp.com/api/users/login", {
        email: "blackwellj1040@gmail.com",
        password: "beendoingthisforamin"

    })
    .then(response  => {
        console.log(response);
        const token = response.data.token;
        localStorage.setItem('token', token);
    })
}

 componentDidMount() {
    // e.preventDefault();
    const token = localStorage.getItem("token");
    axios
        .get("https://mentor-me-app-be.herokuapp.com/api/questions", {
        headers: {
            Authorization: token
        }
        })
    
        .then(response => {
            console.log(response.data);
            this.setState({questions: [...this.state.questions, ...response.data ]})

        })
}

render(){
    console.log("WE IN THE STATE:", this.state.questions)
        return( 
                    <div>


                {/* <button onClick={this.getUser}>Users</button> */}
                
            </div>
        )
    }




}
