// import React, { Component } from "react";
// import APIHandler from "./../api/handler";

// const handler = new APIHandler();

// export default class CohortCreate extends Component {
//   state = {
//     number: null
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     handler
//       .post("/cohorts", this.state)
//       .then(apiRes => {
//         this.props.history.push("/all-cohorts");
//       })
//       .catch(apiErr => {
//         console.log(apiErr);
//       });
//   };

//   render() {
//     return (
//       <form
//         className="form"
//         onChange={this.handleChange}
//         onSubmit={this.handleSubmit}
//       >
//         <h1 className="title">Create new cohort</h1>
//         <label htmlFor="cohort" className="label">
//           cohort number
//         </label>
//         <input type="number" className="input" name="number" />
//         <button className="btn">ok</button>
//       </form>
//     );
//   }
// }
