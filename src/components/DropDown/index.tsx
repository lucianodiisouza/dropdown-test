import { useCallback, useState } from "react";
import { MoreIcon } from "../../assets/icons";
import { colors } from "../../theme";
import IconButton from "../IconButton";
import DropDownContent from "./components/Content";
import { Container } from "./styles";

const DropDown = () => {
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
      {open && <DropDownContent />}
    </Container>
  );
};

export default DropDown;
