 import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

 class Button extends Component {
   render() {
     const {add, sub} = this.props 
     return (
       <div>
         <button onClick={add}>Add</button>
         <button onClick={sub}>Decrease</button>
       </div>
     );
   }
 }

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'addValue'}),
  sub: () => dispatch({type: 'subValue'}),
});

 export default connect(null, mapDispatchToProps) (Button);