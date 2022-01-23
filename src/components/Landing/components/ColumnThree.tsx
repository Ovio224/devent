import {
  Box,
  Center,
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/column-4.json";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import GradientText from "../../Generic/GradientText";


const ColoredSpan = styled(motion.span)`
  color: #ff5b4f;
`;

export const ColumnThree = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box as="section" py="20">
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        // mx="auto"
        px={
          {
            // base: '6',
            // md: '8',
          }
        }
      >
        <Stack
            mb={20}
          spacing={{
            base: "4",
            lg: "20",
          }}
          direction={{
            base: "column",
            lg: "row",
          }}
        >
          <Center
            flex="1"
            minH="26rem"
            maxW={{
              lg: "xl",
            }}
          >
            <Lottie
              style={{ cursor: "inherit" }}
              options={defaultOptions}
              height={400}
              width={400}
            />
          </Center>
          <Box
            maxW={{
              lg: "lg",
            }}
          >
            <Heading
              size="2xl"
              mt="10"
              fontWeight="700"
              letterSpacing="tight"
              lineHeight="normal"
            >
              <GradientText
                fontSize="var(--chakra-fontSizes-5xl)"
                startColor={"#FF4D4D"}
                endColor={"#F9CB28"}
              >
                Affordable
              </GradientText>{" "}
              pricing for your growing business
            </Heading>
            <Text fontSize="lg" mt="6" color={mode("gray.600", "gray.400")}>
              <ColoredSpan>$0</ColoredSpan> down for a standard 5 page <ColoredSpan>small business website</ColoredSpan>. If you need
              more than that then we have to do custom pricing based on the
              scope of work, number of additional pages, and time involved.
            </Text>
            <Text fontSize="lg" mt="6" color={mode("gray.600", "gray.400")}>
              You own your domain, content, listing, and profiles. Cancel
              anytime with <ColoredSpan>no fees or hassle.</ColoredSpan>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
    >
      <Box fontSize="5xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};
