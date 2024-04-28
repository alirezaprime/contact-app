function Valid() {
  const cssStyle = {
    color: "#ff0000",
    backgroundColor: "rgb(252 229 229)",
    display: "flex",
    margin: "auto",
    width: "60%",
    marginBottom: "20px",
    borderRadius: "5px",
    fontSize: "17px",
    padding: "5px",
    display: "none",
  };
  return (
    <div>
      <p style={cssStyle}>please enter valid data</p>
    </div>
  );
}

export default Valid;
