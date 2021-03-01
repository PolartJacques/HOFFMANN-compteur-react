import React from 'react';

class Today extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {date: new Date(Date.now())}
  }

  render() {
    return(
      <h1>hello world : {this.state.date.toUTCString()}</h1>
    );
  }
}

export default Today;