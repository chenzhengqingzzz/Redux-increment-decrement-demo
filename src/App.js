import './App.css';
import React, { Component } from 'react';
import * as Actions from './store/action'
import {connect} from "react-redux"
class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return (
      <div>
        <input value = {this.props.value}/>
        <input value = {this.props.value1}/>
        <input value = {this.props.value2}/>
        <button onClick={() => this.props.add(this.props.value)}>+</button>
        <button onClick={() => this.props.sub(this.props.value1)}>-</button>
        <button onClick={() => this.props.add2(this.props.value2)}>+2</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.AppValue.value,
  value1: state.AppValue.value1,
  value2: state.AppValue.value2
})

const mapDispatchToProps = (dispatch) => ({
  add(data){
    dispatch(Actions.Add(data))
  },
  sub(data){
    dispatch(Actions.sub(data))
  },
  add2(data){
    dispatch(Actions.add2(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
