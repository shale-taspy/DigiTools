const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#6328FF] to-[#A814FF] w-full text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-center text-center">
          
          {/*1*/}
          <div className="flex flex-col items-center justify-center md:border-r border-white/20 py-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              50K+
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-medium mt-2">
              Active Users
            </p>
          </div>

          {/*2*/}
          <div className="flex flex-col items-center justify-center md:border-r border-white/20 py-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              200+
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-medium mt-2">
              Premium Tools
            </p>
          </div>

          {/*3*/}
          <div className="flex flex-col items-center justify-center py-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              4.9
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-medium mt-2">
              Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;