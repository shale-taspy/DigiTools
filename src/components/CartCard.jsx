import * as Icons from "lucide-react";

const CartCard = ({ product, handleDeleteItem }) => {
  const IconComponent = Icons[product?.icon] || Icons.Box;

  return (
    <div className="bg-[#F8F9FA] rounded-2xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Icon Circle Container */}
        <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-100/60 flex items-center justify-center text-amber-500 shrink-0">
          <IconComponent className="w-6 h-6 stroke-[1.8] text-[#8B28FF]" />
        </div>

        {/* Product Details */}
        <div>
          <h3 className="font-semibold text-[#0F172A] text-base leading-snug">
            {product?.name}
          </h3>
          <p className="text-gray-400 text-sm font-medium mt-0.5">
            ${product?.price}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => handleDeleteItem(product)}
        className="text-[#FF4D8D] hover:text-[#E03A75] text-sm font-semibold transition-colors cursor-pointer px-2 py-1"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;