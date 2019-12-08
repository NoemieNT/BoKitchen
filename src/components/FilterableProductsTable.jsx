// import React, { Component } from "react";

// export class FilterableProductsTable extends Component {
//   render() {
//     sortByPopularity = e => {
//       const foodCopyPopu = [...this.state.foods];
//       foodCopyPopu.sort(function(a, b) {
//         if (a.name > b.name) {
//           return 1;
//         }
//         if (b.name > a.name) {
//           return -1;
//         }
//         return 0;
//       });
//       this.setState({ foods: foodCopyPopu });
//       console.log(foodCopyPopu);
//     };
//     return (
//       <div>
//         <button onClick={this.sortByPopularity}>Sort by popularity </button>
//       </div>
//     );
//   }
// }

// export default FilterableProductsTable;
