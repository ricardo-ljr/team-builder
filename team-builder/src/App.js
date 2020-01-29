import React, { useState } from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Form from "./Form";
import Members from "./Member";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Ricardo",
      email: "ricardo@leite.com",
      role: "Full Stack Engineer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: members.length + 1,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  const deleteMember = id => {
    setMembers(members.filter(members => members.id !== id));
  };

  // const [editing, setEditing] = useState(false);
  // const initialFormState = { id: 1, name: "", email: "", role: "" };
  // const [currentMember, setCurrentMember] = useState(initialFormState);
  // const editRow = member => {
  //   setEditing(true);

  //   setCurrentMember({
  //     id: member.id,
  //     name: member.name,
  //     email: member.email,
  //     role: member.role
  //   });
  // };

  // const updateMember = (id, updatedMember) => {
  //   setEditing(false);

  //   setMembers(
  //     members.map(member => (member.id === id ? updatedMember : member))
  //   );
  // };

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} deleteMember={deleteMember} />
    </div>
  );
}

export default App;
