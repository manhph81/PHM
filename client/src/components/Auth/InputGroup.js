import React from 'react';
import { TextField, Grid } from '@material-ui/core';


const InputGroup = ({name,handleChange, label, half}) => {
    
    return (
        <Grid item xs={12} md={12} sm={half ? 6 : 12}>
            <TextField 
                name={name} 
                onChange={handleChange}
                variant = "outlined"
                fullWidth
                label={label} 
                InputProps={{
                    endAdornment: (
                        <datalist id="role">
                            <option  value={"Distributor"}>Distributor</option >
                            <option  value={"Manufacturer"}>Manufacturer</option >
                            <option  value={"Retailer"}>Retailer</option >
                            <option  value={"Consumer"}>Consumer</option >                          
                        </datalist>
                    ),
                    inputProps: { 
                          list: "role"
                    }
                 }}
            >
                    
            </TextField>
        </Grid>
    );
};

export default InputGroup;
