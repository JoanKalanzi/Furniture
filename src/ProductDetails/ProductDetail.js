import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { commerce } from '../lib/commerce';
import './ProductDetail.css'; 
import { Link } from 'react-router-dom';

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
    <>
    <div className="section-head col-sm-12">
    <h4>Product
    <span> Details</span> 
   </h4>
   </div>

    <div className='product'>
    <div className='details'> 
    <div className='big-img'>
    <img src={product.image.url} alt={product.name} />
    </div>
    <div className='box'>
      <div className='row'>
        <h2>Product: {product.name}</h2>
        <span>Price : £{product.price.formatted}</span>
      </div>
   
       <p dangerouslySetInnerHTML={{ __html: product.description }}>
 
       </p>
      <div className='buttons'>
       <button className='cart' onClick={handleAddToCart}>Add to Cart </button>
       <Link to="/show">
       <button className='cart'>Back to Store </button>
       </Link>
       </div>
    </div>
    </div>
    </div>

   </>
  );
};

export default ProductDetail;

