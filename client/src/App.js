import React from "react";
import "./App.css";
import names from "./names";

const apiEndpoint = "https://avatars.dicebear.com/v2/avataaars/";
const apiOptions = "options[mood][]=happy";

const getAvatar = name => `${apiEndpoint}${name}.svg?${apiOptions}`;

function App() {
  const beneficiaryNames = [...Array(12).keys()].map(
    number => names[Math.floor(Math.random() * names.length)]
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue dans le gestionnaire de bénéficaires Reconnect</h1>
        <div className="Beneficiaries-list">
          {beneficiaryNames.map(name => (
            <div class="Beneficiary-card">
              <span>{name}</span>
              <img src={getAvatar(name)} alt={name} />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
