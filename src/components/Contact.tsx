import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      subtitle: "Available 24/7",
      details: [
        { label: "English", value: "+62 858 5731 3512" },
        { label: "Australia", value: "+61 474 049 905" },
        { label: "Indonesia", value: "+62 878 6232 8989" }
      ]
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Professional Response",
      details: [
        { label: "General Inquiries", value: "info@thelighthousebali.org" },
        { label: "Admissions", value: "admissions@thelighthousebali.org" },
        { label: "Emergency", value: "emergency@thelighthousebali.org" }
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Bali, Indonesia",
      details: [
        { label: "Address", value: "Bali, Indonesia" },
        { label: "Private Locations", value: "Multiple retreat centers" },
        { label: "Airport Transfer", value: "Included in program" }
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      subtitle: "Always Here for You",
      details: [
        { label: "Emergency Line", value: "24/7 Available" },
        { label: "Office Hours", value: "9 AM - 6 PM (Bali Time)" },
        { label: "Response Time", value: "Within 1 hour" }
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reach out to our professional and supportive team today. We're here to help you 
            take the first step towards healing and recovery.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-healing text-white group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                <p className="text-sm text-accent font-medium">{method.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {method.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        {detail.label}
                      </p>
                      <p className="text-sm text-foreground font-medium">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form and Emergency */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1 hour.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How did you hear about us?
                    </label>
                    <Input placeholder="Google search, referral, etc." />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Please tell us about your situation and how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="healing" size="lg" className="flex-1">
                      Send Message
                    </Button>
                    <Button variant="ocean" size="lg" className="flex-1">
                      Request Callback
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Emergency & Quick Contact */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="bg-gradient-healing text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <span>Emergency Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  If you're in crisis or need immediate support, call our 24/7 emergency line.
                </p>
                <Button variant="serene" size="lg" className="w-full mb-4">
                  Call Emergency Line
                </Button>
                <p className="text-sm text-white/80">
                  Our trained professionals are available around the clock to provide immediate assistance.
                </p>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <span>Quick Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Languages Spoken</h4>
                  <p className="text-sm text-muted-foreground">English, Indonesian, German, Dutch</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Insurance</h4>
                  <p className="text-sm text-muted-foreground">International insurance accepted</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Confidentiality</h4>
                  <p className="text-sm text-muted-foreground">All communications are strictly confidential</p>
                </div>
                <Button variant="wellness" className="w-full">
                  Download Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-serene rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Take the First Step Today
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recovery is possible, and you don't have to face it alone. Our compassionate team 
              is ready to support you on your journey to healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="ocean" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +62 858 5731 3512
              </Button>
              <Button variant="healing" size="xl">
                <Mail className="mr-2 h-5 w-5" />
                Email: info@thelighthousebali.org
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;