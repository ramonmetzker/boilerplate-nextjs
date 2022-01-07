import React, { ReactNode } from "react";
import { DisabledButton, PrimaryButton, SecondaryButton } from "./styles";

type ComponentProps = {
  variant: "primary" | "secondary";
  disabled?: boolean;
  children: ReactNode;
};
const Button = ({ children, variant, disabled = false }: ComponentProps) => {
  if (disabled) {
    return <DisabledButton disabled={disabled}>{children}</DisabledButton>;
  }
  if (variant === "primary") {
    return <PrimaryButton disabled={disabled}>{children}</PrimaryButton>;
  } else {
    return <SecondaryButton disabled={disabled}>{children}</SecondaryButton>;
  }
};

export default Button;
