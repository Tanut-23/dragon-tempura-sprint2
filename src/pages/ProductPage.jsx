import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadcrumbsNav from "../components/BreadcrumbsNav";
import ButtonSubmit from "../components/ButtonSubmit";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { useCart } from "../contexts/CartContext";
import axios from "axios";
import baseURL from "../../service/api";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [isInCartDB, setIsInCartDB] = useState(false);
  const [loading, setLoading] = useState(true);

  const { cartItems, setCartItems } = useCart(); //From Cart Context
  const links = [
    { label: "Home", to: "/" },
    { label: "Collections", to: "/mainshop" },
    { label: "Type", to: "/shoppage" },
  ];
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/product/${productId}`);
        // console.log(res.data.product)
        setProduct(res.data?.product ?? null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  //Get data of cart items from Database
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/cart-get`, {
          withCredentials: true,
        });
        const fetchdCartItems = res.data.cart.items;
        setCartItems(fetchdCartItems);
      } catch (err) {
        console.error(
          "Error fetching cart:",
          err.response?.data || err.message
        );
      }
    };
    fetchCart();
  }, []);

  // Update `isInCartDB` whenever `product` or `cartItems` change
  useEffect(() => {
    if (product && cartItems) {
      const isInCart = cartItems.some((item) => item.productId._id === product._id);
      // console.log(cartItems[0]?.productId._id);
      setIsInCartDB(isInCart);
    } else {
      setIsInCartDB(false);
    }
  }, [cartItems]);

  //Check if this product is already in cart
  // useEffect(() => {
  //   if (product) {
  //     setIsInCartDB(cartItems?.some((item) => item.productId == product._id));
  //   }
  // }, [cartItems, product]);

  //Add product to cart in Database
  const addProductToDB = async (product) => {
    try {
      const newProduct = {
        items: {
          productId: product._id?.toString(),
          title: product.title,
          image: product.image,
          artist: product.artist,
          price: product.price,
          quantity: 1,
        },
      };
      console.log(
        "Payload being sent to backend:",
        JSON.stringify(newProduct, null, 2)
      );

      await axios.post(`${baseURL}/api/cart-add`, newProduct, {
        withCredentials: true,
      });
      //update cart context
      setCartItems((prev) => [...prev, newProduct.items]);
      setIsInCartDB(false);
    } catch (err) {
      console.error("Add to cart failed:", err.response?.data || err.message);
    }
  };

  //Remove Product from Database
  const removeProductFromDB = async (product) => {
    try {
      await axios.delete(`${baseURL}/api/cart-delete/${product._id}`, {
        withCredentials: true,
      });
      setCartItems((prev) =>
        prev.filter((item) => item.productId._id !== product._id)
      );
      setIsInCartDB(true);
    } catch (err) {
      console.error("Add to cart failed:", err.response?.data || err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product not found
      </div>
    );
  }

  return (
    <main className="bg-[#f2eee7]">
      <div className="px-4 py-6 max-w-7xl mx-auto xl:px-12 2xl:px-20">
        <BreadcrumbsNav links={links} currentPage={product.title} />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product image */}
          <div className="md:w-1/2 xl:max-w-[600px]">
            <div className="shadow-md shadow-gray-700 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold text-[#5c3c2e] mb-1">
              {product.title}
            </h1>
            <p className="mb-6">By {product.artist}</p>
            <p className="text-2xl font-semibold mb-8">
              ${product.price.toLocaleString()}
            </p>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Description</h2>
              <p className="leading-relaxed text-justify">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Edition Details</h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Dimensions:</span>{" "}
                  {product.dimensions}
                </p>
                <p>
                  <span className="font-semibold">Artist:</span>{" "}
                  {product.artist}
                </p>
                <p>
                  <span className="font-semibold">Material:</span>{" "}
                  {product.material}
                </p>
                <p>
                  <span className="font-semibold">Year:</span> {product.year}
                </p>
              </div>
            </div>

            <ButtonSubmit
              width="100%"
              label={isInCartDB ? "Remove from Cart" : "Add to Cart"}
              onClick={() => {
                if (isInCartDB) {
                  removeProductFromDB(product);
                } else {
                  addProductToDB(product);
                }
              }}
            />

            {product.tags && (
              <div className="mt-6">
                <h2 className="text-lg font-medium mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#d4c8b6] px-3 py-1 rounded-md text-sm"
                    >
                      {tag.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <YouMayAlsoLike currentProduct={product} />
    </main>
  );
}

export default ProductPage;