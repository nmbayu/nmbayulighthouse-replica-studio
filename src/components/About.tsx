import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Star } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: Heart,
      title: "Tri Hita Karana",
      subtitle: "Harmony with God, Nature & Humanity",
      description: "Our approach is based on the Balinese philosophy of Tri Hita Karana, emphasizing balance and harmony in all aspects of healing."
    },
    {
      icon: Users,
      title: "Individual Treatment",
      subtitle: "Personalized Care Plans",
      description: "Every client receives a fully customized program built around their specific needs, ensuring the greatest chance for long-term success."
    },
    {
      icon: Shield,
      title: "Professional Support",
      subtitle: "24/7 Expert Care",
      description: "Our experienced team provides round-the-clock support, combining international standards with compassionate, culturally-sensitive care."
    },
    {
      icon: Star,
      title: "Proven Success",
      subtitle: "Evidence-Based Methods",
      description: "We combine traditional Balinese healing practices with modern, evidence-based therapeutic approaches for comprehensive recovery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-serene">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Approach
          </h2>
          <div className="text-2xl text-primary font-semibold mb-4">
            - Tri Hita Karana -
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Holistic Rehab in Bali
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Lighthouse Bali believes an individual approach provides the greatest chance for 
            long-term success. Our fully customizable program is built around you and your specific needs.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <principle.icon className="h-12 w-12 text-primary mx-auto group-hover:text-accent transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm font-semibold text-primary mb-3">
                  {principle.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose The Lighthouse Bali?
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Unlike large treatment facilities, we focus on providing intimate, personalized care 
                  in a serene Balinese setting. Our approach recognizes that true healing involves 
                  not just addressing symptoms, but nurturing the whole person.
                </p>
                <p className="leading-relaxed">
                  Our team of international and local professionals brings together the best of 
                  Western therapeutic practices with traditional Balinese healing wisdom, creating 
                  a unique and effective treatment experience.
                </p>
                <p className="leading-relaxed">
                  Located in the heart of Bali's natural beauty, our center provides the perfect 
                  environment for reflection, growth, and lasting transformation away from the 
                  triggers and stresses of daily life.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1:1</div>
                <p className="text-sm text-muted-foreground">Client to Therapist Ratio</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Professional Support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Customized Programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5★</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;