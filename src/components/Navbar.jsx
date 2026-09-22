import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const links = [
    <li className="list-none">Products</li>,
    <li className="list-none">Features</li>,
    <li className="list-none">Pricing</li>,
    <li className="list-none">Testomonials</li>,
    <li className="list-none">FAQ</li>,
  ]
  return (
    <div className="min-h-24 w-full flex justify-between items-center text-center mx-auto container">
      {/*Logo*/}
      <div>
        <h1 className="bg-gradient-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-4xl font-bold">DigiTools</h1>
      </div>
      {/*Links*/}
      <div className="flex gap-4 font-medium text-[#101727]">
      {links}
      </div>
      {/*Cart and button*/}
      <div className="flex gap-4 items-center">
        {/*Button*/}
        <div className="flex gap-4 font-medium">
          <ShoppingCart />
          Login
        </div>
        <button className="bg-gradient-to-l from-[#4F39F6] to-[#9514FA] p-3.5 w-28 text-white font-medium rounded-4xl">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;