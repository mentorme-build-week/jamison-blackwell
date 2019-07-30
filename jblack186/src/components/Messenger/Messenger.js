import './Messenger.css'
import React from 'react'
import SearchBar from './SearchBar';

export default class Messenger extends React.Component {
    constructor(props){
        super(props)
    }

    newChat = () => {
       
    }

    selectChat = (index) => {
      
    }

    render() {
       
        return (
            <div>
                <SearchBar users={this.props.users} />
                
            </div>
        )
    }
}