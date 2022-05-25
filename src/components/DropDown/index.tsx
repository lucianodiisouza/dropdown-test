import { useCallback, useState } from "react";
import { MoreIcon } from "../../assets/icons";
import { colors } from "../../theme";
import IconButton from "../IconButton";
import DropDownContent from "./components/Content";
import { Container } from "./styles";
import { DropDownMenuProps } from "./types";

const DropDown = ({ ...contentProps }: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(!open);
    console.log(open);
  }, [open, setOpen]);

  return (
    <Container>
      <IconButton onClick={toggleOpen}>
        <MoreIcon size={32} color={colors.text.white100} />
      </IconButton>
      {open && <DropDownContent {...contentProps} />}
    </Container>
  );
};

export default DropDown;
