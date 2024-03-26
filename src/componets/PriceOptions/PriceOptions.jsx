import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOption = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to all equipment",
        "Group fitness classes included",
        "Locker room access",
        "Sauna access",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to all equipment",
        "Unlimited group fitness classes",
        "Access to swimming pool",
        "Personal training session included",
        "Locker room access",
        "Sauna access",
        "Towel service",
        "Nutrition counseling",
        "Massage therapy (once a month)",
        "Discounts on merchandise",
      ],
      price: 79.99,
    },
  ];

  return (
    <div className="m-12">
      <h1 className="text-5xl mb-4">Best Prices in the Town</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOption.map((option) => (
          <PriceOption key={option.key} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
