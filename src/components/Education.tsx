import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
  {
    degree: "BE in AI and Data Science",
    institution: "Shree Ramchandra College Of Engineering",
    location: "Pune, Maharashtra",
    period: "Aug 2021 – May 2024",
    grade: "CGPA: 7.41",
    type: "Bachelor's"
  },
  {
    degree: "Diploma in Computer Science", 
    institution: "Zeal College Of Engineering",
    location: "Pune, Maharashtra",
    period: "July 2018 – May 2021",
    grade: "Percentage: 86.51%",
    type: "Diploma"
  }
];

const certifications = [
  "Accenture Discovery Program",
  "AWS Cloud Practitioner Essentials", 
  "Machine Learning with Python"
];

export const Education = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">
                        {edu.type}
                      </Badge>
                      <CardTitle className="text-xl font-bold text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="text-lg font-semibold text-foreground mb-2">
                        {edu.institution}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="mt-4">
                      <Badge variant="secondary" className="font-semibold">
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="card-elegant max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-3">
              <GraduationCap className="w-7 h-7 text-primary" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-secondary/50">
                  <div className="font-semibold text-foreground">{cert}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};