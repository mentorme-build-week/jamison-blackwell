import './Messenger.css'
import React, {Component} from 'react'
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button'
import axios from 'axios';

export default class Post extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user_id: '',
            content: '',
            topic: '',
            imageUrl: null
        }
        console.log(this.props)
    }


changeHandler = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
}

submitHandler = (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");

    axios
        .post('https://mentor-me-app-be.herokuapp.com/api/questions', this.state, {
            headers: {
                Authorization: token
            }
            })
        .then(response => {
            console.log(response)
        })
}


render() {
    console.log(this.props)

        return (
            <div>
              
           <form onSubmit={this.submitHandler} > 
            <input placeholder='user_id' value={this.state.user_id} onChange={this.changeHandler} name='user_id'/>
            <input placeholder='content' value={this.state.content} onChange={this.changeHandler} name='content' />
            <input placeholder='topic' value={this.state.topic} onChange={this.changeHandler} name='topic' />
            
            <button type="submit">Post</button>
           </form>   
            </div>
    )
        }

}