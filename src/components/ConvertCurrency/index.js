import React, { Component } from 'react'

import './style.css';

export default class Conversor extends Component {

  constructor (props) {
    super(props);

    this.state = {
      moedaA_value: "",
      moedaB_value: 0,
    }

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de = `${this.props.moedaA}`;
    let para = `${this.props.moedaB}`;
    let url = `https://economia.awesomeapi.com.br/json/last/${de}-${para}`;
    let de_para = de.concat(para);

    fetch(url)
    .then(response => response.json())
    .then(data => {
      let cotacao = data[de_para].ask;
      let moedaB_value = (parseFloat(this.state.moedaA_value * cotacao).toFixed(2));
      this.setState({moedaB_value});
    })
  }

  render() {
    return (
      <div className="root">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input type="text" onChange={(event) => {this.setState({moedaA_value: event.target.value})}} />
        <button onClick={this.converter}>Convert</button>
        <p>Result: {this.state.moedaB_value}</p>
      </div>
    )
  }
}
