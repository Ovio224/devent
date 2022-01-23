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
          My mission
        </GradientText>
        <Heading as="h1" size="2xl">
          Is to make you smile
        </Heading>
        <Text color={"gray.600"}>I swear I'm funny sometimes</Text>
        <Text color={"gray.600"} mt="12" fontSize="lg" fontWeight="medium">
          I know I'm talking about smiles and I've got the biggest frown in the
          pic. It's just that when I took the picture, everybody was trying to
          make me laugh and the photograph was done with it and he only sent me
          bad pictures
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
        alt="Dan Abramov"
      />
    </Box>
  );
}
