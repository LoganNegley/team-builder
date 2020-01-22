import React, {useState} from 'react';
import './App.css';
import TeamList from '../src/components/TeamList';
import AddMember from '../src/components/AddMember';

function App() {

  const [teamMemebers, setTeamMembesr] = useState({});
  return (
    <div className="App">
      <TeamList/>
      <AddMember/>
    </div>
  );
}

export default App;
