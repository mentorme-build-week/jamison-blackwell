import React from 'react'
import dummyData from '../../dummyData';

export default class MessageList extends React.Component {
    constructor() {
        super()
        this.state= {
            users: dummyData
        }
    }
    render() {
        const { users } = this.state;
        return (
            <div className='message_list'>
                {users.map((user, index) => 
                <div key={index}>
                    <p>{user.username}</p>
                    <p>{user.text}</p>
                </div>
                    )}
            </div>
        )
    }
}