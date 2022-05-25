import styled from "styled-components";
import { colors } from "../../../../theme";

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: ${colors.background.black400};
  padding: 15px 10px;
  color: ${colors.text.white200};

  &:hover {
    background-color: ${colors.general.blue400};
    transition: ease-in-out 0.2s;
  }
`;
