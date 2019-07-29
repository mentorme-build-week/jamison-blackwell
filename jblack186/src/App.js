import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SearchBar from './components/Messenger/SearchBar';
import dummyData from './dummyData'
import MessageList from './components/Messenger/MessengerList'
import Messenger from './components/Messenger/Messenger'

import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor(){
    super()
    this.state= {
      filter: '',
       query: '',
       results: {},
       loading: false,
       users: dummyData,
      selectedChat: null,
      newChatForm: false,
      email: null,
      chats: []
}
  }

  selectedChat = (chatIndex) => {
    console.log('selected a chat')
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
    console.log(this.props)
  return (
    
    <div className="App">
    
      <Route path='/messenger' exact render={(props) => {
        return (<Messenger  users={this.state.users} history={props.history}
        newChatBtnFn={this.newChatBtnClicked}
        selectChatFn={this.selectChat}
        chats={this.state.chats}
        userEmail={this.state.email}
        selectedChatIndex={this.state.selectChat}
        />)
      }}/>
      <Login />
     
     
    </div>
 
  )
  }
}

export default App;
