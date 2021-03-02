import React from 'react'
import Hero from "../components/Hero";
import BgHighwayImage from "./assets/carro.jpg";
import BgCarImage from "./assets/carro2.jpg";
import GlobalStyle from "../components/GlobalStyle"

export default {
  title: "Hero",
  component: Hero,
}

export const usage = () => 
<Hero title="Ganhe sua liberdade para ir e vir" image={BgHighwayImage}>
  <p>A auto escola lider em aprovação.</p>
</Hero>

export const withList = () => (
  <Hero title={
    <span>    Ganhe sua <strong> liberdade </strong> <br /> para ir e vir</span>
    } image={BgCarImage}>
  <ul>
    <li>Lorem ipsum dolor sit amet consect.</li>
    <li>Lorem ipsum dolor sit amet consect.</li>
    <li>Lorem ipsum dolor sit amet consect.</li>
  </ul>
</Hero>
);
