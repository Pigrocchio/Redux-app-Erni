import React from "react";
import { Component } from "react";
import logo from "../logo.svg";
import './imagen.css'
import {connect} from 'react-redux'
import store from "../store/store";


class Imagen extends Component {
  render() {
    return <img src={logo} className={`right ${this.props.rotation}`} alt="logo" />;
  }
}

const mapStateToProps = (store) => ({
  rotation: store.imagen.rotation
})

export default connect(mapStateToProps, null)(Imagen);
