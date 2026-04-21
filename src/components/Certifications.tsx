import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Solutions Architecture Job Simulation",
      provider: "AWS",
      link: "#",
    },
    {
      title: "Cloud DevOps",
      provider: "Intel Corporation",
      link: "#",
    },
    {
      title: "AWS Fundamentals Specialization",
      provider: "Coursera",
      link: "#",
    },
    {
      title: "Continuous Delivery & DevOps",
      provider: "Coursera",
      link: "#",
    },
    {
      title: "Learning Jenkins",
      provider: "LinkedIn Learning",
      link: "#",
    },
    {
      title: "Docker Foundations Professional Certificate",
      provider: "LinkedIn Learning",
      link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={item}>
              <Card className="p-6 bg-background border-accent/20 hover:border-accent/40 transition-all duration-300 h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-accent">{cert.provider}</p>
                    </div>
                  </div>
                  {/* <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-accent hover:bg-accent/10"
                    asChild
                  > */}
                  {/* <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      Verify Certificate
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a> */}
                  {/* </Button> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
