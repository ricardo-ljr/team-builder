import React, { useState } from "react";
import ReactDOM from "react-dom";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: " ",
    email: " ",
    role: " "
  });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
    console.log(member);
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChanges}
        id="name"
        type="text"
        name="name"
        placeholder="Name..."
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={handleChanges}
        id="email"
        type="email"
        name="email"
        placeholder="Email..."
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        onChange={handleChanges}
        id="role"
        type="text"
        name="role"
        placeholder="Your role..."
        value={member.role}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MemberForm;
