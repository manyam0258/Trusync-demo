import { Briefcase, Clock, Smile, Users } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Successful Projects",
    icon: Briefcase,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Smile,
  },
  {
    value: "500+",
    label: "Hours Saved Monthly",
    icon: Clock,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Users,
  },
];

const Impact = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-800" />
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800">{stat.value}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;