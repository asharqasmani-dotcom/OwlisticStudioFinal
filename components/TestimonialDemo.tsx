"use client";
import { TestimonialSlider } from "@/components/ui/testimonal-slider";

const TestimonialDemo = () => {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "Owalistic Sol's branding transformed our business scaling. Effortless collaboration and top-tier results!",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      quote: "The web development team delivered a high-converting site that exceeded our expectations.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      quote: "Professional, responsive, and creative. Owalistic Sol is our go-to partner for all things digital.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background flex items-center justify-center px-12">
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialDemo;
