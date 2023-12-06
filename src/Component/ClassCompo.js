import React, { Component } from 'react'

import '../App.css'

export class ClassCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
        <div className='paraC'>
        <h2> This is created using class component</h2>
        <p className='paraC1'>This is done using external css</p>
        <p style={{color:'red'}}>This is done using inline css</p>        
        </div>
    )
  }
}

export default ClassCompo
