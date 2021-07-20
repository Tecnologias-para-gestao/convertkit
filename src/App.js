import React, { Component } from 'react';
import Conversor from './components/ConvertCurrency';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>API <a href="https://economia.awesomeapi.com.br/json/last/USD-BRL">Link</a></h1><hr />
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    );
  }
}

export default App;
