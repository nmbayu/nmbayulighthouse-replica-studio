import { Button } from "@/components/ui/button";
import { MapPin as LighthouseIcon, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Retreats", href: "#retreats" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Individual Therapy",
    "Group Therapy", 
    "Medical Detox",
    "Holistic Wellness",
    "Aftercare Planning",
    "Crisis Intervention"
  ];

  const contactInfo = [
    { icon: Phone, label: "English", value: "+62 858 5731 3512" },
    { icon: Phone, label: "Australia", value: "+61 474 049 905" },
    { icon: Phone, label: "Indonesia", value: "+62 878 6232 8989" },
    { icon: Mail, label: "Email", value: "info@thelightofnmbayuwellness.com" },
    { icon: MapPin, label: "Location", value: "Bali, Indonesia" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <LighthouseIcon className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-2xl font-bold">The Light of N M Bayu Wellness</h3>
                <p className="text-sm text-primary-foreground/80">Holistic Wellness Center</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed mb-6">
              A beacon of light for those seeking healing and recovery. Our comprehensive 
              programs combine modern therapeutic approaches with traditional Balinese wisdom.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/90 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/90">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-accent">{info.label}</p>
                    <p className="text-sm text-primary-foreground/90">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <Button variant="healing" className="w-full">
                Emergency Support 24/7
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold">Need Immediate Help?</h4>
              <p className="text-sm">Our crisis intervention team is available 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="default" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                Call Emergency Line
              </Button>
              <Button variant="secondary" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-foreground/10 border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              <p>&copy; 2024 The Light of N M Bayu Wellness. All rights reserved.</p>
              <p className="mt-1">Licensed and accredited wellness retreat center in Indonesia.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;