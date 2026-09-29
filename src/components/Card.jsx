import * as Icons from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ product,selectedItem,setSelectedItem}) => {
  const handleClick = () => {
    toast(`${product.name} is selected`)
    setIsSelected(true)
    setSelectedItem([...selectedItem,product])
  }
  const [isSelected, setIsSelected] = useState(false);
  const IconComponent = Icons[product.icon] || Icons.Box
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
          <div>
            {/* Icon and Tag */}
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#8B28FF]">
                <IconComponent className="w-7 h-7 stroke-[1.8]" />
              </div>
              {product.tag && (
                <span className="bg-[#FEF3C7] text-[#D97706] text-xs font-semibold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
    
            {/* Title & Description */}
            <h2 className="text-xl font-bold text-[#0F172A] mt-5">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2 font-normal leading-relaxed">
              {product.description}
            </p>
    
            {/* Pricing */}
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-extrabold text-[#0F172A]">
                ${product.price}
              </span>
              <span className="text-gray-400 text-sm font-medium ml-1">
                /{product.period === "one-time" ? "lifetime" : product.period}
              </span>
            </div>
    
            {/* Features */}
            <ul className="mt-5 space-y-2.5">
              {product.features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                  <Icons.Check className="w-4 h-4 text-emerald-500 stroke-[2.5] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
    
          {/* Button with local useState */}
          <button
            onClick={handleClick}
            disabled={isSelected}
            className={`w-full mt-6 font-semibold py-3 px-4 rounded-full transition-colors ${
              isSelected
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-[#8B28FF] hover:bg-[#781FEB] text-white cursor-pointer"
            }`}
          >
            {isSelected ? "Already in Cart" : "Buy Now"}
          </button>
        </div>
  );
};

export default Card;