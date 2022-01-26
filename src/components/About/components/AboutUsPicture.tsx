import * as React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import GradientText from "../../Generic/GradientText";

export default function AboutUsPicture() {
  return (
    <Box
      margin="0 auto"
      padding="0 6.5rem"
      boxSizing="border-box"
      width="100%"
      py="24"
      maxW={{
        base: "xl",
        md: "6xl",
      }}
      px={{
        base: "6",
        md: "8",
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        direction="column"
        flex="1"
        maxW={{
          lg: "520px",
        }}
        align={{
          base: "flex-start",
        }}
      >
        <GradientText
          fontSize="2.5rem"
          fontWeight={400}
          startColor="#007CF0"
          endColor="#00DFD8"
        >
          Our mission
        </GradientText>
        <Heading as="h1" size="2xl">
          Is to hear "oh wow"
        </Heading>
        <Text fontSize="10" color={"gray.600"}>
          I wasn't very inspired when I wrote this
        </Text>
        <Text color={"gray.600"} mt="12" fontSize="lg" fontWeight="medium">
          I'm Ovi, a 24 yo with a keen passion on making beautiful things
          happen. I studied IT in Copenhagen, but I still call myself a
          self-taught developer.
        </Text>
        <Text color={"gray.600"} mt="4" fontSize="lg" fontWeight="medium">
          I've tried many things in those 24 years, but apparently creating
          beautiful stuff is what gives me back energy, instead of taking it
          away. But that's how you can be assured that I'll give you a work that
          I'll be proud of.
        </Text>
        <Text color={"gray.600"} mt="4" fontSize="lg" fontWeight="medium">
          There are a limited number of clients that I'll be taking this year,
          so make sure to lock in your spot :)
        </Text>
      </Flex>
      <Image
        shadow="0 8px 30px rgba(0,0,0,0.12);"
        borderRadius={5}
        border="1px solid #eaeaea"
        data-cursor="-opaque"
        // borderRadius="full"
        // boxSize="600px"
        width={450}
        src="../../../../ovi.png"
        alt="Ovidiu C. - DEVENT Founder"
      />
    </Box>
  );
}
