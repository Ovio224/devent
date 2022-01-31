import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue as mode,
  useRadioGroup,
} from "@chakra-ui/react";
import * as React from "react";
import { DurationSwitcher } from "./DurationSwitch";
import { PricingCard } from "./PricingCard";

export const Pricing = () => {
  const { getRadioProps, getRootProps, value } = useRadioGroup({
    defaultValue: "monthly",
  });
  return (
    <Box as="section" py="24">
      <Box
        maxW={{
          base: "xl",
          md: "5xl",
        }}
        mx="auto"
        px={{
          base: "2",
          md: "8",
        }}
      >
        <Flex
          direction="column"
          align={{
            base: "flex-start",
            md: "center",
          }}
          maxW="2xl"
          mx="auto"
          alignItems={{ base: "center", md: "none" }}
        >
          <Heading
            as="h1"
            size="2xl"
            letterSpacing="tight"
            fontWeight="700"
            textAlign={{
              base: "start",
              md: "center",
            }}
          >
            Find the perfect plan for you
          </Heading>
          <Text
            mt="4"
            fontSize="xl"
            textAlign={{
              base: "left",
              md: "center",
            }}
            color={mode("gray.600", "gray.400")}
          >
            For growing teams and businesses
          </Text>
          <DurationSwitcher
            getRadioProps={getRadioProps}
            getRootProps={getRootProps}
            mt="10"
          />
        </Flex>
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          alignContent={{ base: "center", md: "center" }}
        >
          <Flex
            direction={{
              base: "row",
              lg: "row",
            }}
            maxW={{
              base: "560px",
              lg: "unset",
            }}
            width={{ md: "450px" }}
            border="1px solid #eaeaea"
            mx="2"
            marginLeft="auto"
            mt="10"
            bg={mode("white", "gray.700")}
            rounded="5px"
            mb={{ base: "2rem" }}
          >
            <PricingCard
              cardIdx="1"
              flex="1"
              mainColor="black"
              name="Standard"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={value === "yearly" ? "$80.99" : "$97.99"}
              duration="Per user per month"
              extras="Additional storage: $25 / TB / month"
              features={[
                "1 landing page",
                "Unlimited Edits",
                "Includes Hosting",
                "24/7 Customer Service",
                "Lifetime Updates",
              ]}
            />
          </Flex>

          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            maxW={{
              base: "560px",
              lg: "unset",
            }}
            border="1px solid #eaeaea"
            mx="2"
            marginRight="auto"
            mt="10"
            bg={mode("white", "gray.700")}
            rounded="5px"
            width={{ md: "450px" }}
            shadow="0 8px 30px rgba(0,0,0,0.12);"
          >
            <PricingCard
              cardIdx="2"
              mainColor="#7928ca"
              flex="1"
              colorScheme="red"
              name="Plus"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              price={value === "yearly" ? "$122.99" : "$149.99"}
              duration="Per user per month"
              extras="Additional storage: $25 / TB / month"
              features={[
                "5 pages + 1 landing page",
                "Unlimited Edits",
                "Includes Hosting",
                "24/7 Customer Service",
                "Lifetime Updates",
              ]}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
