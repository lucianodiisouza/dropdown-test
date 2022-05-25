import { DropDownMenuProps } from "../../types";
import DropDownMenuItem from "../Item";
import { Container } from "./styles";

const DropDownContent = ({ items }: DropDownMenuProps) => {
  return (
    <Container>
      {items.map(({ element, id }) => (
        <DropDownMenuItem key={id}>{element}</DropDownMenuItem>
      ))}
    </Container>
  );
};

export default DropDownContent;
