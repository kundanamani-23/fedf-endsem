import React from "react";

export default function OrderList({ orders, clearOrder }) {
  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <h2>Your Orders</h2>
      {orders.map((o, index) => (
        <p key={index}>
          {o.item} — ₹{o.price}
        </p>
      ))}
      <button
        onClick={clearOrder}
        style={{
          background: "#333",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Clear Orders
      </button>
    </div>
  );
}
