import React from "react";

export default function MenuCard({ menu, restaurantName, addToOrder }) {
  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <h2>Menu — {restaurantName}</h2>
      {menu.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            padding: "10px",
            background: "#fff5f0",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <div>
            <strong>{item.item}</strong>
            <p>₹{item.price}</p>
          </div>
          <button
            onClick={() => addToOrder(item)}
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "6px",
              background: "black",
              color: "white",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
