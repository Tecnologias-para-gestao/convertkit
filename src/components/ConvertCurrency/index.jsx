import React, { useState } from 'react';

const ConvertCurrency = props => {
  const { ofCurrency, forCurrency } = props;
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const API_URL="https://economia.awesomeapi.com.br/json/last";

  const handler = () => {
    fetch(`${API_URL}/${ofCurrency}-${forCurrency}`)
      .then(response => response.json())
      .then(data => {
        const price = data[ofCurrency.concat(forCurrency)].ask;
        const result = (parseFloat(input * price).toFixed(2));
        setOutput(result);
      });
  }

  return (
    <div>
      <h2>{ofCurrency} / {forCurrency}</h2>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handler}>Convert</button>
      <p>{forCurrency} {output}</p>
    </div>
  );
};

export default ConvertCurrency;
