import { useNavigate } from "react-router-dom";

const styles = () => ({
  landingDiv: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgb(100,100,100)",
  },
});

const NotFound = () => {
  const style = styles();
  const navigate = useNavigate();

  const returnBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div style={style.landingDiv}>
      <h1>404 Page Not Found</h1>
      <h3>If you think this should be a valid page let us know</h3>
      <button onClick={returnBack}>Return Back</button>
    </div>
  );
};

export default NotFound;
