import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cloud, Database, GitBranch, Zap, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Counter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-accent">
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 3, suffix: "+" },
    { label: "Reliable Deployments", value: 100, suffix: "%" },
  ];

  const techIcons = [
    { icon: Cloud, label: "AWS" },
    { icon: GitBranch, label: "Docker" },
    { icon: Server, label: "Kubernetes" },
    { icon: Code2, label: "Terraform" },
    { icon: GitBranch, label: "Jenkins" },
    { icon: Zap, label: "Ansible" },
    { icon: Database, label: "RDS" },
    { icon: Cloud, label: "Git" },
  ];

  return (
    <section id="about" className="py-20 " ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              I’m a DevOps & Cloud Engineer with 5+ years of experience designing and automating secure, highly available infrastructure across AWS, Azure, Kubernetes, and PCF, primarily for healthcare platforms. I focus on building and hardening production environments, implementing CI/CD pipelines, and applying modern DevOps and GitOps practices to ship changes quickly and safely.
            </p>
            <p>
              I work with Terraform and ARM templates for Infrastructure as Code, and use Jenkins, GitHub Actions, and Azure DevOps to deliver automated deployments. I deploy containerized microservices with Docker, Kubernetes, and Amazon EKS, and integrate DevSecOps tools like SonarQube, Trivy, Snyk, AWS Secrets Manager, and Azure Key Vault to keep releases secure and compliant.
            </p>
            <p>
              Reliability and observability are core to my work: I use Prometheus, Grafana, ELK Stack, CloudWatch, and Azure Monitor to track system health, detect anomalies, and reduce incident resolution time. I also use Python and lightweight ML techniques on metrics and logs to catch issues early and improve autoscaling decisions, partnering closely with development, security, and SRE teams to support high-availability, audit-ready systems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-background border-accent/20 hover:border-accent/40 transition-all duration-300">
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </Card>
            ))}
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-4 md:grid-cols-8 gap-4 pt-8"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 hover:bg-accent/10 transition-all duration-300 cursor-pointer"
              >
                <tech.icon className="h-8 w-8 text-accent" />
                <span className="text-xs text-muted-foreground">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
