import { Check } from "lucide-react";
const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "0",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: "29",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-[#F8F9FD] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/*Titles*/}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
    
            {/*Pricing Cards*/}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between text-left transition-all ${
                    plan.popular
                      ? "bg-[#8B28FF] text-white shadow-xl scale-105 z-10"
                      : "bg-[#F8F9FA] border border-gray-100 text-[#0F172A]"
                  }`}
                >
                  {/*Popular Badge*/}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-semibold px-4 py-1 rounded-full border border-amber-200 shadow-sm whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
    
                  <div>
                    {/* Plan Header */}
                    <h3
                      className={`text-2xl font-bold ${
                        plan.popular ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 font-medium ${
                        plan.popular ? "text-purple-100" : "text-gray-400"
                      }`}
                    >
                      {plan.subtitle}
                    </p>
    
                    {/*Price Display*/}
                    <div className="mt-6 flex items-baseline">
                      <span
                        className={`text-4xl sm:text-5xl font-extrabold ${
                          plan.popular ? "text-white" : "text-[#0F172A]"
                        }`}
                      >
                        ${plan.price}
                      </span>
                      <span
                        className={`text-sm font-medium ml-1 ${
                          plan.popular ? "text-purple-200" : "text-gray-400"
                        }`}
                      >
                        /Month
                      </span>
                    </div>
    
                    {/*Features List*/}
                    <ul className="mt-8 space-y-3.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check
                            className={`w-4 h-4 shrink-0 ${
                              plan.popular ? "text-white" : "text-emerald-500"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              plan.popular ? "text-purple-50" : "text-gray-500"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
    
                  {/*Action Button*/}
                  <button
                    className={`w-full mt-10 py-3.5 px-6 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-white text-[#8B28FF] hover:bg-gray-100 shadow-md"
                        : "bg-[#8B28FF] text-white hover:bg-[#781FEB]"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
};

export default Pricing;