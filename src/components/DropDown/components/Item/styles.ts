import styled from "styled-components";
import { colors } from "../../../../theme";

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: ${colors.background.black400};
  padding: 15px 10px;
  color: ${colors.text.white200};

  button {
    width: 100%;
    height: 100%;
    border: none;
    color: ${colors.text.white200};
    background: transparent;
    text-align: left;
  }

  a {
    display: flex;
    flex: 1;
    text-decoration: none;
    color: ${colors.text.white200};
  }

  &:hover {
    background-color: ${colors.general.blue400};
    transition: ease-in-out 0.2s;
  }
`;
