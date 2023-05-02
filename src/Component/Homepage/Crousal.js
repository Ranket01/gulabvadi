import React from "react";
import "./Crousal.css";
import c1 from '../Homepage/Images/c1.jpg'
import c2 from '../Homepage/Images/c2.jpg'
import c3 from '../Homepage/Images/c3.jpg'
import c4 from '../Homepage/Images/c4.jpg'
import c5 from '../Homepage/Images/c5.jpg'
import c6 from '../Homepage/Images/c6.jpg'

export default function Crousal() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide ">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img 
            src={c2}
            className="d-block w-100 imgofmycrousal"
            alt="..."
          />
          <div className="carousel-caption " style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <h2>Juicy Delights: Fresh Mango Plants for Sale in Junagadh</h2>
            <p>Get ready to taste the freshest and juiciest mangoes, Buy your very own mango plant and enjoy the fruits of your labor.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img 
            src={c3}
            className="d-block w-100 imgofmycrousal"
            alt="..."
          />
          <div className="carousel-caption " style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <h2>From Orchard to You: Authentic Mango Plants from Gujarat</h2>
            <p>Authentic mango plants straight from Gujarat's orchards, Discover the secret to growing delicious mangoes in your backyard.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img 
            src={c4}
            className="d-block w-100 imgofmycrousal"
            alt="..."
          />
          <div className="carousel-caption " style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <h2>Experience the Taste of Gujarat with Our Mango Plants</h2>
            <p>Experience the delicious taste of Gujarat with our mango plants, 
Transport your taste buds to the mango orchards of Junagadh.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img 
            src={c5}
            className="d-block w-100 imgofmycrousal"
            alt="..."
          />
          <div className="carousel-caption " style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <h2>Green Fingers? Get Your Mango Plant Today in Junagadh</h2>
            <p>For the green-fingered, get your mango plant today in Junagadh, 
Start your own mango orchard and become a master gardener.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img 
            src={c6}
            className="d-block w-100 imgofmycrousal"
            alt="..."
          />
          <div className="carousel-caption " style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <h2>Grow Your Own Sweet and Succulent Mangoes in Gujarat</h2>
            <p>Taste the satisfaction of growing your own delicious fruit, 
Start a new hobby and enjoy the benefits of growing your own mango plants.</p>
          </div>
        </div>


        <div className="carousel-item">
          <img 
            src={c1}
            className="d-block w-100 imgofmycrousal"
            alt="..."
          />
          <div className="carousel-caption " style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <h2>The Best Mango Plants in Junagadh: Start Your Orchard Now!</h2>
            <p>Experience the joy of growing your own mangoes in Gujarat, 
Take the first step towards building your own mango empire.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
