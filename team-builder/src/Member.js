import React from "react";

const Members = props => {
  return (
    <div className="members-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <button className="button muted-button">Edit</button>
          <button
            onClick={() => props.deleteMember(member.id)}
            className="button muted-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Members;
