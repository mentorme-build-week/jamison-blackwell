import './Messenger.css'
import React from 'react'
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button'
import axios from 'axios';

export default class Messenger extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: []
        }
    }

componentDidMount() {
   this.message(this.props.match.params.id)
}

message = (id) => {
    const token = localStorage.getItem("token");

    axios.get('https://mentor-me-app-be.herokuapp.com/api/questions', {
        headers: {
            Authorization: token
        }
        }) 
    .then(response => {
        console.log(response.data)
        this.setState(() => ({ message: response }))
    })
}
    newChat = () => {
       
    }

    selectChat = (index) => {
      
    }

    render() {
       
       console.log(this.props.questions)
        console.log(this.state.message)
       
    
        return (
            <div>
             {/* {this.state.message.map(item => {
                 return <p>{item.content}</p>
             })}
                 */}
            </div>
        )
    }
}