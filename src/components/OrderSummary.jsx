import React from "react";

export default function OrderSummary({ orders }) {
  const total = orders.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{
      background: "#ffe6d5",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
    }}>
      <h2 style={{ color: "#ff7f32" }}>Order Summary</h2>
      <p>Total Items: {orders.length}</p>
      <p style={{ fontWeight: "bold", fontSize: "18px", color: "#ff4d00" }}>
        Total Amount: ₹{total}
      </p>
    </div>
  );
}
