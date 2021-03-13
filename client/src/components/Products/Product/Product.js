import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeProducts, deleteProducts } from '../../../actions/products';
import useStyles from './styles';

const Product = ({ product, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  const isConfirmDelete = () =>{
    if(window.confirm('Delete the item?')) dispatch(deleteProducts(product._id))
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.productSelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.productOwner} />
      <div className={classes.overlay}>
        <Typography variant="h6">{product.productGarden}</Typography>
        <Typography variant="body2">{moment(product.productCreatedAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(product._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">Thành phần: {product.productComposition?.map((composition) => `#${composition} `)}</Typography>
      </div>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product.productName}</Typography>

      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">Loại: {product.productType}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Cách sử dụng: {product.productPackaging}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Cách đóng gói: {product.productUsing}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Cách bảo quản: {product.productPreservation}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        {/* { (user?.result) && (
          <Button size="small" color="primary" onClick={() => dispatch(likeproduct(product._id))}><ThumbUpAltIcon fontSize="small" /> Like {product?.likes?.length-1} </Button>
        )} */}
        {/* { (user?.result?.name === product?.name) && (
          
          <Button size="small" color="primary" onClick={isConfirmDelete}><DeleteIcon fontSize="small" /> Delete</Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default Product;
