import { DropDownMenuProps } from "../../types";
import DropDownMenuItem from "../Item";
import { Container } from "./styles";

const DropDownContent = ({
  items,
  alignContentX = "left",
  alignContentY = "top",
}: DropDownMenuProps) => {
  return (
    <Container alignContentX={alignContentX} alignContentY={alignContentY}>
      {items.map(({ element, id }) => (
        <DropDownMenuItem key={id}>{element}</DropDownMenuItem>
      ))}
    </Container>
  );
};

export default DropDownContent;
