import { User, Box, Rocket } from "lucide-react";
const steps = [
  {
    step: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: User,
  },
  {
    step: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: Box,
  },
  {
    step: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: Rocket,
  },
];
const Steps = () => {
  return (
    <section className="bg-[#F8F9FD] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/*Header*/}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Get Started In 3 Steps
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Start using premium digital tools in minutes, not hours.
            </p>
    
            {/*Cards*/}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                  >
                    {/*Step*/}
                    <span className="absolute top-4 right-4 bg-[#8B28FF] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {item.step}
                    </span>
    
                    {/*Icons*/}
                    <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#8B28FF] mt-4 mb-6">
                      <IconComponent className="w-9 h-9 stroke-[1.8]" />
                    </div>
    
                    {/*Title*/}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                      {item.title}
                    </h3>
    
                    {/*Description*/}
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  );
};

export default Steps;