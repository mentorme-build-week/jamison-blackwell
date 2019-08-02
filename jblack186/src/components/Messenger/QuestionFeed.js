import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class QuestionFeed extends React.Component{
constructor(props) {
        super(props)
        this.state= {
           questions: this.props.questions,
           value: '',
            items: ''

        }
    } 
    
   onChangeHandler = (event) => {
       event.preventDefault();
       this.setState({value : event.target.value})
   }

   inChangeHandler = (event) => {
    event.preventDefault();
    this.setState({items : event.target.value})
}



   addComments = (event) => {
       event.preventDefault();
       
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
        console.log(this.state.value)
        console.log("yo", this.state.items)
        const question = this.state.questions.filter(question => question.content.includes(this.state.value))
        const topic = this.state.questions.filter(question => question.topic.includes(this.state.items)) 
        return(
            <div>
                <p>{this.state.items}</p>
                 <input placeholder="Search" value={this.state.value} name='value' onChange={this.onChangeHandler}/>
                 <form>
                    <label htmlFor="topic">Select Topic:  </label>
                    <select className="topic" value={this.state.items} onChange={this.inChangeHandler}>
                    <option value=""> Pick </option>
                    <option value="Photography"  name='Photography'> Photography </option>
                    <option value="Programming"  name="Programming"> Programming </option>
                    <option value="Small Business"  name="Small Business"> Small Bussiness </option>
                    </select>
                    <button type="submit">Find</button>
                 </form>
{ this.state.value.length > 0 ? question.map(question => {
    return <Link to={`/messenger/${question.id}`}>
    <div key={question}>
    <p>{question.content}</p>
    </div>
    </Link>
 })
 : <p>Search for a question</p>  
                   }
                   
         { this.state.items.length > 0  ?  topic.map(question => {
         return <Link to={`/messenger/${question.id}`}>
         <div key={question}>
         <p>{question.content}</p> 
         </div>
           </Link> })
                    :        
         
                    <p>Searching...</p>
                                
                    
}
            </div>
        )
    }
}    
