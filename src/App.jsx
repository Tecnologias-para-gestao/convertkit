import React, { useMemo, useState } from 'react';
import ConvertCurrency from './components/ConvertCurrency';

const App = () => {
  const currencies= ["BRL", "USD", "EUR"];
  const [pair, setPair] = useState({ofCurrency: "", forCurrency: ""});

  const handleOfSelect = (index, value) => {
    if (index < 1) return;
    setPair({ofCurrency: value, forCurrency: pair.forCurrency});
  };
  const handleForSelect = (index, value) => {
    if (index < 1) return;
    setPair({ofCurrency: pair.ofCurrency, forCurrency: value});
  };

  const renderSelectedPair = useMemo(() => {
    if(pair.ofCurrency == pair.forCurrency) return;
    return (
      <ConvertCurrency
        ofCurrency={pair.ofCurrency}
        forCurrency={pair.forCurrency}
      />
    );
  }, [pair]);

  return (
    <div>
      <div>
        <p>De:</p>
        <select onClick={
          (e) => handleOfSelect(e.target.selectedOptions[0].index, e.target.selectedOptions[0].text)
        }>
          <option value="0">Escolher Moeda</option>
          {React.Children.toArray(
            currencies.map(
              (item, index) => <option value={index}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <p>Para:</p>
        <select onClick={
          (e) => handleForSelect(e.target.selectedOptions[0].index, e.target.selectedOptions[0].text)
        }>
          <option value="0">Escolher Moeda</option>
          {React.Children.toArray(
            currencies.map(
              (item, index) => <option value={index}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        {renderSelectedPair}
      </div>
    </div>
  );
};

export default App;
