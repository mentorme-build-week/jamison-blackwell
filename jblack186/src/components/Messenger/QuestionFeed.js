import React from 'react'
import axios from 'axios';

export default class QuestionFeed extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            value: ''

        }
    } 
    
comments = () => {
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
    
onChangeHandler = (event) => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value })
}

    render(){
        console.log(this.props)
        return(
            <div>
                
                <form>
                    <input placeholder="Describe Issue" value={this.state.value} name='value' onChange={this.onChangeHandler} />
                    <button>Post</button>
                </form>
            </div>
        )
    }
}    
