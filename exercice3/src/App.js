import React, {Component} from 'react'

let dateConstante = new Date;
class App extends Component{
    render() {
      return (
        <p>
        {dateConstante.getDate()}/{dateConstante.getMonth() +1}/{dateConstante.getFullYear()}
      </p>
      )
    }
}

export default App;
