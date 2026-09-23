import { Dot, Play } from "lucide-react";
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-7xl">
        
        {/*Left side text container*/}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
          {/*Badge*/}
          <div className="flex bg-[#E1E7FF]  p-2 w-72 h-9 rounded-full items-center  shadow-sm ">
            <Dot 
              className="text-purple-800 size-7 sm:size-8 font-medium animate-ping shrink-0" 
              style={{ animationDuration: '1.5s' }} 
            />
            <span className="bg-gradient-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              New: AI-Powered Tools Available
            </span>
          </div>
          {/*Left Text*/}
          <div className="mt-4 sm:mt-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101727] leading-tight sm:leading-tight md:leading-tight">
              Supercharge Your <br className="hidden sm:inline" /> Digital Workflow
            </h1>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
          </div>
          {/*CTA*/}
          <div className="mt-6 sm:mt-8 gap-3 sm:gap-4 flex flex-wrap justify-center lg:justify-start items-center w-full">
            <button className="btn border-none bg-gradient-to-r from-[#6328FF] to-[#A814FF] text-white rounded-full font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all btn-sm sm:btn-md md:btn-md lg:btn-md xl:btn-md px-6">
              Explore Products
            </button>
            <button className="btn bg-white border border-[#8B28FF] text-[#8B28FF] hover:bg-[#8B28FF] hover:text-white hover:border-[#8B28FF] rounded-full font-bold gap-2 shadow-sm hover:shadow-md transition-all btn-sm sm:btn-md md:btn-md lg:btn-md xl:btn-md px-6">
              <Play className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        {/*Banner*/}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg lg:max-w-none">
          <img 
            src={banner} 
            alt="DigiTools Banner" 
            className="w-full h-auto max-w-md lg:max-w-xl object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]" 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;