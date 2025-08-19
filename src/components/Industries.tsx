import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, GraduationCap, HeartPulse, Home, Briefcase, Wrench } from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: Wrench },
  { name: "Education", icon: GraduationCap },
  { name: "HRMS", icon: Briefcase },
  { name: "Services", icon: Briefcase },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Home },
];

const Industries = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">Industries We Serve</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Tailored ERP + AI solutions for your specific business needs.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry) => (
            <Card key={industry.name} className="text-center hover:shadow-lg hover:border-blue-800 transition-all duration-300">
              <CardHeader>
                <industry.icon className="h-12 w-12 mx-auto mb-4 text-blue-800" />
                <CardTitle className="text-lg">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">ERP + AI Solutions</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;