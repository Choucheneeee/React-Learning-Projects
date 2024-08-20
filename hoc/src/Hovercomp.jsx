
import React, { Component,useEffect } from 'react';
import Modifycomp from './IncrmComp.jsx';

class Hovercomp extends Component {
  
  render() {
    const { count, incremenent } = this.props;
    return (
      <div>
        <h2 onMouseOver={incremenent}>Hovered {count} Time</h2>
      </div>
    );
  }
}

export default Modifycomp(Hovercomp);