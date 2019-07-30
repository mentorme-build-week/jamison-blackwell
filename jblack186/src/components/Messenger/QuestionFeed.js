import React from 'react'
import axios from 'axios';

export default class QuestionFeed extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            value: '',
            user_id: 5,
            content: '',
            topic: '',
            imageUrl: '' 

        }
    } 
 componentDidMount(){
     axios
        .get('https://mentor-me-app-be.herokuapp.com//api/questions')
        .then(res => {
            console.log(res)
        })
 }   
addComments = (e) => {
    e.preventDefault();
    const user = {
        subject:2,
    email: "blackwellj@gmail.com",
    roles:"student"
    }
    axios
    .post('https://mentor-me-app-be.herokuapp.com/api/questions', this.state)
    .then(response => {
        console.log(response)
        
    })
}
    
onChangeHandler = (event) => {
    event.preventDefault();
    this.setState({value : event.target.value })
}

    render(){
        console.log(this.props)
        return(
            <div>
                
                <form onSubmit={this.addComments}>
                    <input placeholder="Describe Issue" value={this.state.value} name='value' onChange={this.onChangeHandler} />
                    <button type='submit'>Post</button>
                </form>
            </div>
        )
    }
}    
