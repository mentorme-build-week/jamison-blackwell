import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SearchBar from './components/Messenger/SearchBar';
import MessageList from './components/Messenger/MessengerList'
import Messenger from './components/Messenger/Messenger'
import Post from './components/Messenger/Post'
import axios from 'axios';

import { Route } from 'react-router-dom';
import QuestionFeed from './components/Messenger/QuestionFeed';


class App extends React.Component {
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

<button onClick={this.registerUser}>Register</button>
          <button onClick={this.login}>Login</button>
          
          <Route path='/messenger/:id' render={(props) => 
             <Messenger {...props} questions={this.state.questions} />
          } />
          <Route exact path='/questions' exact render={(props) => {
        return (<QuestionFeed {...props} questions={this.state.questions} />)
      }} />
     
     <Route path='/post' render={(props) => 
             <Post {...props} questions={this.state.questions} />
          } />
   
      </div>
  )
}

}

export default App;
