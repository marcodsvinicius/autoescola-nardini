import React from 'react'
import Hero from "../components/Hero";
import BgHighwayImage from "./assets/carro.jpg";
import BgCarImage from "./assets/carro2.jpg";
import GlobalStyle from "../components/GlobalStyle"
import Heading from "../components/Heading";

export default {
  title: "Hero",
  component: Hero,
}

export const usage = () => 
<Hero image={BgHighwayImage}>
  <h1>Ganhe sua liberdade para ir e vir</h1>
  <p>A auto escola lider em aprovação.</p>
</Hero>

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
    <h1>
    Ganhe sua <strong> liberdade </strong> <br /> para ir e vir
    </h1>
    </Heading>
  <ul>
    <li>Lorem ipsum dolor sit amet consect.</li>
    <li>Lorem ipsum dolor sit amet consect.</li>
    <li>Lorem ipsum dolor sit amet consect.</li>
  </ul>
</Hero>
);
