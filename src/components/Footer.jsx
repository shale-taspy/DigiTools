import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Top Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
              {/* Brand Info */}
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  DigiTools
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">
                  Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                </p>
              </div>
    
              {/* Navigation Links Columns */}
              <div className="md:col-span-5 grid grid-cols-3 gap-6">
                {/* Product Column */}
                <div>
                  <h3 className="text-white font-medium text-base mb-4">Product</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                  </ul>
                </div>
    
                {/* Company Column */}
                <div>
                  <h3 className="text-white font-medium text-base mb-4">Company</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                  </ul>
                </div>
    
                {/* Resources Column */}
                <div>
                  <h3 className="text-white font-medium text-base mb-4">Resources</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>
    
              {/* Social Links */}
              <div className="md:col-span-3">
                <h3 className="text-white font-medium text-base mb-4">Social Links</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#0B0F19] flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#0B0F19] flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#0B0F19] flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <FaSquareXTwitter />
                  </a>
                </div>
              </div>
            </div>
    
            {/* Bottom Section */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
              <p>© 2026 Digitools. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;