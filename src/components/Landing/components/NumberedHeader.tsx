import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import GradientText from "../../Generic/GradientText";

const NumberedHeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NumberedHeader = ({
  startColor = "#007cf0",
  endColor = "#00dfd8",
  fontSize = "1.5rem",
  fontWeight = undefined,
  children,
}) => {
  return (
    <NumberedHeaderContainer>
      <Section>
        <h3>
          <span>
            <GradientText
              fontSize={fontSize}
              fontWeight={fontWeight}
              startColor={startColor}
              endColor={endColor}
            >
              {children}
            </GradientText>
          </span>
        </h3>
      </Section>
    </NumberedHeaderContainer>
  );
};

export default NumberedHeader;
