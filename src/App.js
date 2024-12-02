import './App.css';
import Title from './Title';
import Counter from './Counter';
import CounterContainer from './CounterContainer';
import { useState } from 'react';

function App() {
  const appInfo = {
    appName: 'mon App',
    message: "Mon compteur",
  };

  const [limitValue, setLimitValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");

  const handleLimitChange = (e) => {
    const { name, value } = e.target;
    if (name === 'limitValue') setLimitValue(value);
    if (name === 'maxValue') setMaxValue(value);
    if (name === 'minValue') setMinValue(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title myMessage={appInfo.message} />

        <div className="input-container">
          <div>
            <label>Limite du compteur :</label>
            <input
              type="number"
              name="limitValue"
              value={limitValue}
              onChange={handleLimitChange}
              placeholder="Entrez la limite"
            />
          </div>
          <div>
            <label>Valeur maximale :</label>
            <input
              type="number"
              name="maxValue"
              value={maxValue}
              onChange={handleLimitChange}
              placeholder="Entrez la valeur maximale"
            />
          </div>
          <div>
            <label>Valeur minimale :</label>
            <input
              type="number"
              name="minValue"
              value={minValue}
              onChange={handleLimitChange}
              placeholder="Entrez la valeur minimale"
            />
          </div>
        </div>

        {limitValue && maxValue && minValue ? (
          <CounterContainer>
            <Counter limitValue={parseInt(limitValue)} maxValue={parseInt(maxValue)} minValue={parseInt(minValue)} />
          </CounterContainer>
        ) : (
          <p>Veuillez entrer toutes les limites pour commencer.</p>
        )}
      </header>
    </div>
  );
}

export default App;
