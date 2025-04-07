import React, { useState } from "react";

export default function PaymentMethodForm() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "16px" }}>
      <div
        style={{
          padding: "24px",
          marginBottom: "24px",
          backgroundColor: "#f8f5f2",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#5d4037",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
              fontWeight: "bold",
            }}
          >
            3
          </div>
          <h2 style={{ color: "#5d4037", fontWeight: "bold", margin: 0 }}>
            Payment Method
          </h2>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <div
              style={{
                flex: "1",
                minWidth: "200px",
                padding: "16px",
                border:
                  paymentMethod === "creditCard"
                    ? "2px solid #5d4037"
                    : "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => handlePaymentMethodChange("creditCard")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  checked={paymentMethod === "creditCard"}
                  onChange={() => handlePaymentMethodChange("creditCard")}
                  style={{ marginRight: "8px" }}
                />
                <label
                  htmlFor="creditCard"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>💳</span>
                  <span>Credit Card</span>
                </label>
              </div>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "200px",
                padding: "16px",
                border:
                  paymentMethod === "qrCode"
                    ? "2px solid #5d4037"
                    : "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => handlePaymentMethodChange("qrCode")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  id="qrCode"
                  name="paymentMethod"
                  checked={paymentMethod === "qrCode"}
                  onChange={() => handlePaymentMethodChange("qrCode")}
                  style={{ marginRight: "8px" }}
                />
                <label
                  htmlFor="qrCode"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>📱</span>
                  <span>QR Code</span>
                </label>
              </div>
            </div>

            <div
              style={{
                flex: "1",
                minWidth: "200px",
                padding: "16px",
                border:
                  paymentMethod === "cod"
                    ? "2px solid #5d4037"
                    : "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => handlePaymentMethodChange("cod")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  checked={paymentMethod === "cod"}
                  onChange={() => handlePaymentMethodChange("cod")}
                  style={{ marginRight: "8px" }}
                />
                <label
                  htmlFor="cod"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>🚚</span>
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {paymentMethod === "creditCard" && (
          <div style={{ marginTop: "24px" }}>
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                Card Number *
              </label>
              <input
                type="text"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange("cardNumber")}
                placeholder="1234 5678 9012 3456"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                Cardholder Name *
              </label>
              <input
                type="text"
                value={cardDetails.cardholderName}
                onChange={handleCardDetailsChange("cardholderName")}
                placeholder="John Doe"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ flex: "1", minWidth: "200px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Expiration Date *
                </label>
                <input
                  type="text"
                  value={cardDetails.expirationDate}
                  onChange={handleCardDetailsChange("expirationDate")}
                  placeholder="MM/YY"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                  }}
                />
              </div>

              <div style={{ flex: "1", minWidth: "200px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  CVV
                </label>
                <input
                  type="password"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange("cvv")}
                  placeholder="123"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "16px",
                color: "#666",
              }}
            >
              <span style={{ marginRight: "8px" }}>🔒</span>
              <span style={{ fontSize: "14px" }}>
                Your payment information is encrypted and secure
              </span>
            </div>
          </div>
        )}

        {paymentMethod === "qrCode" && (
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            <div
              style={{
                border: "1px dashed #ccc",
                padding: "24px",
                marginBottom: "16px",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              <img
                src="/api/placeholder/250/250"
                alt="QR Code placeholder"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <p style={{ fontSize: "16px" }}>
              Scan this QR code with your banking app to complete the payment
            </p>
          </div>
        )}

        {paymentMethod === "cod" && (
          <div style={{ marginTop: "24px" }}>
            <p style={{ fontSize: "16px" }}>
              Pay in cash when your order is delivered to your address. A small
              handling fee may apply.
            </p>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#050200",
            color: "white",
            padding: "12px 32px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
