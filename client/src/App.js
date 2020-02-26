import React from "react";
import request from "superagent";
import "./App.css";
import names from "./names";

const apiEndpoint = "https://avatars.dicebear.com/v2/avataaars/";
const apiOptions = "options[mood][]=happy";
const backendUrl = "http://localhost:8000/";
const beneficiariesEndpoint = `${backendUrl}api/beneficiaries`;
// const loginEndpoint = `${backendUrl}api/token`;

const getAvatar = name => `${apiEndpoint}${name}.svg?${apiOptions}`;

function App() {
  const [registeredBeneficiaries, setRegisteredBeneficiaries] = React.useState(
    []
  );
  const fetchBeneficiaries = async () => {
    const response = await request.get(beneficiariesEndpoint);
    console.log(response);
    setRegisteredBeneficiaries(response);
  };

  React.useEffect(() => {
    fetchBeneficiaries();
  }, []);
  const beneficiaryNames = [...Array(12).keys()].map(
    number => names[Math.floor(Math.random() * names.length)]
  );
  console.log(registeredBeneficiaries);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue dans le gestionnaire de bénéficaires Reconnect</h1>
        <div className="Beneficiaries-list">
          {beneficiaryNames.map((name, index) => (
            <div className="Beneficiary-card" key={name + index}>
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
