import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  function navHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      {/* <p>Go to <a href="/products">Product list</a></p>  */}

      <p>
        <button onClick={navHandler}>Go to Product page</button>
      </p>
    </>
  );
}

export default HomePage;
