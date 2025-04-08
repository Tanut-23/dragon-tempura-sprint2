import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Container,
  Paper,
  Stack,
} from "@mui/material";

function Shipping() {
  return (
    <div className="">
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 3, mt: 8, mb: 4 }}>
          <Box mb={3} display="flex" alignItems="center">
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                bgcolor: "#62483a",
                color: "#f0e0d0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Typography variant="" color="#f0e0d0">
                1
              </Typography>
            </Box>
            <Typography variant="h5" component="h2" color="#62483a">
              Shipping Address
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              fullWidth
              id="phone"
              label="Phone Number"
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              fullWidth
              id="addressLine1"
              label="Address Line 1"
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id="addressLine2"
              label="Address Line 2"
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State/Province"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  required
                  fullWidth
                  id="zipCode"
                  label="ZIP/Postal Code"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <TextField
                required
                fullWidth
                id="country"
                label="Country"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export default Shipping;
