import React, { useState, useEffect } from "react";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";

function Select({ date, price }) {
  return (
    <div className="flex -mt-1 flex-col justify-center -space-y-1">
      <div className="font-semibold text-[#007600] text-[1rem] ">{date}</div>
      <div className=" text-gray-600">{price}</div>
    </div>
  );
}

function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();
  const paymentSummary =
    " flex w-full justify-between items-center text-gray-800 my-1";

  // State to manage the selected shipping cost
  // For simplicity, let's assume a default shipping cost for the entire order
  // In a real app, you might have a more complex logic to select shipping per item or globally
  const [selectedShippingCost, setSelectedShippingCost] = useState(0);

  // Calculate items subtotal
  const itemsSubtotal = cart.reduce((total, item) => {
    // Ensure newPrice is parsed as a float and quantity is considered
    const itemPrice = parseFloat(item.newPrice);
    const itemQuantity = item.quantity || 1;
    return total + itemPrice * itemQuantity;
  }, 0);

  const totalBeforeTax = itemsSubtotal + selectedShippingCost;
  const estimatedTax = totalBeforeTax * 0.1;
  const orderTotal = totalBeforeTax + estimatedTax;

  // Handler for delivery option selection (for radio buttons)
  const handleDeliveryOptionChange = (e) => {
    // Parse the shipping cost from the value.
    // Assuming values like "0", "4.99", "9.99"
    setSelectedShippingCost(parseFloat(e.target.value));
  };

  // Set initial shipping cost if cart has items (e.g., default to free shipping)
  useEffect(() => {
    if (cart.length > 0 && selectedShippingCost === 0) {
      // You can set a default here, e.g., if first option is free, set it initially
      // For now, it will remain 0 unless a specific option is clicked
    }
  }, [cart, selectedShippingCost]);

  return (
    <div className="p-5 md:p-8 pt-2 bg-white min-h-full">
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="sticky top-15 sm:top-20 bg-white py-2 sm:py-3 w-full z-50 md:mb-5 flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </button>
      <div className="text-xl sm:text-2xl text-gray-800 font-bold mb-5">
        Review your order
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Items */}
        <div className="order-summary order-2 lg:order-1 lg:col-span-2 grid gap-3">
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="cart-item-container grid gap-4 border border-gray-200 p-5 rounded"
              >
                <div className="text-[#007600] font-bold text-lg mb-1">
                  Delivery date: Tuesday, June 21 {/* This should be dynamic */}
                </div>

                <div className="cart-item grid gap-5">
                  <div className="grid grid-cols-[5rem_1fr] gap-5">
                    <img
                      className="w-full h-auto object-contain"
                      src={item.image}
                      alt={item.title}
                    />{" "}
                    {/* Corrected item.image to item.img */}
                    <div className="cart-item-details self-center">
                      <div className="font-semibold text-l w-9/10 text-gray-800">
                        {item.title.slice(0, 70)} ...
                      </div>
                      <div className="text-[#b12704] text-sm font-semibold ">
                        ${parseFloat(item.newPrice).toFixed(2)}
                      </div>
                      <div className="product-quantity flex items-center gap-1">
                        <span>
                          Quantity:{" "}
                          <span className="quantity-label">
                            {item.quantity || 1}
                          </span>{" "}
                          {/* Dynamic Quantity */}
                        </span>
                        <button className="text-blue-600 hover:underline ml-2">
                          Update
                        </button>
                        <button className="text-red-600 hover:underline ml-2">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="delivery-options grid gap-2">
                    <div className="delivery-options-title text-l font-semibold text-gray">
                      Choose a delivery option:
                    </div>
                    <div className="delivery-option flex flex-col gap-2">
                      {/* Radio buttons for delivery options */}
                      <Input
                        type="radio"
                        value="0" // Value for FREE Shipping
                        title={
                          <Select
                            date={"Tuesday, June 21"}
                            price={"FREE Shipping"}
                          />
                        }
                        name={`delivery-${item.id}`} // Unique name for each item's radio group
                        checked={selectedShippingCost === 0} // Check if this is the selected option
                        onChange={handleDeliveryOptionChange}
                      />
                      <Input
                        type="radio"
                        value="4.99" // Value for $4.99 Shipping
                        title={
                          <Select
                            date={"Wednesday, June 15"}
                            price={"$4.99 - Shipping"}
                          />
                        }
                        name={`delivery-${item.id}`}
                        checked={selectedShippingCost === 4.99}
                        onChange={handleDeliveryOptionChange}
                      />
                      <Input
                        type="radio"
                        value="9.99" // Value for $9.99 Shipping
                        title={
                          <Select
                            date={"Monday, June 13"}
                            price={"$9.99 - Shipping"}
                          />
                        }
                        name={`delivery-${item.id}`}
                        checked={selectedShippingCost === 9.99}
                        onChange={handleDeliveryOptionChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600 p-8 border border-gray-200 rounded">
              No items in the cart.
            </div>
          )}
        </div>

        {/* Order Summary */}
        {cart && cart.length > 0 ? (
          <div className="payment-summary order-1 lg:order-2 border border-gray-300 p-5 rounded max-h-80">
            <div className="text-lg font-bold text-gray-800">Order Summary</div>
            <div className={`${paymentSummary}`}>
              <div>Items ({cart.length}):</div>
              <div className="payment-summary-money">
                ${itemsSubtotal.toFixed(2)}
              </div>
            </div>

            <div className={`${paymentSummary}`}>
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money border-b pb-1 border-gray-400">
                ${selectedShippingCost.toFixed(2)}
              </div>
            </div>

            <div className={`${paymentSummary}`}>
              <div>Total before tax:</div>
              <div className="payment-summary-money">
                ${totalBeforeTax.toFixed(2)}
              </div>
            </div>

            <div className={`${paymentSummary}`}>
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">
                ${estimatedTax.toFixed(2)}
              </div>
            </div>
            <hr className="text-gray-400 border-gray-400 my-2" />

            <div
              className={`${paymentSummary} font-bold text-lg`}
              style={{ color: "#b12704" }}
            >
              <div>Order total:</div>
              <div className="payment-summary-money">
                ${orderTotal.toFixed(2)}
              </div>
            </div>

            <button className="w-full bg-blue-600 font-semibold text-white py-2 rounded mt-4 hover:bg-blue-700 transition-colors cursor-pointer">
              Place your order
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Checkout;
