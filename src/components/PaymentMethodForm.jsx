import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";

export default function PaymentMethodForm() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (field) => (event) => {
    setCardDetails({
      ...cardDetails,
      [field]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Payment method:", paymentMethod);
    if (paymentMethod === "creditCard") {
      console.log("Card details:", cardDetails);
    }
    // Handle form submission logic here
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 2 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: "#f8f5f2" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              bgcolor: "#5d4037",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
              fontWeight: "bold",
            }}
          >
            3
          </Box>
          <Typography
            variant="h6"
            sx={{ color: "#5d4037", fontWeight: "bold" }}
          >
            Payment Method
          </Typography>
        </Box>

        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <RadioGroup
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border:
                      paymentMethod === "creditCard"
                        ? "2px solid #5d4037"
                        : "1px solid #ccc",
                    borderRadius: 1,
                  }}
                >
                  <FormControlLabel
                    value="creditCard"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CreditCard size={20} style={{ marginRight: "8px" }} />
                        <Typography>Credit Card</Typography>
                      </Box>
                    }
                    sx={{ width: "100%" }}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border:
                      paymentMethod === "qrCode"
                        ? "2px solid #5d4037"
                        : "1px solid #ccc",
                    borderRadius: 1,
                  }}
                >
                  <FormControlLabel
                    value="qrCode"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <QrCode2 size={20} style={{ marginRight: "8px" }} />
                        <Typography>QR Code</Typography>
                      </Box>
                    }
                    sx={{ width: "100%" }}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border:
                      paymentMethod === "cod"
                        ? "2px solid #5d4037"
                        : "1px solid #ccc",
                    borderRadius: 1,
                  }}
                >
                  <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LocalShipping
                          size={20}
                          style={{ marginRight: "8px" }}
                        />
                        <Typography>Cash on Delivery</Typography>
                      </Box>
                    }
                    sx={{ width: "100%" }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        {paymentMethod === "creditCard" && (
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  required
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange("cardNumber")}
                  placeholder="1234 5678 9012 3456"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  required
                  value={cardDetails.cardholderName}
                  onChange={handleCardDetailsChange("cardholderName")}
                  placeholder="John Doe"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Expiration Date"
                  required
                  value={cardDetails.expirationDate}
                  onChange={handleCardDetailsChange("expirationDate")}
                  placeholder="MM/YY"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  required
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange("cvv")}
                  type="password"
                  placeholder="123"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                color: "text.secondary",
              }}
            >
              <Lock size={16} style={{ marginRight: "8px" }} />
              <Typography variant="caption">
                Your payment information is encrypted and secure
              </Typography>
            </Box>
          </Box>
        )}

        {paymentMethod === "qrCode" && (
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Box
              sx={{
                border: "1px dashed #ccc",
                p: 3,
                mb: 2,
                maxWidth: 300,
                mx: "auto",
              }}
            >
              <img src="/api/placeholder/250/250" alt="QR Code placeholder" />
            </Box>
            <Typography variant="body2">
              Scan this QR code with your banking app to complete the payment
            </Typography>
          </Box>
        )}

        {paymentMethod === "cod" && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2">
              Pay in cash when your order is delivered to your address. A small
              handling fee may apply.
            </Typography>
          </Box>
        )}
      </Paper>

      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            bgcolor: "#5d4037",
            color: "white",
            px: 4,
            py: 1.5,
            "&:hover": {
              bgcolor: "#3e2723",
            },
          }}
        >
          Purchase
        </Button>
      </Box>
    </Box>
  );
}
