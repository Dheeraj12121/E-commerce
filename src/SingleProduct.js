
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import { useEffect } from 'react';

const API = 'https://api.pujakaitem.com/api/products'

const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

    const { id } = useParams();
  
    const {
      id: alias,
      name,
      company,
      price,
      description,
      category,
      stock,
      stars,
      reviews,
      image,
    } = singleProduct;
  
    useEffect(() => {
      getSingleProduct(`${API}?id=${id}`);
    }, []);
  
    if (isSingleLoading) {
      return <div className="page_loading">Loading.....</div>;
    }
  return (
    <div>
    <div className="grid">
        <div className="">
            <img
                src={image}
            />
        </div>
        <h1>{name}</h1>
    </div>
    </div>
  )
}

export default SingleProduct