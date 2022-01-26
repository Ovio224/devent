import React, { useEffect } from "react";
import GradientText from "./Generic/GradientText";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/hero.json";
import { Box, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { device } from "../constants";
import { LandingBody } from "./LandingBody";

const SubHeader = styled(motion.div)`
  line-height: 1.6em !important;
  color: #666;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
  text-align: left;
`;

const HeroInnerFooter = styled(motion.div)`
  width: 29%;
  margin-top: -12%;
  margin-bottom: 18%;
  text-align: left;

  @media ${device.laptop} {
    margin-left: 8%;
  }
  @media ${device.desktop} {
    margin-left: 15%;
  }
`;

export const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <section className="hero" id="app">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-inner-banner">
            <div className="hero-inner-col left" />
            <div className="hero-inner-col right">
              <div className="hero-inner-title"></div>
              <div className="hero-inner-links">
                <div className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding" />
                  <div className="bold" data-cursor="-opaque">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Amazing.
                    </motion.span>
                  </div>
                </div>
                <div className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding" />
                  <div className="bold" data-cursor="-opaque">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Website.
                    </motion.span>
                  </div>
                </div>
                <div
                  className="hero-inner-link-item cursor-media-link"
                  data-video-src="websites"
                >
                  <div className="hero-inner-link-item-padding" />
                  <a className="bold" href="#marquee">
                    <GradientText delay={0.5}>Development.</GradientText>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="hide-on-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Lottie
              style={{ cursor: "inherit" }}
              options={defaultOptions}
              height={400}
              width={500}
            />
          </motion.div>
        </div>
        <HeroInnerFooter
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="hero-inner-footer"
        >
          <div className="hero-inner-footer-text">
            <SubHeader>
              I offer amazing website experiences for small businesses. Starting
              from only{" "}
              <GradientText
                fontWeight={700}
                fontSize="var(--chakra-fontSizes-3xl)"
              >
                $97.99
              </GradientText>{" "}
              per month.
            </SubHeader>
          </div>
          <Button
            _hover={{
              border: `1px solid black`,
              color: "black",
              bg: "white",
            }}
            border="1px solid black"
            color="white"
            size="md"
            bgColor={"black"}
            className="group"
            mt="8"
            px="8"
            fontWeight="bold"
            h="14"
            iconSpacing="3"
            borderRadius={5}
            rightIcon={
              <Box
                as={ArrowForwardIcon}
                fontSize="sm"
                transition="transform 0.2s"
                _groupHover={{
                  transform: "translateX(2px)",
                }}
              />
            }
          >
            Learn more
          </Button>
        </HeroInnerFooter>
      </div>
      <LandingBody />
    </section>
  );
};
