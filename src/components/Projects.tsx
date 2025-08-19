import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Award } from "lucide-react";

export const Projects = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Publications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research contributions and recognition in AI and healthcare
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="default" className="mb-2">
                    Published Research
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    Medical AI Assistant
                  </CardTitle>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    International Journal of Creative Research Thoughts (IJCRT)
                  </div>
                  <div className="text-muted-foreground">
                    Published in 2024
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Successfully published a research paper on "Medical AI Assistant" in the International 
                  Journal of Creative Research Thoughts, contributing to the advancement of AI applications 
                  in healthcare technology.
                </p>
                
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Research Excellence Award
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Awarded for the publication with <strong>Impact Factor of 7.97</strong> by Google Scholar
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold text-primary mb-1">7.97</div>
                    <div className="text-sm text-muted-foreground">Impact Factor</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold text-primary mb-1">2024</div>
                    <div className="text-sm text-muted-foreground">Publication Year</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};