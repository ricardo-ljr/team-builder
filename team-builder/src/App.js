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

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
