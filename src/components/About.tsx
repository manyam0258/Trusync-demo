import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">About Trusync Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Empowering businesses through intelligent ERP solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-blue-800 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">To empower businesses of all sizes with powerful, scalable, and intelligent ERP and AI solutions that drive growth and efficiency.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-blue-800 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Certified Frappe Partner</h3>
                <p className="text-gray-600 dark:text-gray-400">As certified Frappe partners, we uphold the highest standards of quality and expertise in ERPNext implementation and customization.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-blue-800 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Our Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-400">Our team consists of certified Frappe developers, AI specialists, and business analysts dedicated to your success.</p>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="text-blue-800" />
                  <span>Why Frappe & ERPNext + AI?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p><strong>Open-Source Advantage:</strong> Cost-effective and flexible, with no vendor lock-in.</p>
                <p><strong>Highly Customizable:</strong> Tailored to your unique business processes with AI enhancements.</p>
                <p><strong>Scalable:</strong> Grows with your business, from startup to enterprise.</p>
                <p><strong>Future-Ready:</strong> A modern tech stack that integrates cutting-edge AI capabilities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;