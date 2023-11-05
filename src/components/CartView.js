import React from "react";

/* This component is used to render a static shopping cart UI, no dynamic functionality is required */

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Parcel A" },
    { id: 3, name: "Parcel C" },
  ];

  return (
    <div>
      <h1>Cart View</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
