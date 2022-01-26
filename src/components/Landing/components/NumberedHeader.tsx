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
  // margin-bottom: 20px;
`;

const NumberedHeader = ({
  startColor = "#007cf0",
  endColor = "#00dfd8",
  width = "40px",
  height = "40px",
  color = "#fff",
  fontSize = "1.5rem",
  fontWeight = undefined,
  // number,
  children,
}) => {
  const Number = styled(motion.div)`
    --start-color: ${startColor};
    --end-color: ${endColor};
    width: ${width};
    height: ${height};
    color: ${color};
    display: inline-flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(90deg, var(--start-color), var(--end-color));
  `;
  const Line = styled(motion.div)`
    height: 100px;
    --start-color: #fff;
    --end-color: ${startColor};
    background: linear-gradient(var(--start-color), var(--end-color));
    padding-right: 1px;
    width: 1px;
    align-self: center;
  `;
  return (
    <NumberedHeaderContainer>
      {/*<Line />*/}
      <Section>
        {/*<Number>{number}</Number>*/}
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
