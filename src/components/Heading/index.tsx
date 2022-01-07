import React, { ReactNode } from "react";
import { Container } from "./styles";

type ComponentProps = {
  children: ReactNode | string;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  color?: "primary" | "secondary" | "white" | "black" | "gray";
  className?: string;
};
const Heading = ({
  children,
  size = "2",
  color = "primary",
  className = "",
}: ComponentProps) => {
  return (
    <Container
      bg={color}
      className={`d-inline-block fs-${size} position-relative text-${color} ${className}`}
    >
      {children}
    </Container>
  );
};

export default Heading;
