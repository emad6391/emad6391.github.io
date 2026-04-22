export const meta = {
  name: "Ed Al",
  role: "DevOps Engineer",
  tagline: "Cloud · Terraform · Kubernetes · CI/CD",
  status: "Available for opportunities",
};

export const tags = [
  { label: "Infrastructure as Code", style: "a" },
  { label: "Container Orchestration", style: "a" },
  { label: "AWS Cloud", style: "b" },
  { label: "Pipeline Automation", style: "b" },
  { label: "Site Reliability", style: "default" },
  { label: "GitOps", style: "default" },
];

export const about = [
  {
    label: "origin story",
    text: "My journey into DevOps began with a fascination for how software actually ships — the invisible machinery between a developer's commit and a live system. I was drawn to solving the friction between development velocity and operational stability.",
  },
  {
    label: "focus & craft",
    text: "I specialize in automation, CI/CD pipelines, and containerization. My toolkit centres around Terraform for infrastructure provisioning, Kubernetes for workload orchestration, and AWS for scalable cloud architecture.",
  },
  {
    label: "this portfolio",
    text: "This static website showcases the real-world infrastructure and tooling projects I've built. It's intentionally lean — a static React build that deploys in seconds, because a DevOps engineer's portfolio should practice what it preaches.",
  },
  {
    label: "what's next",
    text: "I continue to expand my knowledge across platform engineering, FinOps, and security automation. The cloud landscape evolves fast — staying current is the job, not just a habit.",
  },
];

export const skills = [
  { label: "Terraform", hot: true },
  { label: "Kubernetes", hot: true },
  { label: "AWS", hot: true },
  { label: "CI/CD", hot: true },
  { label: "Docker", hot: false },
  { label: "Helm", hot: false },
  { label: "GitHub Actions", hot: false },
  { label: "ArgoCD", hot: false },
  { label: "Prometheus", hot: false },
  { label: "Grafana", hot: false },
  { label: "Python", hot: false },
  { label: "Bash", hot: false },
  { label: "Linux", hot: false },
  { label: "Networking", hot: false },
];

export const certifications = [
  {
    name: "HashiCorp Certified: Terraform Associate",
    provider: "HashiCorp",
    emoji: "🟣",
    gradient: "linear-gradient(90deg,#7b5ea7,#9b59b6)",
  },
  {
    name: "AWS Certified DevOps Engineer – Professional",
    provider: "Amazon Web Services",
    emoji: "🟠",
    gradient: "linear-gradient(90deg,#f59e0b,#f97316)",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    provider: "CNCF",
    emoji: "🔵",
    gradient: "linear-gradient(90deg,#3b82f6,#06b6d4)",
  },
  {
    name: "AWS Certified Developer – Associate",
    provider: "Amazon Web Services",
    emoji: "🟡",
    gradient: "linear-gradient(90deg,#f59e0b,#eab308)",
  },
];

export const projects = [
  {
    title: "Terraform AWS Infrastructure",
    description:
      "Provisioned a production-grade AWS environment including VPC, EC2 instances, security groups, and networking — fully declarative and version-controlled via Terraform modules.",
    tech: ["Terraform", "AWS VPC", "EC2", "IAM"],
    link: "#",
  },
  {
    title: "Kubernetes Microservices Platform",
    description:
      "Deployed a containerised microservices application on EKS with Helm charts, horizontal pod autoscaling, and ingress management via NGINX.",
    tech: ["Kubernetes", "EKS", "Helm", "Docker"],
    link: "#",
  },
  {
    title: "CI/CD Pipeline with GitHub Actions",
    description:
      "Built end-to-end deployment pipelines with automated testing, Docker image builds, ECR pushes, and rolling deployments to ECS — zero-downtime releases on every merge.",
    tech: ["GitHub Actions", "AWS ECR", "ECS", "Docker"],
    link: "#",
  },
  {
    title: "Observability Stack",
    description:
      "Implemented a monitoring and alerting stack using Prometheus and Grafana on Kubernetes, with custom dashboards and PagerDuty integration for production alerting.",
    tech: ["Prometheus", "Grafana", "Kubernetes", "PagerDuty"],
    link: "#",
  },
];
