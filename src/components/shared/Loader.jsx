import spinner from "../../assets/spinner.gif";

const Loader = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Loader;
