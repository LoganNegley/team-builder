import React, {useState} from 'react';
import './App.css';
import TeamList from '../src/components/TeamList';
import AddMember from '../src/components/AddMember';

function App() {

  const [teamMembers, setTeamMembesr] = useState({
    name:'Logan',
    email:'logannegley@gmail.com',
    position: 'Full Stack Dev',
  });

  console.log(teamMembers)

  return (
    <div className="App">
      <TeamList teamMembers='teammMembers'/>
      <AddMember/>
    </div>
  );
}

export default App;
