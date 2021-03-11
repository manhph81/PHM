import React from 'react';
import { TextField, Grid, MenuItem } from '@material-ui/core';


const InputGroup = ({name,handleChange, label, half, value}) => {
    
    return (
        <Grid item xs={12} md={12} sm={half ? 6 : 12}>
            <TextField 
                name={name} 
                onChange={handleChange}
                variant = "outlined"
                fullWidth
                label={label} 
                select
                value={value}
            >
                    <MenuItem value={"Supplier"}>Supplier</MenuItem>
                    <MenuItem value={"Distributor"}>Distributor</MenuItem>
                    <MenuItem value={"Manufacturer"}>Manufacturer</MenuItem>
                    <MenuItem value={"Retailer"}>Retailer</MenuItem>
                    <MenuItem value={"Consumer"}>Consumer</MenuItem>
            </TextField>
        </Grid>
    );
};

export default InputGroup;
