const Label = ({ text }: { text: string }): JSX.Element => {
  return (
    <p
      style={{
        fontSize: "18px",
        fontFamily: "inherit",
        color: "#000000",
      }}
    >
      {text}
    </p>
  );
};

export default Label;
