import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      {/* <p>Go to <a href="/products">Product list</a></p>  */}

      <p>
        Go to <Link to="/products">Product list</Link>
      </p>
    </>
  );
}

export default HomePage;
