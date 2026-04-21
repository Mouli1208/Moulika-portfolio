import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "/moulika-avatar.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              className="text-xl md:text-2xl text-accent font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hello I'm
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#6E6E6E] to-[#E0E0E0] text-transparent bg-clip-text py-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Moulika Manthripragada
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-accent font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              DevOps Engineer
            </motion.h2>

            <div className="text-xl md:text-2xl text-muted-foreground h-16">
              <TypeAnimation
                sequence={[
                  "Designing AWS Cloud Infrastructure",
                  2000,
                  "Automating CI/CD Pipelines",
                  2000,
                  "Terraform | Jenkins | Kubernetes",
                  2000,
                  "Docker | Amazon EKS",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              a DevOps Engineer with 5+ years of experience designing and
            automating secure, highly available infrastructure on AWS and Azure
            using Kubernetes, Terraform, and CI/CD pipelines for healthcare
            workloads.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="gradient"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button
                size="lg"
                variant="gradient"
                asChild
              >
                <a href="/RESUME_SRAVANTHI PUSULURU_PD 1.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button> */}



              <Button
                size="lg"
                variant="gradient"
                className="relative overflow-hidden group"
                asChild
              >
                <a href="/Moulika M.pdf" download>
                  {/* Shining line */}
                  <span
                    className="absolute inset-0 w-1/3 h-full bg-black/80 
                 translate-x-[-100%] group-hover:animate-[shine_0.5s_linear_infinite] 
                 skew-x-6"
                  />

                  <Download className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </Button>

            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <img
                src={profileImg}
                alt="Moulika Manthripragada"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-accent shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
