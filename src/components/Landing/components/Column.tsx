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
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdCloudDone, MdDevices } from "react-icons/md";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/column-2.json";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import GradientText from "../../Generic/GradientText";

const ColoredSpan = styled(motion.span)`
  color: #0a72ef;
`;

export const Column = () => {
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
              width={500}
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
              We turn mainstream into{" "}
              <GradientText
                startColor="#007CF0"
                endColor="#00DFD8"
                fontSize="var(--chakra-fontSizes-5xl)"
              >
                awesome
              </GradientText>
            </Heading>
            <Text fontSize="lg" mt="6" color={mode("gray.600", "gray.400")}>
              Creating eye-catching and <ColoredSpan>memorable designs</ColoredSpan> as well as meaningful
              user experience.
            </Text>
            <Text fontSize="lg" mt="6" color={mode("gray.600", "gray.400")}>
              This is the only way we can offer our clients <ColoredSpan>premium services</ColoredSpan>,
              with professional expertise and tailored results.
            </Text>
          </Box>
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
          <Feature
            title="24/7 Customer Service"
            icon={<RiCustomerService2Fill />}
          >
            Call direct anytime day or night, no phone trees or automated
            responses
          </Feature>
          <Feature title="Hosting Fees Included" icon={<MdCloudDone />}>
            Hosting fees are included right into the monthly payment
          </Feature>
          <Feature title="Support for multiple devices" icon={<MdDevices />}>
            Accessible from all screen sizes so new clients can access your site
            from anywhere
          </Feature>{" "}
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
