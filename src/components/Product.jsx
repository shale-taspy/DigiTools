import { use } from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Cart from "./Cart";
const Product = ({ productPromise }) => {
  const products = use(productPromise)
  const [selectType, SetSelectedType] = useState('Products')
  const [selectedItem,setSelectedItem] =useState([])
  
  return (
    <div className="container mx-auto mt-15">
     {/*Text and buttons*/}
     <div className="text-center px-4 py-8 max-w-4xl mx-auto">
       <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">Premium Digital Tools</h1>
       <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed">Choose from our curated collection of premium digital products designed{" "}<br className="hidden sm:inline" />to boost your productivity and creativity.
       </p>
       <div className="mt-6 sm:mt-8 flex justify-center items-center">
         <div className="inline-flex bg-slate-50 border border-slate-100 p-1.5 rounded-full shadow-inner gap-1">
           <button 
                 onClick={() => SetSelectedType('Products')} 
                 className={`text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 rounded-full transition-all ${
                   selectType === 'Products' 
                     ? 'bg-[#8B28FF] hover:bg-[#781FEB] text-white shadow-md' 
                     : 'text-gray-600 hover:text-gray-900'
                 }`}
               >
                 Products
               </button>
               <button 
                 onClick={() => SetSelectedType('Cart')} 
                 className={`text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 rounded-full transition-all ${
                   selectType === 'Cart' 
                     ? 'bg-[#8B28FF] hover:bg-[#781FEB] text-white shadow-md' 
                     : 'text-gray-600 hover:text-gray-900'
                 }`}
               >
                 Cart ({selectedItem.length})
               </button>
         </div>
       </div>
     </div>
      {/*Cards*/}
      <div>
        {selectType === 'Products' ? <ProductCard products={products} setSelectedItem={setSelectedItem} selectedItem={selectedItem}></ProductCard> : <Cart products={products} selectedItem={selectedItem} setSelectedItem={setSelectedItem}></Cart>}
      </div>
    </div>
  );
};

export default Product;