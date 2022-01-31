import React from "react";
import { Box } from "@chakra-ui/react";

export const LottieContainer = (props) => {
  return (
    // @ts-ignore
    <Box display={{ base: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }} {...props}>
      {props.children}
    </Box>
  );
};
