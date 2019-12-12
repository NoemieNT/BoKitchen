import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div class="carousel">
        <div id="demo" class="carousel-slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="banner">
                <img className="banner" src="./Bokitchen.png" alt="banner" />
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
                alt="Chicago"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
                alt="New York"
              />
            </div>
          </div>
        </div>

        <div className="thumbnails">
          <div class="col-sm-3">
            <img
              className="thumbnail-img"
              src="./biologique.png"
              alt="Salade thumbnail"
            />
          </div>

          <div class="col-sm-3">
            <img
              className="thumbnail-img"
              src="./biologique.png"
              alt="Pasta thumbnail"
            />
          </div>
          <div class="col-sm-3">
            <img
              className="thumbnail-img"
              src="./biologique.png"
              alt="Burger thumbnail"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
