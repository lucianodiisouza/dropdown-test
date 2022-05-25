import styled from "styled-components";
import { AlignmentProps } from "../../types";

export const Container = styled.div<AlignmentProps>`
  width: 250px;
  position: relative;
  z-index: 999;

  top: ${({ alignContentY }) => (alignContentY === "top" ? "0" : undefined)};
  bottom: ${({ alignContentY }) =>
    alignContentY === "bottom" ? "0" : undefined};
  left: ${({ alignContentX }) => (alignContentX === "left" ? "0" : undefined)};
  right: ${({ alignContentX }) =>
    alignContentX === "right" ? "0" : undefined};
`;
