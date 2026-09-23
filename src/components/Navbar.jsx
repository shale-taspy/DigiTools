import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Links
  const links = (
    <>
      <li className="list-none hover:text-[#4F39F6] cursor-pointer transition">
        Products
      </li>
      <li className="list-none hover:text-[#4F39F6] cursor-pointer transition">
        Features
      </li>
      <li className="list-none hover:text-[#4F39F6] cursor-pointer transition">
        Pricing
      </li>
      <li className="list-none hover:text-[#4F39F6] cursor-pointer transition">
        Testimonials
      </li>
      <li className="list-none hover:text-[#4F39F6] cursor-pointer transition">
        FAQ
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white  sticky top-0 z-50">
      <div className="container mx-auto px-4 min-h-20 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="bg-gradient-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl md:text-4xl font-bold cursor-pointer">
            DigiTools
          </h1>
        </div>
        {/*Links*/}
        <div className="hidden md:flex gap-6 font-medium text-[#101727]">
          {links}
        </div>
        {/*Button and Get Started*/}
        <div className="hidden md:flex gap-3.5 items-center">
          <div className="flex gap-2 items-center font-medium text-[#101727] cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <h1 className="font-medium text-[#101727] cursor-pointer hover:text-[#4F39F6] transition">Login</h1>
          <button className="bg-gradient-to-l from-[#4F39F6] to-[#9514FA] px-6 py-2.5 text-white font-medium cursor-pointer rounded-full hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <div className="flex gap-1 items-center font-medium text-[#101727]">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#101727] p-1 rounded-md focus:outline-none"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {/*Responsive state management*/}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4 font-medium text-[#101727]">
            {links}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button className="w-full text-center font-medium text-[#101727] py-2">
              Login
            </button>
            <button className="w-full bg-gradient-to-l from-[#4F39F6] to-[#9514FA] py-3 text-white font-medium rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;