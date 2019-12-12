import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div class="carousel">
        <div id="demo" class="carousel-slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="Burger" data-slide-to="0" class="active"></li>
            <li data-target="Pasta" data-slide-to="1"></li>
            <li data-target="Salade" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
                alt="Los Angeles"
              />
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

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>

        <div className="thumbnails">
          {/* <div class="row"> */}
          <div class="col-sm-3">
            <p>Bio</p>
            <img
              className="thumbnail-img"
              src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
              class="rounded-circle"
              alt="Salade thumbnail"
            />
          </div>

          <div class="col-sm-3">
            <p>Bio</p>
            <img
              className="thumbnail-img"
              src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
              class="rounded-circle"
              alt="Pasta thumbnail"
            />
          </div>
          <div class="col-sm-3">
            <p>Bio</p>
            <img
              className="thumbnail-img"
              src="https://cdn.bioalaune.com/img/article/thumb/900x500/35559-5-recettes-originales-hamburgers-bio-maison.webp"
              class="rounded-circle"
              alt="Burger thumbnail"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
