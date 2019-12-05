import React, { Component } from "react";

export class MapWrap extends Component {
  render() {
    return (
      <div>
        <img
          className="img-fluid"
          src="https://geopolar.pagesperso-orange.fr/europe/france/paris/malet/plan-paris.gif"
          alt="plan-paris"
        />
      </div>
    );
  }
}

export default MapWrap;
