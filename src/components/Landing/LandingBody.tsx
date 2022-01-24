import NumberedHeader from "./components/NumberedHeader";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Column } from "./components/Column";
import { Features } from "../Features/Features";
import { Heading } from "@chakra-ui/react";
import { Container } from "../Generic/Container";
import { ColumnInverse } from "./components/ColumnInverse";
import { ColumnThree } from "./components/ColumnThree";
import { Pricing } from "../Pricing/Pricing";
import Technologies from "../Technologies/Technologies";

const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LandingBody = () => {
  return (
    <>
      <Container>
        <HeadingContainer>
          <NumberedHeader fontSize="2rem">01.</NumberedHeader>
          <Heading as="h1" size="2xl">
            Design
          </Heading>
        </HeadingContainer>
        <Column />
        <HeadingContainer style={{ alignItems: "flex-end" }}>
          <NumberedHeader
            fontSize="2rem"
            startColor={"#7928ca"}
            endColor={"#ff0080"}
          >
            02.
          </NumberedHeader>
          <Heading as="h1" size="2xl">
            Development
          </Heading>
        </HeadingContainer>
        <ColumnInverse />
        {/*<Pricing />*/}
        <HeadingContainer>
          <NumberedHeader
            fontSize="2rem"
            startColor={"#FF4D4D"}
            endColor={"#F9CB28"}
          >
            03.
          </NumberedHeader>
          <Heading as="h1" size="2xl">
            Pricing
          </Heading>
        </HeadingContainer>
        <ColumnThree />
      </Container>
      <Container
        maxW="100vw"
        style={{
          background: "#fafafa",
          border: "1px solid #eaeaea",
        }}
      >
        <Pricing />
      </Container>
      <Container>
        <Technologies />
      </Container>
    </>
  );
};