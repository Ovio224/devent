import * as React from "react";
import { useState } from "react";
import { Container as CustomContainer } from "./Generic/Container";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue as mode,
  useRadio,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangeDescription = (event) => setDescription(event.target.value);
  const toast = useToast();

  const options = ["$97.99/m", "$149.99/m"];

  const {
    getRootProps,
    getRadioProps,
    value: radioValue,
  } = useRadioGroup({
    name: "framework",
    defaultValue: "$149.99/m",
  });

  const group = getRootProps();

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .post("https://actionforms.io/e/r/contact-devent-studio", {
        name,
        email,
        description,
        plan: radioValue,
      })
      .then(() => {
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "A problem occurred.",
          description:
            "Please try again or message us directly at deventstudio.info@gmail.com",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <CustomContainer
      maxW="100vw"
      style={{
        background: "#fafafa",
        border: "1px solid #eaeaea",
      }}
    >
      <Box as="section" pt="16" pb="24">
        <Box
          pt="24"
          maxW={{
            base: "6xl",
            // md: "6xl",
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
            justify="center"
          >
            <Box
              textAlign="center"
              flex="1"
              maxW={{
                lg: "760px",
              }}
            >
              <Heading
                as="h1"
                size="4xl"
                mt="2"
                fontWeight="700"
                letterSpacing="tight"
              >
                We're here to help
              </Heading>
              <Text
                color={mode("gray.600", "gray.400")}
                mt="3"
                fontSize="xl"
                fontWeight="medium"
              >
                Get in touch and let us know how we can help.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Container
          // bg="#9DC4FB"
          maxW="full"
          mt={70}
          centerContent
          overflow="hidden"
        >
          <Flex mb={10}>
            <form onSubmit={submitForm}>
              <Stack spacing={10}>
                <FormControl>
                  <FormLabel htmlFor="email">Name & Company</FormLabel>
                  <Input
                    _placeholder={{ color: "#00000026" }}
                    value={name}
                    onChange={handleChangeName}
                    required
                    placeholder="John from Terra, Inc."
                    focusBorderColor={"#de1d8d"}
                    shadow="0px 2px 7px rgb(0 0 0 / 7%)"
                    size="lg"
                    width="20vw"
                    bg="white"
                    id="name"
                    type="name"
                    borderRadius={5}
                  />
                </FormControl>{" "}
                <FormControl>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    _placeholder={{ color: "#00000026" }}
                    value={email}
                    onChange={handleChangeEmail}
                    required
                    placeholder="john@terra.com"
                    focusBorderColor={"#de1d8d"}
                    shadow="0px 2px 7px rgb(0 0 0 / 7%)"
                    size="lg"
                    width="20vw"
                    bg="white"
                    id="email"
                    type="email"
                    borderRadius={5}
                  />
                </FormControl>{" "}
                <FormControl>
                  <HStack {...group}>
                    {options.map((value) => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </HStack>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Project Description</FormLabel>
                  <Textarea
                    _placeholder={{ color: "#00000026" }}
                    value={description}
                    onChange={handleChangeDescription}
                    required
                    placeholder="I need a better website for my business that helps me mark my presence in the online community so that I can get more customers in"
                    focusBorderColor={"#de1d8d"}
                    shadow="0px 2px 7px rgb(0 0 0 / 7%)"
                    size="lg"
                    width="20vw"
                    height="10vh"
                    bg="white"
                    id="message"
                    type="message"
                    borderRadius={5}
                  />
                </FormControl>
                <Button
                  type="submit"
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
                  data-cursor="-opaque"
                  my="8"
                  size="lg"
                  bg={"black"}
                  _hover={{
                    border: `1px solid ${"black"}`,
                    color: "black",
                    bg: "white",
                  }}
                  fontSize="md"
                  colorScheme={"whiteAlpha"}
                  // onClick={submitForm}
                  textAlign="left"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Flex>
        </Container>
      </Box>
    </CustomContainer>
  );
}

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box width="100%" textAlign="center" as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _hover={{ background: 'white' }}
        _checked={{
          bg: "black",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        transition="background 0.2s"
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
