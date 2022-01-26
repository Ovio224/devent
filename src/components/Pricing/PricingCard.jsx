import {
  Box,
  Button,
  List,
  ListItem,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";

const PricingDetail = (props) => {
  const { children, iconColor, ...rest } = props;
  return (
    <ListItem
      display="flex"
      alignItems="flex-start"
      fontWeight="medium"
      maxW="260px"
      {...rest}
    >
      <CheckCircleIcon
        width={5}
        height={5}
        marginEnd="3"
        mt="1"
        color={props.iconColor}
      />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  );
};

export const PricingCard = (props) => {
  const {
    cardIdx,
    features,
    name,
    description,
    duration,
    price,
    extras,
    onClick,
    mainColor,
    colorScheme: c,
    ...rest
  } = props;
  return (
    <Box
      bg="#fafafa"
      p={{
        base: "8",
        md: "12",
      }}
      {...rest}
    >
      <Box
        m={{
          base: "-3rem -3rem 2rem",
          // md: "2rem -2rem 1rem",
        }}
        p={{
          base: "1rem 4rem",
          md: "4 16",
        }}
        borderBottom={"1px solid #eaeaea"}
        borderRadius={5}
        style={
          cardIdx === "1"
            ? {
                color: "black",
                background: "white",
              }
            : {}
        }
        bgColor={mainColor}
        color={mode("white", "whiteAlpha.900")}
      >
        <Box mt="2">
          <Text
            fontSize={{
              base: "4xl",
              md: "3xl",
            }}
            color={cardIdx === "1" ? "black" : "#d3e5ff"}
          >
            {name}
          </Text>
          <Text
            fontSize={{
              base: "6xl",
              md: "7xl",
            }}
            fontWeight="700"
          >
            {price}
          </Text>
        </Box>
      </Box>

      <Box>
        <List spacing="4">
          {features.map((feature, index) => (
            <PricingDetail iconColor={mainColor} key={index}>
              {feature}
            </PricingDetail>
          ))}
        </List>
      </Box>
      <Box
        textAlign="center"
        borderTop="1px solid #eaeaea"
        margin="2rem -3rem -3rem -3rem"
        bg="white"
      >
        <a href="/contact">
          <Button
            borderRadius={5}
            iconSpacing="3"
            rightIcon={
              <Box
                as={ArrowForwardIcon}
                fontSize="xl"
                transition="transform 0.2s"
                _groupHover={{
                  transform: "translateX(2px)",
                }}
              />
            }
            width={"xs"}
            // padding="0 8rem 0 8rem"
            my="8"
            size="lg"
            bg={mainColor}
            _hover={{
              border: `1px solid ${mainColor}`,
              color: mainColor,
              bg: "white",
            }}
            fontSize="md"
            colorScheme={"whiteAlpha"}
            onClick={onClick}
            textAlign="left"
          >
            Contact us
          </Button>
        </a>
      </Box>
    </Box>
  );
};
