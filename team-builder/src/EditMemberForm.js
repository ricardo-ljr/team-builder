// import React, { useState } from "react";

// const EditMemberForm = props => {
//   const [member, setMember] = useState({
//     name: " ",
//     email: " ",
//     role: " "
//   });

//   const handleInputChanges = event => {
//     setMember({ ...member, [event.target.name]: event.target.value });
//     console.log(member);
//   };

//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault();
//         props.updateMember(member.id, member);
//       }}
//     >
//       <label htmlFor="name">Name</label>
//       <input
//         onChange={handleInputChanges}
//         id="name"
//         type="text"
//         name="name"
//         placeholder="Name..."
//         value={member.name}
//       />
//       <label htmlFor="email">Email</label>
//       <input
//         onChange={handleInputChanges}
//         id="email"
//         type="email"
//         name="email"
//         placeholder="Email..."
//         value={member.email}
//       />
//       <label htmlFor="role">Role</label>
//       <input
//         onChange={handleInputChanges}
//         id="role"
//         type="text"
//         name="role"
//         placeholder="Your role..."
//         value={member.role}
//       />
//       <button>Update User</button>
//       <button
//         onClick={() => props.setEditing(false)}
//         className="button muted-button"
//       >
//         Cancel
//       </button>
//     </form>
//   );
// };
// export default EditMemberForm;
