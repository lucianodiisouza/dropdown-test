import DropDownMenuItem from "../Item";

const items = [
  {
    label: "Save",
  },
  {
    label: "Share",
  },
  {
    label: "Delete",
  },
];

const DropDownContent = () => {
  return (
    <>
      {items.map(({ label }) => (
        <DropDownMenuItem key={label}>{label}</DropDownMenuItem>
      ))}
    </>
  );
};

export default DropDownContent;
