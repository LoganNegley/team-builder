import React, {useState} from 'react';
import './App.css';
import TeamList from '../src/components/TeamList';

function App() {

  const [teamMemebers, setTeamMembesr] = useState({});
  return (
    <div className="App">
      <TeamList/>
    </div>
  );
}

export default App;
