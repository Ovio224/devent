import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { DiCode, DiGoogleAnalytics, DiReact } from "react-icons/di";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/dev.json";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import GradientText from "../../Generic/GradientText";

const ColoredSpan = styled(motion.span)`
  color: #de1d8d;
`;

export const ColumnInverse = () => {
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
      >
        <Stack
          spacing={{
            base: "4",
            lg: "20",
          }}
          direction={{
            base: "column",
            lg: "row",
          }}
        >
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
              We{" "}
              <GradientText fontSize="var(--chakra-fontSizes-5xl)">
                build
              </GradientText>{" "}
              using the latest technologies
            </Heading>
            <Text fontSize="lg" mt="6" color={mode("gray.600", "gray.400")}>
              We work with the most <ColoredSpan>modern technology</ColoredSpan>{" "}
              that can handle a large flow of customers and maintain a{" "}
              <ColoredSpan>high level</ColoredSpan> of quality of work
            </Text>
            <Text fontSize="lg" mt="6" color={mode("gray.600", "gray.400")}>
              We do not overload the websites with unnecessary elements so that
              they <ColoredSpan>load fast</ColoredSpan> and they rank well in{" "}
              <ColoredSpan>search engines.</ColoredSpan>
            </Text>
          </Box>
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
              width={500}
            />
          </Center>
        </Stack>
        <Divider my="20" opacity={1} />
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Feature title="Latest technologies" icon={<DiReact />}>
            We use the latest and fastest technologies so that we can deliver
            the best experience
          </Feature>{" "}
          <Feature title="Google Analytics" icon={<DiGoogleAnalytics />}>
            We install Analytics for free to monitor traffic and where it comes
            from
          </Feature>{" "}
          <Feature title="Web Design & Development" icon={<DiCode />}>
            Includes over 40 hours of design, development, and testing
          </Feature>
        </SimpleGrid>
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
      alignItems={{ base: "center", md: "inherit" }}
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
