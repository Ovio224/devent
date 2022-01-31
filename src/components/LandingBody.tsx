import NumberedHeader from "./Landing/components/NumberedHeader";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Column } from "./Landing/components/Column";
import { Heading } from "@chakra-ui/react";
import { Container } from "./Generic/Container";
import { ColumnInverse } from "./Landing/components/ColumnInverse";
import { ColumnThree } from "./Landing/components/ColumnThree";
import { Pricing } from "./Pricing/Pricing";
import Technologies from "./Technologies/Technologies";
import Marquee from "./Marquee";
import { device } from "../constants";

const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobileS} {
    align-items: center !important;
  }

  @media ${device.tablet} {
    align-items: flex-start !important;
  }
`;

const HeadingContainerEnd = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${device.mobileS} {
    align-items: center !important;
  }

  @media ${device.tablet} {
    align-items: flex-end !important;
  }
`;

export const LandingBody = () => {
  return (
    <>
      <Marquee />
      <Container>
        <HeadingContainer>
          <NumberedHeader fontSize="2rem">01.</NumberedHeader>
          <Heading as="h1" size="2xl">
            Design
          </Heading>
        </HeadingContainer>
        <Column />
        <HeadingContainerEnd style={{ alignItems: "flex-end" }}>
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
        </HeadingContainerEnd>
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
