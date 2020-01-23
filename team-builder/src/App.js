import React, {useState} from 'react';
import './App.css';
import TeamList from '../src/components/TeamList';
import AddMember from '../src/components/AddMember';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
    id: 0,
    name:'Logan',
    email:'logannegley@gmail.com',
    position: 'Full Stack Dev',
   }
  ]);
  console.log(teamMembers)


const addNewMember = member => {
const newMember = {
  id: Date.now(),
  name: member.name,
  email: member.email,
  position: member.position,
}

setTeamMembers([...teamMembers, newMember]);
};


  return (
    <div className="App">
      <AddMember addNewMember={addNewMember}/>
      <TeamList teamMembers={teamMembers}/>

    </div>
  );
}

export default App;
