import { useCallback, useState } from "react";
import { MoreIcon } from "../../assets/icons";
import { colors } from "../../theme";
import IconButton from "../IconButton";
import DropDownContent from "./components/Content";
import { Container } from "./styles";
import { DropDownMenuProps } from "./types";

const DropDown = ({ ...contentProps }: DropDownMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu, setOpenMenu]);

  return (
    <Container {...contentProps}>
      <IconButton onClick={toggleOpen}>
        <MoreIcon size={32} color={colors.text.white100} />
      </IconButton>
      {openMenu && <DropDownContent {...contentProps} />}
    </Container>
  );
};

export default DropDown;
