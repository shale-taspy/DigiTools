import { Dot, Play } from "lucide-react";
import banner from '../assets/banner.png'

const Home = () => {
  return (
    <div className="container mx-auto items-center w-full min-h-190 mt-5 flex justify-around">
      {/*Left side text*/}
      <div>
        <div className="flex bg-[#E1E7FF] p-2 w-72 h-9 rounded-full items-center">
          <Dot 
            className="text-purple-800 size-8 font-medium animate-ping" 
            style={{ animationDuration: '1.5s' }} 
          />
          <h1 className="bg-gradient-to-l from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-base font-medium">
            New: AI-Powered Tools Available
          </h1>
        </div>
        {/*Text*/}
        <div>
          <h1 className="text-6xl font-bold text-[#101727] mt-4">Supercharge Your <br /> Digital Workflow</h1>
          <p className="text-gray-500 mt-4 font-normal">Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br />
          Explore Products</p>
        </div>
        {/*CTA*/}
        <div className="mt-4 gap-2 flex items-center">
          <button className="btn btn-soft bg-gradient-to-l from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">Explore Products</button>
          <button className="btn btn-outline border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] rounded-full font-semibold gap-2 btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md">
            <Play className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
      {/*Banner*/}
      <div>
        <img 
          src={banner} 
          alt="DigiTools Banner" 
          className="w-full max-w-lg h-auto object-cover" 
        />
      </div>
    </div>
  );
};

export default Home;