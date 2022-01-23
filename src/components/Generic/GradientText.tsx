import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const GradientText = ({
  children,
  startColor = "#7928ca",
  endColor = "#ff0080",
  fontSize = "1.5rem",
  fontWeight = 700,
    delay= 0,
  style = {},
}) => {
  const Gradient = styled(motion.span)`
    --start-color: ${startColor};
    --end-color: ${endColor};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-left: var(--padding);
    padding-right: var(--padding);
    background-image: linear-gradient(
      90deg,
      var(--start-color),
      var(--end-color)
    );
  `;
  return (
    <Gradient
      style={style ? style : {}}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </Gradient>
  );
};

export default GradientText;
