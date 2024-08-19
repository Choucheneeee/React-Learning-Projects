import React, { Component } from 'react';
import Modifycomp from './IncrmComp.jsx';

class Clickcomp extends Component {
  render() {
    const { count, incremenent } = this.props;
    console.log(count)
    return (
      <button onClick={incremenent}>Clicked {count} Times</button>
    );
  }
}

export default Modifycomp(Clickcomp);