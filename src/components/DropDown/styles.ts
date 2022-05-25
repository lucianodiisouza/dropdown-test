import styled from "styled-components";
import { AlignmentProps } from "./types";

export const Container = styled.div<AlignmentProps>`
  display: flex;
  flex-direction: ${({ alignContentY }) =>
    alignContentY === "bottom" ? "column-reverse" : "column"};
  align-items: ${({ alignContentX }) =>
    alignContentX === "right" ? "flex-end" : "flex-start"};
`;
