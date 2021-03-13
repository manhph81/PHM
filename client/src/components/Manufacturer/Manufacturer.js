import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Products from '../Products/Products';
import Process from '../Process/Process';
import FormProduct from '../Form/FormProduct';
import FormCareProcess from '../Form/FormProcess'

import { getProcess } from '../../actions/process';
import { getProducts } from '../../actions/products';
import { getPosts } from '../../actions/posts'
import useStyles from './styles';


const Manufacturer = () => {
    const [currentId, setCurrentId] = useState(0);
    const [isShow, setisShow] = useState(true)
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getPosts())
        dispatch(getProcess());
    }, [currentId, dispatch]);

    const isShowCreateProcess =()=>{
        setisShow(false)
    }
    const isShowCreateProduct =()=>{
        setisShow(true)
    }
    
    return (
        <Grow in>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Paper className={classes.paper} onClick={isShowCreateProduct}>
                            <Button variant="contained" color="primary">
                                Create Product
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} onClick={isShowCreateProcess}>
                            <Button variant="contained" color="primary">
                                Create Process
                            </Button>
                        </Paper>
                    </Grid>
                    
                    {
                        isShow ? (
                            <>
                                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                    <Grid item xs={12} sm={7}>
                                        <Products setCurrentId={setCurrentId} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormProduct currentId={currentId} setCurrentId={setCurrentId}  />
                                    </Grid>
                                </Grid>
                            </>
                        ) : 
                        (<>
                            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                    <Process setCurrentId={setCurrentId} />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormCareProcess currentId={currentId} setCurrentId={setCurrentId}  />
                                </Grid>
                            </Grid>
                        </>)
                    }
                </Grid>
            </Container>
        </Grow>
    );
};

export default Manufacturer;
