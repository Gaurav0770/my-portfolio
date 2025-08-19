import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer - Freelance",
    company: "Upyojan Pvt. Ltd.",
    location: "Pune, India",
    period: "Jan 2025 – Present",
    type: "Current",
    achievements: [
      "Built and tested cross-platform mobile applications using React Native, incorporating interactive UI prototypes designed in Figma",
      "Integrated intelligent automation features leveraging Document AI and custom LLM agents, enhancing in-app user experience and reducing manual workflows by 20%",
      "Conducted browser-based functional and usability testing to ensure performance compliance and quality standards"
    ]
  },
  {
    title: "Data Analyst",
    company: "Verificient Solutions Pvt. Ltd.",
    location: "Pune, India", 
    period: "Nov 2022 – Aug 2024",
    type: "Previous",
    achievements: [
      "Monitored live proctoring sessions using AI and machine learning tools to detect anomalies, improving data accuracy by 15%",
      "Provided technical support by troubleshooting user issues, testing application performance, and optimizing workflows",
      "Managed data reporting through Excel and collaborated with cross-functional teams to enhance system functionality and document processes"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey in AI, data analysis, and software development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-elegant">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="text-xl font-semibold text-foreground mb-2">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge 
                      variant={exp.type === "Current" ? "default" : "secondary"}
                      className="w-fit"
                    >
                      {exp.type === "Current" ? "Current Position" : "Previous Role"}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};