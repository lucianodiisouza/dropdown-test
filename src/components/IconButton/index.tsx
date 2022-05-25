import { MoreIcon } from "../../assets/icons";
import { colors } from "../../theme";
import { Container } from "./styles";

const IconButton = () => {
  const onClick = () => {
    console.log("toggle action");
  };
  return (
    <Container onClick={onClick}>
      <MoreIcon size={32} color={colors.text.white100} />
    </Container>
  );
};

export default IconButton;
