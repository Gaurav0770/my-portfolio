import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="text-lg leading-relaxed space-y-6">
                <p>
                  I'm an <strong>AI Data Science graduate</strong> with hands-on experience in 
                  full-stack development, intelligent automation, and mobile app deployment. 
                  My passion lies in leveraging cutting-edge technologies to create scalable 
                  solutions that make a real-world impact.
                </p>
                
                <p>
                  With a proven track record of <strong>improving AI model accuracy by 15%</strong> 
                  and <strong>reducing manual workflows by 20%</strong> through intelligent automation, 
                  I bring both technical expertise and practical problem-solving skills to every project.
                </p>
                
                <p>
                  I specialize in <strong>Python</strong>, <strong>React</strong>, 
                  <strong>Generative AI</strong>, and cloud-based deployments, constantly 
                  staying at the forefront of emerging technologies in the AI and web development space.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15%</div>
                    <div className="text-muted-foreground">AI Model Accuracy Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20%</div>
                    <div className="text-muted-foreground">Workflow Optimization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <div className="text-muted-foreground">Years Experience</div>
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