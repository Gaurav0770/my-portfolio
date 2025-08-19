import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gauravgarad7@gmail.com",
    href: "mailto:gauravgarad7@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9890822420",
    href: "tel:+919890822420"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    color: "hover:text-gray-900"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "#",
    color: "hover:text-blue-600"
  }
];

export const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities in AI, data science, and full-stack development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{contact.label}</div>
                        {contact.href === "#" ? (
                          <div className="text-muted-foreground">{contact.value}</div>
                        ) : (
                          <a 
                            href={contact.href}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {contact.value}
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                <div className="pt-6 border-t">
                  <div className="font-semibold text-foreground mb-4 text-center">
                    Connect With Me
                  </div>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`p-3 rounded-full bg-primary/10 text-primary transition-all hover:scale-105 ${social.color}`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Let's Collaborate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in discussing new opportunities, 
                    innovative projects, and collaborations in AI, data science, 
                    and software development.
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      className="w-full glow-effect" 
                      size="lg"
                    >
                      <Mail className="mr-2" size={20} />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                    >
                      <Download className="mr-2" size={20} />
                      Download Resume
                    </Button>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="text-center">
                    <div className="font-semibold text-foreground mb-3">
                      Areas of Interest
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary">Full-Stack Development</Badge>
                      <Badge variant="secondary">AI & Machine Learning</Badge>
                      <Badge variant="secondary">Mobile Development</Badge>
                      <Badge variant="secondary">Data Science</Badge>
                      <Badge variant="secondary">Automation</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};