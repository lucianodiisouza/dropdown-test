import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

const DropDownMenuItem = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default DropDownMenuItem;
