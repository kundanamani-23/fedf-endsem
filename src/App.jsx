import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import MenuCard from "./components/MenuCard";
import OrderList from "./components/OrderList";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

export default function App() {
  // STATIC RESTAURANTS DATA
  const restaurants = [
    {
      id: 1,
      name: "Royal Spice",
      menu: [
        { id: 1, item: "Paneer Butter Masala", price: 180 },
        { id: 2, item: "Veg Biryani", price: 150 },
        { id: 3, item: "Butter Naan", price: 30 }
      ]
    },
    {
      id: 2,
      name: "Ocean Taste",
      menu: [
        { id: 4, item: "Fish Fry", price: 220 },
        { id: 5, item: "Prawns Curry", price: 260 },
        { id: 6, item: "Crab Soup", price: 150 }
      ]
    },
    {
      id: 3,
      name: "Desi Zaika",
      menu: [
        { id: 7, item: "Chicken Tikka", price: 200 },
        { id: 8, item: "Mutton Rogan Josh", price: 320 },
        { id: 9, item: "Jeera Rice", price: 90 }
      ]
    },
    {
      id: 4,
      name: "Italiano Café",
      menu: [
        { id: 10, item: "Cheese Pasta", price: 180 },
        { id: 11, item: "Margherita Pizza", price: 250 },
        { id: 12, item: "Garlic Bread", price: 120 }
      ]
    },
    {
      id: 5,
      name: "Asian Delight",
      menu: [
        { id: 13, item: "Hakka Noodles", price: 140 },
        { id: 14, item: "Veg Manchurian", price: 160 },
        { id: 15, item: "Spring Rolls", price: 120 }
      ]
    }
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [orders, setOrders] = useState([]);

  // ADD ITEM TO ORDER
  const addToOrder = (menuItem) => {
    setOrders([...orders, menuItem]);
  };

  // CLEAR ALL ORDERS
  const clearOrder = () => {
    setOrders([]);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        {/* RESTAURANT LIST */}
        <RestaurantList
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />

        {/* MENU OF SELECTED RESTAURANT */}
        {selectedRestaurant && (
          <MenuCard
            menu={selectedRestaurant.menu}
            restaurantName={selectedRestaurant.name}
            addToOrder={addToOrder}
          />
        )}

        {/* ORDER LIST */}
        {orders.length > 0 && (
          <OrderList orders={orders} clearOrder={clearOrder} />
        )}

        {/* ORDER SUMMARY */}
        {orders.length > 0 && <OrderSummary orders={orders} />}
      </div>
    </>
  );
}
