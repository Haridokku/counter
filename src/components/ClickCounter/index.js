// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  countIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />{' '}
          <span className="heading2">{count}</span> times
        </h1>
        <p className="describe">Click the button to increase the count!</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.countIncrease}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
