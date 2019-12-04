// import React, { Component } from "react";
// import APIHandler from "./../api/handler";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

// const handler = new APIHandler();

// export default class StudentsTable extends Component {
//   state = {
//     students: []
//   };

//   componentDidMount() {
//     handler
//       .get("/students")
//       .then(apiRes => {
//         this.setState({ students: apiRes.data });
//       })
//       .catch(apiErr => console.error(apiErr));
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="title">Manage students</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>firstname</th>
//               <th>lastname</th>
//               <th>email</th>
//               <th>cohort</th>
//               <th>delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {!this.state.students.length ? (
//               <tr>
//                 <td colSpan="5"></td>
//               </tr>
//             ) : (
//               this.state.students.map((s, i) => (
//                 <tr key={i}>
//                   <td>{s._id}</td>
//                   <td>{s.firstName}</td>
//                   <td>{s.lastName}</td>
//                   <td>{s.email}</td>
//                   <td>{s.cohortID}</td>
//                   <td>
//                     <FontAwesomeIcon icon={faTimes} />
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
