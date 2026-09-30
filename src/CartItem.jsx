import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice.jsx";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of plants in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Calculate total cost for one item
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total cart cost
  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalCost(item),
      0
    );
  };

  return (
    <div className="cart-page">
      <header className="navbar">
        <h2>e-plantShopping</h2>

        <nav>
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({calculateTotalAmount()})
          </a>
        </nav>
      </header>

      <main className="cart-container">
        <h1>Shopping Cart</h1>

        <h2>
          Total Plants: {calculateTotalAmount()}
        </h2>

        {cartItems.length === 0 ? (
          <div>
            <p>Your shopping cart is empty.</p>

            <a href="/plants">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ${item.price.toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      Quantity: {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Total Cost: $
                    {calculateTotalCost(item).toFixed(2)}
                  </p>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>
              Total Cart Amount: $
              {calculateCartTotal().toFixed(2)}
            </h2>

            <div className="cart-actions">
              <a href="/plants">
                Continue Shopping
              </a>

              <button
                onClick={() =>
                  alert("Checkout Coming Soon!")
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;