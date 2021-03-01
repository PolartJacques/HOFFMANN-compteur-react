import React from 'react';

class Compteur extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.click = this.click.bind(this);
  }

  render() {
    return(
      <div>
        <p>THIS IS MY COMPTEUR :</p>
        <button onClick={this.click}>click me</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }

  click() {
    this.setState({counter: this.state.counter + 1});
  }
}

export default Compteur;