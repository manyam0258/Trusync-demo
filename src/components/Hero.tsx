import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const slides = [
  {
    headline: "Transforming Businesses with Smart ERP & AI Automation",
    subtext: "Your trusted Frappe partner in Hyderabad",
    cta: "Discover Our Solutions",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
  },
  {
    headline: "ERPNext Implementation Made Simple",
    subtext: "Streamline operations across Manufacturing, Healthcare, Education & more",
    highlight: "✓ Certified Frappe Partners ✓ 6+ Industries ✓ Local Support",
    cta: "Explore ERPNext",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    headline: "Intelligent Automation for Modern Businesses",
    subtext: "Reduce manual work by 70% with AI-powered workflows",
    features: "• Document Processing • Predictive Analytics • Smart Chatbots",
    cta: "See AI Solutions",
    img: "https://images.unsplash.com/photo-1620712943543-2858200e94b1?q=80&w=2767&auto=format&fit=crop",
  },
  {
    headline: "Expertise Across Every Industry",
    subtext: "Tailored solutions for your specific business needs",
    industries: "Manufacturing | Healthcare | Education | Services | HRMS | Real Estate",
    cta: "View Industries",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
  },
  {
    headline: "Hyderabad's Premier ERP & AI Partner",
    subtext: "Local expertise, global standards, personalized service",
    benefits: "Same timezone • On-site support • Cultural understanding",
    cta: "Contact Us Today",
    img: "https://images.unsplash.com/photo-1583342920434-247a34475d8a?q=80&w=2670&auto=format&fit=crop",
  },
];

const Hero = () => {
  return (
    <section id="home" className="w-full">
      <Carousel
        className="w-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] md:h-[90vh] w-full">
                <img src={slide.img} alt={slide.headline} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                      {slide.headline}
                    </h1>
                    <p className="max-w-[700px] mx-auto text-lg md:text-xl mb-6">
                      {slide.subtext}
                    </p>
                    {slide.highlight && <p className="font-semibold mb-4">{slide.highlight}</p>}
                    {slide.features && <p className="mb-4">{slide.features}</p>}
                    {slide.industries && <p className="mb-4">{slide.industries}</p>}
                    {slide.benefits && <p className="mb-4">{slide.benefits}</p>}
                    <Button size="lg" className="bg-blue-800 hover:bg-blue-700 text-white">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default Hero;