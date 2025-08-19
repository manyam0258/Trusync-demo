import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const mainServices = [
  "ERPNext Implementation", "AI Automation Solutions", "ERP Consulting",
  "Custom Development", "AI Integration", "Training & Support",
  "Migration Services", "Maintenance & Updates"
];

const aiSolutions = [
  "Document Processing", "Predictive Analytics", "Chatbots & Virtual Assistants",
  "Process Automation", "Business Intelligence", "Quality Control"
];

const industrySolutions = [
  {
    name: "Manufacturing",
    erp: ["Inventory management", "production planning", "quality control"],
    ai: ["Predictive maintenance", "demand forecasting", "automated quality inspection"]
  },
  {
    name: "Education",
    erp: ["Student management", "fee collection", "academic planning"],
    ai: ["Learning analytics", "automated grading", "student performance prediction"]
  },
  {
    name: "HRMS",
    erp: ["Employee management", "payroll", "attendance", "performance tracking"],
    ai: ["Resume screening", "employee sentiment analysis", "workforce optimization"]
  },
  {
    name: "Healthcare",
    erp: ["Patient management", "appointment scheduling", "billing"],
    ai: ["Diagnostic assistance", "appointment optimization", "patient flow management"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Comprehensive solutions to drive your business forward.</p>
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="main">Main Services</TabsTrigger>
            <TabsTrigger value="ai">AI Automation</TabsTrigger>
            <TabsTrigger value="industry">Industry Solutions</TabsTrigger>
          </TabsList>
          <TabsContent value="main" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mainServices.map(service => (
                <div key={service} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-800" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {aiSolutions.map(service => (
                <div key={service} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-800" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="industry" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map(industry => (
                <Card key={industry.name}>
                  <CardHeader>
                    <CardTitle>{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">ERP Solutions:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {industry.erp.map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">AI Automation:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {industry.ai.map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;