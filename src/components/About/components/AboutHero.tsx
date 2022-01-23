import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiPlay } from "react-icons/hi";
import GradientText from "../../Generic/GradientText";
import animationData from '../../../assets/lotties/wave.json'
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  // rendererSettings: {
  //   preserveAspectRatio: "xMidYMid slice",
  // },
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
          justify="space-between"
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
              // color={mode("blue.600", "blue.300")}
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
          >
            <Lottie
              style={{ cursor: "inherit" }}
              options={defaultOptions}
              height={600}
              width={800}
            />
            {/*<Img*/}
            {/*  w="full"*/}
            {/*  pos="relative"*/}
            {/*  zIndex="1"*/}
            {/*  h={{*/}
            {/*    lg: "100%",*/}
            {/*  }}*/}
            {/*  objectFit="cover"*/}
            {/*  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"*/}
            {/*  alt="Screening talent"*/}
            {/*/>*/}
            {/*<Box*/}
            {/*  pos="absolute"*/}
            {/*  w="100%"*/}
            {/*  h="100%"*/}
            {/*  top="-4"*/}
            {/*  left="-4"*/}
            {/*  bg={mode("gray.200", "gray.700")}*/}
            {/*/>*/}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
