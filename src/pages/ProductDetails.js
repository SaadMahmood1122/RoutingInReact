import { useParams, Link } from "react-router-dom";
function ProductDetails() {
  const param = useParams();
  return (
    <>
      <h1>Product Details page</h1>
      <h2>Product id is {param.productId}</h2>
      <Link to=".." relative="path">
        <p>back</p>
      </Link>
    </>
  );
}

export default ProductDetails;
