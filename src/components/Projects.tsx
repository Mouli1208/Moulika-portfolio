import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "swiper/css/bundle";

import phishingImg from "/project-cicd.png";
import privacyImg from "/project-microservices.png";
import healthImg from "/project-devsecops.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Healthcare Data Platform",
      image: healthImg,
      description: [
      "Provisioned VPC networking, load balancers, and compute infrastructure with Terraform to host patient-facing microservices on EKS.",
      "Containerized services with Docker and deployed via Helm with zero-downtime deployment strategies.",
      "Implemented observability using Prometheus, Grafana, ELK, and CloudWatch, tracking SLIs and enabling audit-ready logging.",
      "Applied Python-based analytics on metrics and logs to detect anomalies and support proactive scaling decisions."
      ],
      tech: ["AWS","Terraform","Docker","Kubernetes","EKS","Prometheus","Grafana","ELK","CloudWatch","Python",],
      preview: "#",
      code: "#",
    },
    {
      title: "Enterprise CI/CD & Kubernetes Platform",
      image: privacyImg,
      description: [
        "Designed reusable Jenkins pipelines to support build, test, containerization, and deployment stages.",
      "Automated provisioning of Kubernetes clusters and AWS resources using Terraform modules.",
      "Implemented Helm-based deployments, RBAC, and observability dashboards for service health and performance.",
      "Optimized Horizontal Pod Autoscaling (HPA) policies to maintain performance under variable workload demand.",
      ],
      tech: ["Jenkins", "Git", "Maven", "Docker", "Terraform", "Kubernetes", "Prometheus","Grafana",],
      preview: "#",
      code: "#",
    },
    {
      title: "Python Microservices Deployment Platform",
      image: phishingImg,
      description: [
      "Containerized Python microservices to provide consistent runtime environments across dev, QA, and production.",
      "Provisioned AWS infrastructure including networking, compute, and load balancers with Terraform.",
      "Configured ELK-based centralized logging for faster troubleshooting and operational visibility.",
      ],
      tech: ["Python", "Docker", "AWS", "Terraform", "ELK"],
      preview: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 " ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card className="overflow-hidden bg-background border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left: Image */}
                    <div className="relative overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Right: Content */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <ul className="space-y-3 mb-6">
                          {project.description.map((desc, i) => (
                            <li key={i} className="flex gap-2 text-muted-foreground">
                              <span className="text-accent mt-1">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-accent/10 text-accent">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        {/* <Button
                          variant="gradient"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.preview}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Preview
                          </a>
                        </Button> */}
                        {/* <Button
                          variant="gradient"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.code}>
                            <Code2 className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-prev-custom border-accent text-accent hover:bg-accent/10"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-2 px-4">
              <span className="text-accent font-bold">{activeIndex + 1}</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{projects.length}</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-next-custom border-accent text-accent hover:bg-accent/10"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
