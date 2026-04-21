import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "DevOps Engineer",
      company: "CVS Health",
      location: "USA",
      duration: "Feb 2025 - Present",
      bullets: [
      "Modernizing enterprise healthcare applications across hybrid AWS, Azure, Kubernetes, and PCF environments with secure, highly available infrastructure.",
      "Designing CI/CD pipelines using Jenkins, Azure DevOps, and GitHub Actions with automated build validation, security scanning, and controlled rollouts.",
      "Managing microservices deployments for patient engagement, claims processing, and provider integration services.",
      "Implementing observability with Prometheus, Grafana, ELK, Azure Monitor, and CloudWatch to improve visibility into performance and utilization.",
      "Using Python and ML techniques on metrics and logs to detect anomalous resource patterns and enable proactive incident prevention."
      ],
      tech: ["AWS","Azure","Kubernetes","PCF","Terraform","Jenkins","Azure DevOps","GitHub Actions","Docker","Ansible","Prometheus","Grafana","ELK","CloudWatch","Python","DevSecOps"],
    },
    {
      title: "DevOps Engineer",
      company: "Wipro Technologies",
      location: "Chennai, India",
      duration: "Apr 2021 - Oct 2023",
      bullets: [
        "Spearheaded the design of CI/CD pipelines using Jenkins, Git, and Maven, embedding automated testing and artifact management to cut release turnaround time by 30% and stabilize deployments across AWS environments.",
        "Built and maintained AWS infrastructure through Terraform provisioning of EC2 Auto Scaling, VPC networking, RDS Multi-AZ, and ALB, reducing manual setup effort by 70% while strengthening production availability.",
        "Standardized multi-environment infrastructure by creating reusable Terraform modules, accelerating environment provisioning by 40% and ensuring configuration consistency across development, QA, and production accounts.",
        "Migrated monolithic workloads to Docker containers and orchestrated deployments on Amazon EKS with rolling updates and Horizontal Pod Autoscaling, improving peak-time scalability by 35% for retail traffic spikes.",
        "Orchestrated blue-green and canary releases through Kubernetes-integrated Jenkins pipelines, enabling near zero downtime deployments and improving release confidence during high-volume sales events.",
        "Established centralized observability using Prometheus, Grafana, and AWS CloudWatch to monitor application and infrastructure metrics, reducing Mean Time to Resolution by 40% through proactive alerting.",
        "Automated Linux server configuration and middleware deployments with Ansible playbooks, eliminating configuration drift and increasing deployment consistency across distributed AWS systems.",
        "Embedded DevSecOps practices by integrating SonarQube code analysis and Trivy image scanning into CI/CD workflows, lowering critical vulnerabilities in production builds by 25% and enhancing cloud security compliance."
      ],
      tech: ["AWS", "Terraform", "Jenkins", "Kubernetes", "Docker", "Ansible", "Prometheus", "Grafana", "SonarQube"],
    },
    {
      title: "Cloud Engineer",
      company: "Wipro Technologies",
      location: "Chennai, India",
      duration: "Feb 2020 - Mar 2021",
      bullets: [
        "Built AWS-based application environments using EC2, S3, VPC, and Application Load Balancers to support retail workloads, reducing environment setup time by 35% and improving deployment consistency.",
        "Automated multi-environment infrastructure provisioning with Terraform modules, eliminating configuration inconsistencies and lowering manual setup errors by 40% across QA and staging accounts.",
        "Integrated Jenkins pipelines with Git repositories to validate build artifacts and deployment packages, improving release success rates to 95% through structured CI/CD validation.",
        "Deployed Dockerized services into Amazon EKS clusters for pre-production validation, accelerating container verification cycles by 30% during sprint-based releases.",
        "Established monitoring dashboards using AWS CloudWatch and Grafana to track compute metrics and application logs, decreasing incident response time by 25% through real-time alerting.",
        "Strengthened access control by configuring IAM roles, security groups, and subnet isolation within VPC architecture, enhancing cloud security posture across non-production environments.",
        "Validated deployment workflows and rollback mechanisms within Jenkins-driven releases, reducing post-deployment defects and improving release stability for customer-facing features.",
        "Streamlined Linux instance configuration and middleware setup using Ansible automation, minimizing configuration drift and ensuring consistent application behavior across AWS-hosted systems."
      ],
      tech: ["AWS", "EC2", "S3", "VPC", "Terraform", "Jenkins", "Docker", "EKS", "Ansible"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform -translate-x-1/2 hidden md:block" />

                {/* Card */}
                <Card className={`w-full md:w-[calc(50%-2rem)] p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 border-accent/20 ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                  }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-xl text-accent font-semibold">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
