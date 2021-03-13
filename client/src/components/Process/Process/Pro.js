import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {  deleteProcess, updateProcess } from '../../../actions/process';
import useStyles from './styles';

const Pro = ({ pro, setCurrentId,proId, setproId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  const isConfirmDelete = () =>{
    if(window.confirm('Delete the item?')) dispatch(deleteProcess(pro._id))
  }

  const editPro = () =>{
    
  }


  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={pro.processSelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={pro.proOwner} />
      <div className={classes.overlay}>
        <Typography variant="h6">{pro.processOwner}</Typography>
        <Typography variant="body2">{moment(pro.processCreatedAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
       <Button style={{ color: 'white' }} size="small" onClick={editPro()}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{pro.processName}</Typography>

      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">Loại: {pro.processType}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        {/* { (user?.result) && (
          <Button size="small" color="primary" onClick={() => dispatch(likepro(pro._id))}><ThumbUpAltIcon fontSize="small" /> Like {pro?.likes?.length-1} </Button>
        )} */}
        {/* { (user?.result?.name === pro?.name) && (
          
          <Button size="small" color="primary" onClick={isConfirmDelete}><DeleteIcon fontSize="small" /> Delete</Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default Pro;
