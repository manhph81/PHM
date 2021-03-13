import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Products from '../Products/Products';
import FormProduct from '../Form/FormProduct';


import { getProcess } from '../../actions/process';
import { getProducts } from '../../actions/products';
import { getPosts } from '../../actions/posts'
import useStyles from './styles';

import FormProcess from '../Form/FormProcess'
import Process from '../Process/Process';

const Manufacturer = () => {
    const [currentId, setCurrentId] = useState(0);
    const [proId, setproId] = useState(0);
    const [isShow, setisShow] = useState(false)
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getPosts())
        dispatch(getProcess());
    }, [currentId, dispatch]);
    return (
        
        <Grow in>
            <Container>
                <Grid container spacing={2} >
                    {isShow==false ? (
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Products setCurrentId={setCurrentId} setisShow={setisShow} setproId={setproId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormProduct currentId={currentId} setCurrentId={setCurrentId}  />
                            </Grid>
                        </Grid>
                    ):(
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Process setCurrentId={setCurrentId} proId={proId} setproId={setproId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormProcess currentId={currentId} setCurrentId={setCurrentId} setproId={setproId} setisShow={setisShow}   />
                            </Grid>
                        </Grid>
                    )
                }
                </Grid>
            </Container>
        </Grow>
    );
};

export default Manufacturer;
