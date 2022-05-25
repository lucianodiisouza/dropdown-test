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
        <p key={label}>{label}</p>
      ))}
    </>
  );
};

export default DropDownContent;
