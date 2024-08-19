import React, { Component } from 'react'


const Modifycomp= (Retrndcomp) =>{
class IncrmComp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        };
    }
    incremenent = ()=>{
        this.setState(prvState =>{
             return {count:prvState.count +1}
        })
      } 
  render() {
    return (<Retrndcomp count={this.state.count} incremenent={this.incremenent} />
  )}
} 
return IncrmComp;
};
export default Modifycomp
