import React, { useState } from 'react';

const ConvertCurrency = props => {
  const {
    ofCurrency,
    forCurrency
  } = props;
  const [inputState, inputSetState] = useState(0);
  const [outputState, outputSetState] = useState(0);
  const pair = ofCurrency.concat(forCurrency);
  const handler = () => {
    const url = `https://economia.awesomeapi.com.br/json/last/${ofCurrency}-${forCurrency}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const price = data[pair].ask;
        const result = (parseFloat(inputState * price).toFixed(2));
        outputSetState(result);
      })
  }
  return (
    <>
      <h2>{ofCurrency} / {forCurrency}</h2>
      <input
        type="text"
        onChange={(e) => inputSetState(e.target.value)}
        value={inputState}
      />
      <button onClick={handler}>Convert</button>
      <p>Result: {outputState}</p>
    </>
  )
}

export default ConvertCurrency;