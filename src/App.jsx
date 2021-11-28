import React from 'react';
import ConvertCurrency from './components/ConvertCurrency';

const App = () => (
  <>
    <p>API:
      <a href="https://economia.awesomeapi.com.br/json/last/USD-BRL">Link</a>
    </p>
    <ConvertCurrency
      ofCurrency="USD"
      forCurrency="BRL"
    />
    <ConvertCurrency
      ofCurrency="BRL"
      forCurrency="USD"
    />
  </>
);

export default App;
