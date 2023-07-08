import React from 'react';
import { IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './Products/styles'

const FurnitureCard = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <section className={classes.container}>
      <div>
        <img src={product.image.url} alt={product.name} />
      </div>
      <div className={classes.cardContent}>
        <div className={classes.cardText}>
          <div className={`${classes.productTitle} bigger-title`}>
            {product.name}
          </div>
          <div className={classes.productPrice}>£{product.price.formatted}</div>
        </div>
        <div
          className={classes.productDescription}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
      <div className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </div>
    </section>
  );
};

export default FurnitureCard;
