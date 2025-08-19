import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Brain, Settings } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "JavaScript (ES6)"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "React", "DOM Manipulation", "REST API", "Firebase"]
  },
  {
    icon: Brain,
    title: "AI & Automation",
    skills: ["Generative AI", "Document AI", "Agentic AI", "Browser Automation"]
  },
  {
    icon: Settings,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Confluence", "Figma", "Agile/Scrum"]
  }
];

const coreSkills = [
  "API Integration",
  "Troubleshooting", 
  "Performance Optimization",
  "Technical Documentation",
  "Agile Collaboration",
  "Problem-Solving",
  "Continuous Learning"
];

export const Skills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern technologies and development practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="skill-card card-elegant">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <Card className="card-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {coreSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};