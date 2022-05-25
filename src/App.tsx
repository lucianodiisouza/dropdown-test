import { DropDown } from "./components";

function App() {
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
    <div className="app">
      <div className="row">
        <DropDown items={items} />
        <DropDown items={items} />
      </div>

      <div className="row end">
        <DropDown items={items} />
        <DropDown items={items} />
      </div>
    </div>
  );
}

export default App;
