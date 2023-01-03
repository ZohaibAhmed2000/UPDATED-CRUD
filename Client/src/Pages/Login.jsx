import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'
import InputComp from '../muiComponents/InputComp'

const Login = () => {
    
    const [values, setValues] = React.useState({
        password: '',
        email:'',
        showPassword: false,
      });
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleSubmit = ()=>{
        console.log("email",values.email)
        console.log("password",values.password)
      }
    return (
        <>
            <div className="wrapper">
                <div className="sign-box">
                    <h1 style={{marginBottom:"5%"}}>Login</h1>
                    <div>
                        <InputComp label="Email" onChange={handleChange('email')}/>
                        {/* <InputComp label="Password"/> */}
                    </div>
                    <div>
                        <FormControl sx={{width:'73%'}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <button className='btn' onClick={handleSubmit}>Login</button>
                    <div></div>
                </div>
            </div>

        </>
    )
}

export default Login