import React, { Component } from 'react'
import FunCompo from './Component/FunCompo'
import ClassCompo from './Component/ClassCompo'

import "./App.css"
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       funcompo:true,
       classcompo:true
    }
  }
  
  render() {
    return (
      <div>
       <div className='button1'>
       <button onClick={()=>this.setState({funcompo:!this.state.funcompo})}  className="btn1">To see Styling Using Functional Component</button>

<button onClick={()=>this.setState({classcompo:!this.state.classcompo})}  className="btn2">To see Styling Using Class Component</button>
       </div>

        <div className='component1'>

        {this.state.funcompo && <FunCompo />}

        </div>

        <div className='component2'>
        {this.state.classcompo && <ClassCompo />}

        </div>
      </div>
    )
  }
}

export default App
