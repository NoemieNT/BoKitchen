import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel-slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="burger-pic"
              src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
              className="d-block w-100"
              alt="big burger"
            />
          </div>
          <div className="carousel-item">
            <img
              className="burger-pic"
              src="https://www.instagram.com/p/9Jf0S_BYym/?utm_source=ig_embed"
              className="d-block w-100"
              alt="Big Burger 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.instagram.com/p/9Jf0S_BYym/?utm_source=ig_embed"
              className="d-block w-100"
              alt="Big Burger 3"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
