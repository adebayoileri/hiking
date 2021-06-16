import React, { useRef } from "react";
import "./sass/main.scss";
import imageOne from "./images/image1.jpg"
import imageTwo from "./images/image2.jpg"
import imageThree from "./images/image3.jpg"
import gsap, { TimelineMax } from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin";
function App() {
  gsap.registerPlugin(CSSRulePlugin)
  let arrowIcon = useRef(null);

  let imageOneRule = CSSRulePlugin.getRule(".gallery__item--1::after");
  let imageTwoRule = CSSRulePlugin.getRule(".gallery__item--2::after");
  let imageThreeRule = CSSRulePlugin.getRule(".gallery__item--3::after");

  let tl = new TimelineMax();

  React.useEffect(() => {

    tl.to(".home-container", .4,
      {
        css: { visibility: "visible" }
      }).from(".navigation__item", .8, {
        opacity: 0
      })
      .from(".hero-text", 1.2, {
        y: 200,
        ease: "power4.out",
        // delay: 1,
        opacity: 0,
        skewY: 10,
        stagger: {
          amount: 0.4
        }
      })

      .to(imageOneRule, {
        duration: 1.2,
        width: "0%",
        ease: "Power2.ease",
        delay: .3
      })

      .to(imageTwoRule, {
        duration: 1.2,
        height: "0%",
        delay: -1,
        ease: "Power2.easeInOut"
      })

      .to(imageThreeRule, {
        duration: 1.2,
        height: "0%",
        delay: -1,
        ease: "Power2.easeInOut"
      })
      .to(arrowIcon, {
        opacity: 1,
        ease: "Power2.easeInOut",
        delay: -1,
      }).from(".footer__list", {
        opacity: 0
      })
  })

  return (
    <>
      <div className="home-container">
        <div className="navigation mt-3">
          <ul className="navigation__list">
            <li className="navigation__item">About</li>
            <li className="navigation__item">Events</li>
            <li className="navigation__item">Gallery</li>
            <li className="navigation__item">Contact</li>
          </ul>
        </div>

        <div className="hero-box">
          <h1 className="heading-lg hero-text">Hiking</h1>
          <h4 className="heading-md ff-quarion mt-1 hero-text lt-3">passion for adventure</h4>
          <p className="heading-xs hero-text mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit repellat error officia Laudantium architecto distinctio accusantium nihil eos ad aperiam quibusdam nisi sed praesentium.
          </p>
          <div className="book mt-2">
            <a className="heading-xs ff-quarion fw-500 hero-text" href="#book">book your adventure &rarr;</a>
          </div>
        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={imageOne} alt="hiking 1" loading="lazy" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={imageTwo} alt="hiking 2" loading="lazy" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={imageThree} alt="hiking 3" loading="lazy" className="gallery__img" />
          </figure>
          <div className="gallery__icon" ref={el => arrowIcon = el}>
            &rarr;
          </div>
        </div>
        <footer className="footer">
          <ul className="footer__list">
            <li className="footer__item">facebook</li>
            <li className="footer__item">twitter</li>
            <li className="footer__item">instagram</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
