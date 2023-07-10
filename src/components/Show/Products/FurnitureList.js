import React from 'react';
import Grid from '@material-ui/core/Grid';
import FurnitureCard from '../FurnitureCard';
import useStyles from './styles';

const FurnitureList = ({ data, onAddToCart }) => {
const classes = useStyles();
  return (
    <main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justifyContent="center" spacing={4}>
      {data.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <FurnitureCard product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  </main>
  );
};

export default FurnitureList;

