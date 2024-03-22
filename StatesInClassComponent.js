import React, { Component } from 'react';

class StatesInClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'jhon',
    };
    this.handle = this.handle.bind(this);
  }
  handle(e){
    this.setState({
      userName: e.target.value
    })
  }
  render() {
    return (
      <>
        <div>StatesInClassComponent</div>
        <input onChange={this.handle} type='text'></input>
        <h1>Hello! {this.state.userName}</h1>
      </>
    );
  }
}

export default StatesInClassComponent;
