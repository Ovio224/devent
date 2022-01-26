import * as React from "react";
import { useEffect } from "react";
import AboutHero from "./components/AboutHero";
import { Container } from "../Generic/Container";
import AboutUsPicture from "./components/AboutUsPicture";
import { Services } from "../Services";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
