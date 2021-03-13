import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Pro from './Process/Pro';
import useStyles from './styles';

const Process = ({ setCurrentId, proId , setproId}) => {
  const process = useSelector((state) => state.process);
  const classes = useStyles();
  
  return (
    !process.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {process.map((pro) => (
             proId !== pro.productId ? 
              <Grid key={pro._id} item xs={12} sm={6} md={6}>
                <Pro pro={pro} setCurrentId={setCurrentId} proId={proId} setproId={setproId} /> 
              </Grid>
            : null

        ))}
      </Grid>
    )
  );
};

export default Process;
