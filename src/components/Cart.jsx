import { Bounce, Slide, toast } from "react-toastify";
import CartCard from "./CartCard";

const Cart = ({ selectedItem, setSelectedItem }) => {
  const handleDeleteItem = (product) => {
    const filteredItems = selectedItem.filter(
      (item) => item.name !== product.name
      
    );
    setSelectedItem(filteredItems);
    toast.warn(`${product.name} is removed`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    });
  };
  const total = selectedItem?.reduce((sum, item) => sum + Number(item.price || 0), 0) || 0;

  const handleCheckout = () => {
    if (selectedItem?.length === 0) return;
    
    toast.info('Thanks for shopping', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
    setSelectedItem([]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-6">
        Your Cart
      </h2>

      {/* Cart List */}
      {!selectedItem || selectedItem.length === 0 ? (
        <div className="text-center py-8 text-gray-400 font-medium">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-4">
          {selectedItem.map((product, ind) => (
            <CartCard
              key={ind}
              product={product}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </div>
      )}

      {/* Total Section */}
      <div className="mt-8 pt-4 flex justify-between items-center">
        <span className="text-gray-400 text-sm font-medium">Total:</span>
        <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
          ${total}
        </span>
      </div>

      {/* Proceed to Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={!selectedItem || selectedItem.length === 0}
        className="w-full mt-6 bg-[#8B28FF] hover:bg-[#781FEB] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-md cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;