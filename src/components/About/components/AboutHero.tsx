import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import GradientText from "../../Generic/GradientText";
import animationData from "../../../assets/lotties/wave.json";
import Lottie from "react-lottie";
import { LottieContainer } from "../../Generic/LottieContainer";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
  animationData,
};

export default function AboutHero() {
  return (
    <Box as="section" pt="16" pb="24">
      <Box
        maxW={{
          base: "xl",
          md: "6xl",
        }}
        mx="auto"
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "3rem",
            lg: "2rem",
          }}
          mt="8"
          align={{
            lg: "center",
          }}
          justify={{ base: "space-between", sm: 'center', xl: 'space-between' }}
          textAlign={{ base: "left", sm: 'center', lg: 'center', xl: 'left' }}
        >
          <Box
            flex="1"
            maxW={{
              lg: "520px",
            }}
          >
            <GradientText
              fontSize="2.5rem"
              fontWeight={400}
              startColor="#007CF0"
              endColor="#00DFD8"
            >
              We design amazing
            </GradientText>
            <Heading
              as="h1"
              size="3xl"
              mt="2"
              fontWeight="700"
              letterSpacing="tight"
            >
              Websites for any business
            </Heading>
            <Text
              color={mode("gray.600", "gray.400")}
              mt="12"
              fontSize="lg"
              fontWeight="medium"
            >
              We are a remote design agency based in Bucharest, working with
              clients around the world. As passionate designers, we love
              building products that are easy to use, accessible, engaging, and
              delightful.
            </Text>
          </Box>
          <Box
            pos="relative"
            w={{
              base: "full",
              lg: "560px",
            }}
            h={{
              base: "auto",
              lg: "560px",
            }}
            display={{ base: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' }}
          >
            <LottieContainer>
            <Lottie
              style={{ cursor: "inherit" }}
              options={defaultOptions}
              height={600}
              width={550}
            />
            </LottieContainer>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
