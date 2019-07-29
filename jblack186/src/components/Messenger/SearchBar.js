import React, { Component } from 'react'
import dummyData from '../../dummyData'
import displayComments from './displayComments'
import axios from 'axios'
    
export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state= {
           filter: '',
            query: '',
            results: {},
            loading: false,
            users: this.props.users,
            db: dummyData
           
    }

 }


//  getUsers = (e) => {
//      e.preventDefault();
//     const apiBaseUrl = "https://mentorme.free.beeceptor.com"
//     const endpoint = "/users";
//     axios.get(`https://mentorme.free.beeceptor.com/users`) 
//     .then(response => {
//         const users = response.data.data
       
//     })

//     this.cancel = '';
// }  
//Tried messing around with some fake api 

changeHandler = (event) => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value, loading: true, message: '' })
}

submitHandler = (event) => {
    event.preventDefault();

    let data = dummyData.filter(word => {
        if(word.toLowerCase().indexOf(this.state.value.toLowerCase())!==-1){
            return true;
          }  
        }) 
}


updateFilter = (event => {
    this.setState({ filter: event.target.value})
})

    render() {
        console.log(this.props)
const users = this.state.users.filter(user => user.username.includes(this.state.filter))
      console.log(this.state.query)
      
        return(
            <div>
               
               
                <form onSubmit={this.getUsers}>
                <label htmlFor='search'>Search User: </label>
                    <input type='text'
                    placeholder='' 
                    id='search_input'
                    value={this.state.filter}
                     onChange={this.updateFilter} 
                     name='query' />
               
                    <button type='submit'>Find</button>
                </form>
                {users.map(user => <div>
                    <h4>{user.username}</h4><p>{user.text}</p>
                    </div>)}
            
                
            </div>
        )
    }
}