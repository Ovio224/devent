import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => {
  return (
    // @ts-ignore
    <Box
      maxW={{
        base: "xl",
        md: "7xl",
      }}
      margin="0 auto"
      padding={{ base: "0 1rem", sm: "0 6.5rem" }}
      boxSizing="border-box"
      width="100%"
      {...props}
    >
      {props.children}
    </Box>
  );
};
