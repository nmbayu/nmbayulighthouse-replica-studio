import { Button } from "@/components/ui/button";
import { MapPin, Heart, Leaf, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-12 w-12 text-accent animate-float" />
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  A Beacon of Light
                </h1>
                <p className="text-xl text-accent font-medium">
                  Your Journey to Healing Begins Here
                </p>
              </div>
            </div>
            
            <p className="text-xl leading-relaxed text-white/90">
              Experience comprehensive, holistic rehabilitation in the tranquil beauty of Bali. 
              Our personalized approach combines traditional healing with modern therapy in a 
              supportive, private environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="healing" size="xl" className="text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
              <Button variant="serene" size="xl" className="text-lg">
                Learn More About Our Programs
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 text-white/90">
                <Heart className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold">Individual Care</h3>
                  <p className="text-sm">One-on-one attention</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Leaf className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold">Holistic Approach</h3>
                  <p className="text-sm">Mind, body & spirit</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <MapPin className="h-8 w-8 text-accent" />
                <div>
                  <h3 className="font-semibold">Bali Setting</h3>
                  <p className="text-sm">Healing environment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:ml-auto">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Our Professional Team
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">English</p>
                    <p className="text-muted-foreground">+62 858 5731 3512</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Australia</p>
                    <p className="text-muted-foreground">+61 474 049 905</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Indonesia</p>
                    <p className="text-muted-foreground">+62 878 6232 8989</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="ocean" className="w-full" size="lg">
                  Send Email: info@thelighthousebali.org
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;