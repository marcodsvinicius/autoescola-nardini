import React from 'react'
import { text } from "@storybook/addon-knobs"
import Hero from "../components/Hero";
import BgHighwayImage from "../stories/assets/carro.jpg";
import BgCarImage from "../stories/assets/carro2.jpg";
import GlobalStyle from "../styles/GlobalStyle"
import Heading from "./Heading";

export default {
  title: "Components / Hero",
  component: Hero,
}

export const usage = () => 
<Hero image={BgHighwayImage}>
  <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
  <p>{text("text", "A auto escola lider em aprovação.")}</p>
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
