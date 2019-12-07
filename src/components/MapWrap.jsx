import React, { Component } from "react";

export class MapWrap extends Component {
  clickArea = e => {
    e.preventDefault();
    this.props.clbk(e.target.target);
  };

  render() {
    return (
      <div>
        <img
          src="https://geopolar.pagesperso-orange.fr/europe/france/paris/malet/plan-paris.gif"
          useMap="#image-map"
        />
        <map name="image-map" onClick={this.clickArea}>
          <area
            id="zone"
            target="[75016, 75017, 75018, 75009, 75008]"
            alt="Zone 1"
            title="Zone 1"
            href=""
            coords="364,145,367,93,413,86,434,39,432,14,283,17,199,66,172,93,124,182,97,249,81,254,83,291,96,310,113,311,211,181,283,179,302,152"
            shape="poly"
          />
          <area
            id="zone"
            target="[75015, 75014, 75007, 75006, 75005]"
            alt="Zone 2"
            title="Zone 2"
            href=""
            coords="350,392,345,298,368,297,406,284,415,263,395,232,336,205,279,181,213,181,174,219,116,306,223,347"
            shape="poly"
          />
          <area
            id="zone"
            target="[75013, 75012, 75011, 75020]"
            alt="Zone 3"
            title="Zone 3"
            href=""
            coords="541,309,550,308,560,258,550,117,486,128,414,165,428,226,408,285,375,300,345,291,343,361,355,388,375,381,387,391,409,391,517,329"
            shape="poly"
          />
          <area
            id="zone"
            target="[75019, 75010, 75001, 75002, 75003, 75004]"
            alt="Zone 4"
            title="Zone 4"
            href=""
            coords="516,126,544,112,516,86,500,14,432,14,413,88,367,93,361,146,341,144,301,155,285,179,377,236,418,256,427,226,415,158,451,143"
            shape="poly"
          />
        </map>
      </div>
    );
  }
}

export default MapWrap;
