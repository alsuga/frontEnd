import React from 'react'
import ReactDOM from 'react-dom'

class Sum extends React.Component {
  constructor(props) {
    super(props)
    this.state = { total: 0 }
    this.addOne = this.addOne.bind(this)
    this.subOne = this.subOne.bind(this)
  }

  addOne() {
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  subOne() {
    this.setState(prevState => ({total: prevState.total - 1}))
  }

  render() {
    return (<div id="app">
      <p className='text'>Your result is { this.state.total } by now</p>
      <button onClick={this.addOne}>+1</button>
      <button onClick={this.subOne}>-1</button>
    </div>)
  }
}

ReactDOM.render(
  <Sum />,
  document.getElementById('root')
);
