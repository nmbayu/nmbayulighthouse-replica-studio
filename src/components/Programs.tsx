import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Leaf, Users, Clock, Shield } from "lucide-react";
import therapyRoomImage from "@/assets/therapy-room.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "Individual Therapy",
      duration: "Daily 1-on-1 Sessions",
      description: "Personalized therapy sessions with our experienced international counselors using evidence-based approaches tailored to your specific needs.",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Trauma-informed care",
        "Addiction counseling",
        "Mental health support"
      ]
    },
    {
      icon: Users,
      title: "Group Therapy",
      duration: "3x Weekly Sessions",
      description: "Connect with others on similar journeys in a supportive group environment guided by professional facilitators.",
      features: [
        "Peer support groups",
        "Process groups",
        "Psychoeducational workshops",
        "Family therapy sessions"
      ]
    },
    {
      icon: Leaf,
      title: "Holistic Wellness",
      duration: "Daily Activities",
      description: "Integrate traditional Balinese healing practices with modern wellness approaches for complete mind-body healing.",
      features: [
        "Yoga and meditation",
        "Traditional Balinese healing",
        "Nutritional counseling",
        "Fitness and recreation"
      ]
    },
    {
      icon: Heart,
      title: "Medical Detox",
      duration: "As Needed",
      description: "Safe, medically supervised detoxification with 24/7 medical support in a comfortable, private setting.",
      features: [
        "24/7 medical supervision",
        "Medication management",
        "Comfort medications",
        "Gradual tapering protocols"
      ]
    },
    {
      icon: Clock,
      title: "Aftercare Planning",
      duration: "Ongoing Support",
      description: "Comprehensive discharge planning and ongoing support to ensure sustainable recovery after leaving our program.",
      features: [
        "Relapse prevention planning",
        "Referral coordination",
        "Alumni support network",
        "Continued therapy options"
      ]
    },
    {
      icon: Shield,
      title: "Crisis Intervention",
      duration: "24/7 Availability",
      description: "Immediate support and intervention services available around the clock for urgent situations.",
      features: [
        "Emergency assessment",
        "Crisis stabilization",
        "Safety planning",
        "Immediate admission"
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Treatment Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive treatment programs are designed to address the unique needs of each individual, 
            combining evidence-based therapeutic approaches with traditional healing practices.
          </p>
        </div>

        {/* Program Overview */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Personalized Treatment Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every client at The Light of N M Bayu Wellness receives a fully customized treatment plan developed 
                by our multidisciplinary team. We believe that no two recovery journeys are the same, 
                which is why we take the time to understand your unique circumstances, challenges, and goals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our programs integrate cutting-edge therapeutic modalities with the wisdom of traditional 
                Balinese healing, creating a holistic approach that addresses not just the symptoms of 
                addiction or mental health challenges, but the underlying causes.
              </p>
              <Button variant="healing" size="lg">
                Learn More About Our Approach
              </Button>
            </div>
            <div className="relative">
              <img 
                src={therapyRoomImage} 
                alt="Therapy consultation room"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                    <p className="text-sm text-accent font-medium">{program.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-healing rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our compassionate team is here to guide you every step of the way. 
              Contact us today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="serene" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="wellness" size="lg">
                Download Program Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;