import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SearchBar from './components/Messenger/SearchBar';
import dummyData from './dummyData'
import MessageList from './components/Messenger/MessengerList'
import Messenger from './components/Messenger/Messenger'

import { Route } from 'react-router-dom';
import QuestionFeed from './components/Messenger/QuestionFeed';


class App extends React.Component {
  constructor(){
    super()
    this.state= {
     
}
  }

  selectedChat = (chatIndex) => {
    
  }

  // newChatBtnClicked = () => {
  //   console.log('new chat butn clicked', chatIndex)
  //   this.setState({ newChatForm: true, selectChat: null })

  //   this.componentDidMount = () => {
  //     if(!user)
  //       this.props.history.push('/login');
  //         else {
  //           //create new chat 
  //         }
  //   }
  // }

  

  render(){
   
  return (
    
    <div className="App">
    

      <Route path='/questions' exact render={(props) => {
        return (<QuestionFeed history={props.history} />)
      }} />
     
     
    </div>
 
  )
  }
}

export default App;
