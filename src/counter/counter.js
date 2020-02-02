import React from "react";
import { Component } from "react";
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    const {value} = this.props
    return (
      <div>
        {value}
      </div>
    ); 
  }
}
 
const mapStateToProps = atstore => ({
  value: atstore.store.value
});

export default connect(mapStateToProps, null)(Counter);
