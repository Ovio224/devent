import { Box, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import GradientText from "./Generic/GradientText";
import * as React from "react";

const CustomTag = ({ children }) => (
  <Tag
    data-cursor="-opaque"
    border={"1px solid #eaeaea"}
    background="#fafafa"
    fontSize={16}
    mr={8}
    mb={8}
    padding={"12px 24px"}
    // border={1px solid rgba(102,95,130,.15);
    borderRadius={40}
    fontWeight={700}
  >
    {children}
  </Tag>
);

export const Services = () => {
  return (
    <Box alignItems="" as="section" pt="16">
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
          align-items="stretch"
        >
          <Box
            // flex="1"
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
              We offer
            </GradientText>
            <Heading
              as="h1"
              size="3xl"
              // color={mode("blue.600", "blue.300")}
              mt="2"
              fontWeight="700"
              letterSpacing="tight"
            >
              Premium Services
            </Heading>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            w={{
              base: "full",
              lg: "760px",
            }}
            h={{
              base: "auto",
              lg: "560px",
            }}
          >
            <Box>
              <CustomTag>Web Development</CustomTag>
              <CustomTag>E-commerce Websites</CustomTag>
              <CustomTag>Shopify Custom Themes</CustomTag>
              <CustomTag>Shopify Stores</CustomTag>
              <CustomTag>Web Design</CustomTag>
              <CustomTag>Branding & Visual Identity</CustomTag>
              <CustomTag>Google Ads</CustomTag>
              <CustomTag>Google Maps Ads</CustomTag>
              <CustomTag>Facebook Ads</CustomTag>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
