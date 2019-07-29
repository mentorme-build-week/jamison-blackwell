import './Messenger.css'
import React from 'react'
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button'

export default class Messenger extends React.Component {
    constructor(props){
        super(props)
    }

    newChat = () => {
        console.log('i work')
    }

    selectChat = (index) => {
        console.log('selectChat', index)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <SearchBar users={this.props.users} />
                
            </div>
        )
    }
}