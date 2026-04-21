import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Cloud Platform",
      skills: ["AWS (VPC, EC2, RDS, ALB, IAM, S3)", "Azure (VNet, Key Vault, Monitor)"],
    },
    {
      category: "CI/CD & Delivery",
      skills: ["Jenkins", "GitHub Actions", "Azure DevOps", "Maven", "Git"],
    },
    {
      category: "Containerization & K8s",
      skills: ["Docker", "Kubernetes", "Amazon EKS", "PCF"],
    },
    {
      category: "Infrastructure as Code",
      skills: ["Terraform", "Azure Resource Manager", "Ansible", "Shell scripting"],
    },
    {
      category: "DevSecOps & Security",
      skills: ["SonarQube", "Trivy", "Snyk", "OWASP Security", "Secrets Manager", "Azure Key Vault"],
    },
    {
      category: "Observability & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Azure Monitor"],
    },
    {
      category: "Scripting & Dev",
      skills: ["Bash", "Python", "Groovy", "YAML", "JSON", "REST APIs", "Maven"],
    },
    {
      category: "Operations",
      skills: ["Linux Admin", "VPC Networking", "DNS", "Load Balancing", "High Availability"],
    },
    {
      category: "Domain",
      skills: ["Healthcare platforms", "High availability", "Compliance & auditability", "E-commerce workloads"],
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="p-6 bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-accent mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-background text-foreground hover:bg-accent/10 hover:text-accent hover:scale-105 transition-all duration-300 cursor-pointer px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
