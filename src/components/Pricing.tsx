
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started with basic networking",
      features: [
        "Basic profile creation",
        "Browse public partnerships",
        "Join community forums",
        "Send 5 messages per month",
        "Basic search filters"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Enhanced features for serious business professionals",
      features: [
        "Verified professional profile",
        "Unlimited messaging",
        "Advanced search & filters",
        "Priority support",
        "Partnership analytics",
        "Access to exclusive events",
        "LinkedIn integration"
      ],
      buttonText: "Start Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "Full-featured solution for organizations and teams",
      features: [
        "Team collaboration tools",
        "Custom branding options",
        "API access",
        "Dedicated account manager",
        "Advanced analytics dashboard",
        "Custom integrations",
        "Priority placement",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Simple, Transparent <span className="text-yellow-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your networking needs. Start free and upgrade as you grow your business connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-yellow-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">All plans include 30-day money-back guarantee</p>
          <p className="text-sm text-gray-500">
            Need a custom solution? <a href="#contact" className="text-yellow-600 hover:text-yellow-700 font-medium">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
