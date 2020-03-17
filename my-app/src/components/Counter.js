import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        
        <Alert key="1" variant="primary">
          This is a primary alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
          like.
        </Alert>     

        <p>This is a simple example of a React component.</p>
        <img src="/img/char11.jpg" alt="home" className="w-25 p-3"/>
        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>

      </div>
    );
  }
}

