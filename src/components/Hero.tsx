import React from "react";
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
    margin-left: 7%;
  }
  @media ${device.desktop} {
    margin-left: 15%;
  }
`;

export const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-inner-banner">
            <div className="hero-inner-col left" />
            <div className="hero-inner-col right">
              <div className="hero-inner-title">
              </div>
              <div className="hero-inner-links">
                <div className="hero-inner-link-item">
                  <div className="hero-inner-link-item-padding" />
                  <div className="bold" data-cursor="-opaque">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
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
                      transition={{ delay: 1.5 }}
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
                  <a className="bold" href="#">
                    <GradientText delay={2}>Development.</GradientText>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="hide-on-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
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
          transition={{ delay: 2.4 }}
          className="hero-inner-footer"
        >
          <div className="hero-inner-footer-text">
            <SubHeader>
              I offer amazing website experiences for small businesses.
              Starting from only{" "}
              <GradientText
                data-magnetic
                // startColor={"#007CF0"}
                // endColor={"#00DFD8"}
                fontWeight={700}
                // fontSize={"1.25rem"}
                fontSize="var(--chakra-fontSizes-3xl)"
              >
                $97.99
              </GradientText>{" "}
              per month.
            </SubHeader>
          </div>
          <Button
            colorScheme="pink"
            size="md"
            bgColor={"black"}
            className="group"
            mt="8"
            px="8"
            fontWeight="bold"
            h="14"
            iconSpacing="3"
            borderRadiu={5}
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
