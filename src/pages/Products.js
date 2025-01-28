import { Link } from "react-router-dom";
function ProductPage() {
  return (
    <>
      <h1>Products page</h1>
      {/* <a href="/">Go to Home page</a> */}

      <p>
        Go to <Link to="/">HomePage</Link>
      </p>
    </>
  );
}

export default ProductPage;
