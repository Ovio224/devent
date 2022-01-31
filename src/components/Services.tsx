import { Box, Heading, Stack, Tag } from "@chakra-ui/react";
import GradientText from "./Generic/GradientText";
import * as React from "react";

const CustomTag = ({ children }) => (
  <Tag
    data-cursor="-opaque"
    border={"1px solid #eaeaea"}
    background="#fafafa"
    fontSize={16}
    mr={{ base: 0, md: 8 }}
    mb={8}
    padding={"12px 24px"}
    borderRadius={40}
    fontWeight={700}
  >
    {children}
  </Tag>
);

export const Services = () => {
  return (
    <Box
      alignItems=""
      as="section"
      pt="16"
      pl={{ base: "0.5rem" }}
      pr={{ base: "0.5rem" }}
      mb={16}
    >
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
            sm: "column",
            lg: "column",
            xl: "row",
          }}
          spacing={{
            base: "3rem",
            lg: "2rem",
          }}
          mt="8"
          align={{
            lg: "center",
          }}
          justify={{ base: "space-between", sm: "center", xl: "space-between" }}
          textAlign={{ base: "left", sm: "center", lg: "center", xl: "left" }}
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
              mt="sm"
              fontWeight="700"
              letterSpacing="tight"
            >
              Premium Services
            </Heading>
          </Box>
          <Box
            display={{ base: "block", md: "flex" }}
            alignItems="center"
            w={{
              base: "full",
              lg: "760px",
            }}
            h={{
              base: "auto",
              lg: "380px",
              xl: "560px",
            }}
          >
            <Box
              display={{ base: "flex", md: "block" }}
              flexDirection="column"
              alignItems="center"
            >
              <CustomTag>Web Development</CustomTag>
              <CustomTag>Maintenance</CustomTag>
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
