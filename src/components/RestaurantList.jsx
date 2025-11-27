import React from "react";

export default function RestaurantList({ restaurants, onSelect }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Restaurant</h2>
      {restaurants.map(r => (
        <button
          key={r.id}
          onClick={() => onSelect(r)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#4B6B7A",
            color: "white",
            cursor: "pointer"
          }}
        >
          {r.name}
        </button>
      ))}
    </div>
  );
}
