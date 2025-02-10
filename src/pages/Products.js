import { Link } from "react-router-dom";

const productsArr = [
  { id: "p1", iteam: "product-1" },
  { id: "p2", iteam: "product-2" },
  { id: "p3", iteam: "product-3" },
];
function ProductPage() {
  return (
    <>
      <h1>Products page</h1>
      {/* <a href="/">Go to Home page</a> */}

      <p>
        Go to <Link to="/">HomePage</Link>
      </p>

      <ul>
        {productsArr.map((prod) => {
          return (
            <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.iteam}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductPage;
