import React, {useState} from 'react';


function TeamList(props) {

console.log(props)
  return (
    <div className="list-wrapper">
        <h1>Team Members</h1>
        <div className='team-list-container'>
            {props.teamMembers.map((member, index) => (
                <div className='teamMember'>
                    <h2>{member.name}</h2>
                    <p>Email: {member.email}</p>
                    <p>Position: {member.position}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default TeamList;
