import DropDownMenuItem from "../Item";
import { Container } from "./styles";

const DropDownContent = () => {
  const deleteAction = () => {
    console.log("do something from button");
  };

  const shareAction = () => {
    console.log("do some action");
  };

  const items = [
    {
      id: 1,
      element: <p>Rename</p>,
    },
    {
      id: 2,
      element: <button onClick={deleteAction}>Delete</button>,
    },
    {
      id: 3,
      element: <button onClick={shareAction}>Share</button>,
    },
    {
      id: 4,
      element: (
        <a href="https://www.google.com" target="_blank">
          Google
        </a>
      ),
    },
  ];

  return (
    <Container>
      {items.map(({ element, id }) => (
        <DropDownMenuItem key={id}>{element}</DropDownMenuItem>
      ))}
    </Container>
  );
};

export default DropDownContent;
