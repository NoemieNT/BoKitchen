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
          className="img-fluid"
          // src="https://geopolar.pagesperso-orange.fr/europe/france/paris/malet/plan-paris.gif"
          src="http://img.over-blog.com/300x300/2/75/42/24/2010/Animateurs/carteParis.png"
          useMap="#image-map"
          alt="paris-map"
        />
        <map name="image-map" onClick={this.clickArea}>
          <area
            id="zone"
            target="[75016, 75017, 75018, 75009, 75008]"
            alt="Zone 1"
            title="Zone 1"
            href=""
            coords="34,193,89,121,130,120,139,104,161,97,175,100,177,70,205,65,214,39,209,22,131,25,80,53,62,68,57,90,29,111,24,129,16,147,13,177,18,191"
            shape="poly"
          />
          <area
            id="zone"
            target="[75015, 75014, 75007, 75006, 75005]"
            alt="Zone 2"
            title="Zone 2"
            href=""
            coords="36,193,41,207,48,211,63,200,98,216,150,237,168,237,167,184,183,186,200,177,204,166,170,144,161,134,151,131,130,121,101,118,88,120,58,155"
            shape="poly"
          />
          <area
            id="zone"
            target="[75013, 75012, 75011, 75020]"
            alt="Zone 3"
            title="Zone 3"
            href=""
            coords="168,237,180,235,197,240,230,225,242,213,266,204,282,190,288,164,284,115,286,88,278,81,262,88,247,88,239,91,222,97,206,107,211,146,200,177,182,186,166,183,164,203,164,220"
            shape="poly"
          />
          <area
            id="zone"
            target="[75019, 75010, 75001, 75002, 75003, 75004]"
            alt="Zone 4"
            title="Zone 4"
            href=""
            coords="210,137,203,108,225,97,248,91,280,82,263,68,259,33,240,20,213,24,205,65,179,68,174,100,162,98,138,103,131,118,152,130,185,140,197,154,206,165"
            shape="poly"
          />
        </map>
      </div>
    );
  }
}

export default MapWrap;
