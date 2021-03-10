import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextareaAutosize } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'


const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)

    const [isSignup, setIsSignup] = useState(false)
    
    const handleShowPassword=()=> setShowPassword((prevShowPassword)=>!prevShowPassword)
    
    const handleSubmit=()=>{

    }

    const handleChange=()=>{

    }

    const switchMode =()=>{
        setIsSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false)
    }
   


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}> 
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                           isSignup && (
                               <>
                                    <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half>
                                    </Input>
                                    <Input name="lastName" label="Last name" handleChange={handleChange} half>
                                    </Input>
                               </>
                           ) 
                        }
                        <Input name="email" label="Email" handleChange={handleChange} type="email">
                        </Input>
                        <Input name="password" label="Password" handleChange={handleChange}type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}>
                        </Input>
                        {
                            isSignup && <Input name = "confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"></Input>
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" className={classes.submit} color="secondary"> 
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
