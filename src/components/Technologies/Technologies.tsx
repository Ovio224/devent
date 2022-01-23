import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import '../../../technologies/hotjar.svg'

// Replace test data with your own
const features = [
  { title: "React", src: "../../../technologies/react.svg" },
  { title: "Figma", src: "../../../technologies/figma.svg" },
  { title: "Framer Motion", src: "../../../technologies/framer.svg" },
  { title: "GSAP", src: "../../../technologies/gsap-greensock.svg" },
  {
    title: "Google Analytics",
    src: "../../../technologies/google-analytics.svg",
  },
  { title: "Hotjar", src: "../../../technologies/hotjar.svg" },
  { title: "HTML5", src: "../../../technologies/html5.svg" },
  { title: "SASS", src: "../../../technologies/sass.svg" },
];

export default function Technologies() {
  return (
    <Box mt="8rem" mb="2rem" p={4}>
      <Stack mb="4rem" spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading data-cursor="-opaque" letterSpacing="tight" as="h1" size="3xl">
          Technologies we use to build your digital experience
        </Heading>
      </Stack>

      <Container maxW={"6xl"} mt='2rem'>
        <SimpleGrid data-cursor="-opaque" columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {features.map((feature) => (
            <HStack
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              key={feature.title}
              align={"top"}
            >
              <Image
                objectPosition={`50% 50%`}
                boxSize="70px"
                mb="16px"
                objectFit="scale-down"
                src={feature.src}
                alt="Dan Abramov"
              />
              <Text fontWeight={510} fontSize="18px" margin={0} marginInlineStart={'0 !important'}>
                {feature.title}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
