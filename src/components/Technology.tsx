import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Code, Database, Layers } from "lucide-react";

const technologies = [
  {
    name: "ERPNext",
    description: "Complete business management suite",
    icon: Layers,
  },
  {
    name: "Frappe Framework",
    description: "Rapid application development platform",
    icon: Code,
  },
  {
    name: "AI & Machine Learning",
    description: "Intelligent automation solutions",
    icon: BrainCircuit,
  },
  {
    name: "Python Ecosystem",
    description: "Robust backend technologies",
    icon: Database,
  },
];

const Technology = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">Technology Showcase</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">The powerful tools we use to build your solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <Card key={tech.name} className="text-center hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <tech.icon className="h-12 w-12 mx-auto mb-4 text-blue-800" />
                <CardTitle>{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;