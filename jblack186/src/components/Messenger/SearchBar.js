import React, { Component } from 'react'
import dummyData from '../../dummyData'
import DisplayComments from './DisplayComments'

export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state= {
            
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }

changeHandler = (event) => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value })
}

submitHandler = (event) => {
    event.preventDefault();

    let data = dummyData.filter(word => {
        if(word.toLowerCase().indexOf(this.state.value.toLowerCase())!==-1){
            return true;
          }  
        }) 
}

    render(){
        console.log(dummyData)
     
      
       const { value } = this.state;
       console.log(this.state.value)
        return(
            <div>
                <h2>Live Search</h2>
               
                <form onSubmit={this.submitHandler}>
                <label htmlFor='search_input'>
                    <input type='text'
                    placeholder='Search...' 
                    id='search_input'
                    value={ value }
                     onChange={this.changeHandler} 
                     name='query' />
                </label>
                    <button type='submit'>Search</button>
                </form>
                <DisplayComments />
            </div>
        )
    }
}