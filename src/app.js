import React from 'react'
import { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1
    }
  }

  someFn(){
    console.time('someFn')
    for(let i = 0; i < 2000000000; i++){
      i / i
    }
    console.timeEnd('someFn')
  }

  onClick = ()=> {
    const { clicks } = this.state
    this.setState({
      clicks: clicks + 1
    })
  }

  render() {
    const { clicks } = this.state
    return (
      <div>
        <header>
          Class Component
        </header>
        <main>
          Main
          <h1 onClick={this.onClick}>{clicks}</h1>
        </main>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}
