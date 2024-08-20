//? import hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? import services
import config from "../services/config";
//? import components
import DetailsImages from "../components/DetailsImages";
import CountPanel from "../components/CountPanel";
//? react router dom
import { Link } from "react-router-dom";

function Details({ state: { allProducts }, dispatch }) {
  //! states
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const id = useParams().productId;
  const countedProduct = allProducts?.filter((p) => p.id == id)[0];
  //! fetch product details
  useEffect(() => {
    setLoading(true);
    config
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((err) => setError(err?.message));
  }, []);
  //! jsx
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;
  if (!allProducts)
    return (
      <p>
        - First go to <Link to="/products">Products</Link> for fetching data.
      </p>
    );
  if (product) {
    const { title, images, description, price } = product;
    return (
      <div className="product-details">
        <DetailsImages images={images} />
        <span>
          <h1>{title}</h1>
          <p>{description}</p>
          <br />
          <p>{price} $</p>
          <br />
          <CountPanel allProducts={allProducts} product={countedProduct} dispatch={dispatch} />
        </span>
      </div>
    );
  }
}

export default Details;
