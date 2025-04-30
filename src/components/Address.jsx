import { Box, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function Address() {
  return (
    <Paper elevation={3}
    sx={{ p: 3, mb: 4, bgcolor: "#f9f7f3", color: "#62483a" }}>
        <Box className="flex items-center mb-[24px]">
              <Box className="flex items-center justify-center w-8 h-8 mr-2 bg-[#62483a] text-white rounded-full">
                <Typography variant="subtitle1" className="font-bold">
                  2
                </Typography>
              </Box>
              <Typography variant="h5" className="font-bold text-[#62483a]">
                Shipping Address
              </Typography>
    </Box>
    <div id="overAll" className='flex flex-col'>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="firstName"
        label="First Name"
        variant="outlined"
        placeholder="First Name"
        margin="normal"/>
        <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        variant="outlined"
        placeholder="Last Name"
        margin="normal"/>
    </div>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="emailAddress"
        label="Email Address"
        variant="outlined"
        placeholder="Email Address"
        margin="normal"/>
        <TextField
        required
        fullWidth
        id="phoneNumber"
        label="Phone Number"
        variant="outlined"
        placeholder="Phone Number"
        margin="normal"/>
    </div>
    <TextField
        required
        fullWidth
        id="addressLineOne"
        label="Address Line 1"
        variant="outlined"
        placeholder="Address Line 1"
        margin="normal"/>
        <TextField
        // required
        fullWidth
        id="addressLineTwo"
        label="Address Line 2"
        variant="outlined"
        placeholder="Address Line 2"
        margin="normal"/>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="city"
        label="City"
        variant="outlined"
        placeholder="City"
        margin="normal"/>
        <TextField
        required
        fullWidth
        id="stateAndProvince"
        label="State/Province"
        variant="outlined"
        placeholder="State/Province"
        margin="normal"/>
    </div>
    <div className='flex gap-[24px]'>
    <TextField
        required
        fullWidth
        id="zip"
        label="ZIP/Postal Code"
        variant="outlined"
        placeholder="ZIP/Postal Code"
        margin="normal"/>
        <TextField
        required
        fullWidth
        id="country"
        label="Country"
        variant="outlined"
        placeholder="Country"
        margin="normal"/>
    </div>
    </div>
    </Paper>
  )
}

export default Address