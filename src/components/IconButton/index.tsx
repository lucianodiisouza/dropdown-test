import { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const IconButton = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

export default IconButton;
