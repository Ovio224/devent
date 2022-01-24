import * as React from "react";
import AboutHero from "./components/AboutHero";
import { Container } from "../Generic/Container";
import AboutUsPicture from "./components/AboutUsPicture";
import { Services } from "../Services";

export default function About() {
  return (
    <>
      <AboutHero />
      <Container
        maxW="100vw"
        style={{
          background: "#fafafa",
          border: "1px solid #eaeaea",
        }}
      >
        <AboutUsPicture />
      </Container>
      <Services />
    </>
  );
}
