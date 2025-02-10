import { useParams } from "react-router-dom";
function ProductDetails() {
  const param = useParams();
  return (
    <>
      <h1>Product Details page</h1>
      <h2>Product id is {param.productId}</h2>
    </>
  );
}

export default ProductDetails;
