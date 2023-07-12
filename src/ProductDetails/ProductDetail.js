import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { commerce } from '../lib/commerce';
import './ProductDetail.css'; // Import the CSS file

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => onAddToCart(product.id, 1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await commerce.products.retrieve(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail-container">
      <div className="section-head col-sm-12">
        <h4>
          <span>Product </span> Detail
        </h4>
        <div className='image-container'>
        <img src={product.image.url} alt={product.name} />
        </div>
      
      </div>
     
      <div className="card-content">
        <div className="card-text">
          <div className="product-title bigger-title">{product.name}</div>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        <div className="product-price">£{product.price.formatted}</div>
      </div>
      <div className="card-actions">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

