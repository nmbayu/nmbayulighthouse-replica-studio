import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Star, Sunrise, Waves } from "lucide-react";
import wellnessSpaceImage from "@/assets/wellness-space.jpg";

const Retreats = () => {
  const retreatTypes = [
    {
      icon: Sunrise,
      title: "Recovery Retreats",
      duration: "7-30 Days",
      capacity: "1-4 Guests",
      description: "Intensive recovery programs in a private, luxurious setting with personalized treatment plans and 24/7 support.",
      highlights: [
        "Private villa accommodation",
        "1:1 therapeutic sessions",
        "Medical supervision",
        "Holistic wellness activities",
        "Gourmet healthy meals",
        "Cultural immersion experiences"
      ],
      price: "Contact for pricing"
    },
    {
      icon: Waves,
      title: "Wellness Retreats",
      duration: "5-14 Days",
      capacity: "1-6 Guests",
      description: "Rejuvenating wellness experiences focused on mental health, stress reduction, and personal growth in Bali's serene environment.",
      highlights: [
        "Daily yoga and meditation",
        "Spa and massage therapy",
        "Mindfulness workshops",
        "Nutritional counseling",
        "Nature excursions",
        "Digital detox programs"
      ],
      price: "From $2,500 per week"
    }
  ];

  const accommodations = [
    {
      name: "Ocean View Villa",
      description: "Luxurious private villa with panoramic ocean views, private pool, and dedicated staff.",
      features: ["3 bedrooms", "Private pool", "Ocean views", "24/7 staff"]
    },
    {
      name: "Garden Sanctuary",
      description: "Peaceful retreat surrounded by tropical gardens with meditation pavilion and spa facilities.",
      features: ["2 bedrooms", "Garden views", "Meditation space", "Spa access"]
    },
    {
      name: "Mountain Hideaway",
      description: "Secluded villa in the mountains with stunning valley views and complete privacy.",
      features: ["4 bedrooms", "Mountain views", "Complete privacy", "Hiking trails"]
    }
  ];

  return (
    <section id="retreats" className="py-20 bg-gradient-serene">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Retreat Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience transformation in Bali's most beautiful and serene locations. Our retreat programs 
            offer the perfect blend of therapeutic support and luxury accommodation.
          </p>
        </div>

        {/* Retreat Overview */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={wellnessSpaceImage} 
                alt="Wellness and meditation space"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Healing in Paradise
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our retreat programs take place in carefully selected locations throughout Bali, 
                each chosen for its natural beauty, peaceful atmosphere, and ability to support 
                the healing process. From oceanfront villas to mountain sanctuaries, every setting 
                provides the perfect backdrop for transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Multiple Locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Flexible Duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Small Groups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Luxury Standard</span>
                </div>
              </div>
              <Button variant="ocean" size="lg">
                View Retreat Locations
              </Button>
            </div>
          </div>
        </div>

        {/* Retreat Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Choose Your Retreat Experience
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {retreatTypes.map((retreat, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-healing text-white">
                      <retreat.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{retreat.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{retreat.duration}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{retreat.capacity}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {retreat.description}
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {retreat.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{retreat.price}</span>
                    <Button variant="healing">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accommodations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Luxury Accommodations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{accommodation.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {accommodation.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {accommodation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready for Your Retreat Experience?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your transformative retreat in Bali today. Our team will help you choose 
              the perfect program and location for your healing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ocean" size="lg">
                Book Your Retreat
              </Button>
              <Button variant="serene" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;