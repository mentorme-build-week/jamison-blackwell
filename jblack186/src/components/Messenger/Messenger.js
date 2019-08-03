import './Messenger.css'
import React, {Component} from 'react'
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button'
import axios from 'axios';

export default class Messenger extends React.Component{
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


    delete = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        
        axios
        .delete(`https://mentor-me-app-be.herokuapp.com/api/questions/${this.props.match.params.id}`, {
            headers: {
                Authorization: token
            }
            })
        .then(response => {
            console.log(response)
        })
    
    }
    

render() {
    const item = this.props.questions.find( i => String(i.id) === this.props.match.params.id);
console.log(this.state.value)
        return (
            <div>
               <h2>{item.content}</h2>
          <button onClick={this.delete}>delete</button>
            </div>
    )
        }

}