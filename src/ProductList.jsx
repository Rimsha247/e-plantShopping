import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice.jsx";

const products = [
  // ==================== INDOOR PLANTS ====================
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
  },
  {
    id: 2,
    name: "Monstera",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c2d?w=500",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 22,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691144-0e56b4c0a6b4?w=500",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 24,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=500",
  },

  // ==================== SUCCULENTS ====================
  {
    id: 7,
    name: "Aloe Vera",
    price: 12,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 10,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=500",
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 14,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
  },
  {
    id: 10,
    name: "Haworthia",
    price: 11,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8c7c0e5?w=500",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 13,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b5b7b7f4e3e?w=500",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 17,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1597055181300-df90e3a8e8e2?w=500",
  },

  // ==================== FLOWERING PLANTS ====================
  {
    id: 13,
    name: "Rose Plant",
    price: 18,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500",
  },
  {
    id: 14,
    name: "Orchid",
    price: 30,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566907225471-6f8f5e5c3c0f?w=500",
  },
  {
    id: 15,
    name: "Lavender",
    price: 16,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=500",
  },
  {
    id: 16,
    name: "Hibiscus",
    price: 21,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500",
  },
  {
    id: 17,
    name: "Geranium",
    price: 19,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500",
  },
  {
    id: 18,
    name: "African Violet",
    price: 23,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
  },
];

const categories = [
  "Indoor Plants",
  "Succulents",
  "Flowering Plants",
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="products-page">
      {/* Navigation Bar */}
      <header className="navbar">
        <h2>Paradise Nursery</h2>

        <nav>
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({cartCount})
          </a>
        </nav>
      </header>

      {/* Products */}
      <main className="products-container">
        <h1>Our Houseplants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2 className="category-title">
              {category}
            </h2>

            <div className="product-grid">
              {products
                .filter(
                  (product) =>
                    product.category === category
                )
                .map((product) => (
                  <div
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>

                    <p>${product.price}</p>

                    <button
                      disabled={isInCart(product.id)}
                      onClick={() =>
                        dispatch(addToCart(product))
                      }
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;