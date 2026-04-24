import { useState } from "react";

const roles = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    icon: "⬡",
    color: "#5B8DEF",
    desc: "Builds and deploys AI-powered products and features at scale.",
    levels: {
      beginner: {
        summary: "Learn Python, ML basics, and how to use pretrained models in applications.",
        categories: [
          { name: "Language & Environment", tools: ["Python 3.11+", "Jupyter / Colab", "VS Code", "Git & GitHub"] },
          { name: "ML Foundations", tools: ["scikit-learn", "NumPy / Pandas", "Matplotlib / Seaborn", "HuggingFace Transformers"] },
          { name: "LLM Usage", tools: ["OpenAI API", "Anthropic API", "LangChain basics", "Prompt engineering"] },
          { name: "Deployment Basics", tools: ["FastAPI", "Gradio / Streamlit", "Docker basics", "HuggingFace Spaces"] },
        ]
      },
      intermediate: {
        summary: "Fine-tune models, build RAG pipelines, and ship production AI features.",
        categories: [
          { name: "Deep Learning", tools: ["PyTorch", "HuggingFace PEFT / LoRA", "Weights & Biases", "ONNX"] },
          { name: "RAG & Retrieval", tools: ["LangChain / LlamaIndex", "ChromaDB / Pinecone", "pgvector", "Embedding models"] },
          { name: "Data & Storage", tools: ["PostgreSQL", "Redis", "SQLAlchemy", "Parquet / DuckDB"] },
          { name: "MLOps Basics", tools: ["MLflow", "GitHub Actions CI/CD", "FastAPI + Pydantic", "AWS / GCP basics"] },
        ]
      },
      advanced: {
        summary: "Design AI systems at scale, train custom models, and own end-to-end AI infrastructure.",
        categories: [
          { name: "Model Training at Scale", tools: ["PyTorch FSDP / DeepSpeed", "vLLM / TGI serving", "Quantization (GPTQ, AWQ)", "Flash Attention"] },
          { name: "System Design", tools: ["Kubernetes + Helm", "Ray / Ray Serve", "Feature stores (Feast)", "Data versioning (DVC, LakeFS)"] },
          { name: "Evaluation & Safety", tools: ["RAGAS", "LLM-as-judge pipelines", "Red teaming frameworks", "Guardrails AI"] },
          { name: "Infra & Observability", tools: ["Prometheus + Grafana", "OpenTelemetry", "Terraform", "Custom CUDA kernels"] },
        ]
      }
    }
  },
  {
    id: "ai-researcher",
    title: "AI Researcher",
    icon: "◎",
    color: "#A78BFA",
    desc: "Advances the state of the art through novel algorithms, architectures, and experiments.",
    levels: {
      beginner: {
        summary: "Build math foundations, understand core architectures, and reproduce papers.",
        categories: [
          { name: "Math Foundations", tools: ["Linear algebra (3Blue1Brown)", "Calculus & statistics", "Probability theory", "Information theory basics"] },
          { name: "ML Core", tools: ["PyTorch from scratch", "scikit-learn", "NumPy", "Jupyter notebooks"] },
          { name: "Reading Research", tools: ["arXiv (cs.LG, cs.CL)", "Papers With Code", "Andrej Karpathy tutorials", "Distill.pub"] },
          { name: "Experiment Tracking", tools: ["Weights & Biases", "TensorBoard", "Google Colab / Kaggle", "Matplotlib"] },
        ]
      },
      intermediate: {
        summary: "Run original experiments, contribute to open-source, and write your own papers.",
        categories: [
          { name: "Research Frameworks", tools: ["PyTorch Lightning", "HuggingFace Trainer", "Hydra (config mgmt)", "einops"] },
          { name: "Key Architectures", tools: ["Transformer variants", "Diffusion models", "Graph Neural Nets", "SSMs (Mamba)"] },
          { name: "Compute & Scale", tools: ["Multi-GPU training (DDP)", "Mixed precision (bf16)", "Gradient checkpointing", "SLURM / HPC"] },
          { name: "Paper Workflow", tools: ["LaTeX / Overleaf", "Semantic Scholar API", "Connected Papers", "Zotero"] },
        ]
      },
      advanced: {
        summary: "Lead research directions, design novel architectures, and publish at top venues.",
        categories: [
          { name: "Frontier Methods", tools: ["RLHF / DPO / PPO", "Mechanistic interpretability", "Sparse autoencoders", "Constitutional AI"] },
          { name: "Large-Scale Training", tools: ["Megatron-LM", "FairScale", "Flash Attention 2", "Custom CUDA kernels"] },
          { name: "Evaluation", tools: ["BIG-Bench / MMLU", "EleutherAI LM Eval", "Human eval design", "Statistical testing"] },
          { name: "Venues & Community", tools: ["NeurIPS / ICML / ICLR", "ACL / EMNLP (NLP)", "CVPR / ECCV (vision)", "Alignment Forum"] },
        ]
      }
    }
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Developer",
    icon: "◈",
    color: "#34D399",
    desc: "Builds autonomous AI agents that plan, use tools, and complete multi-step tasks.",
    levels: {
      beginner: {
        summary: "Understand LLM APIs, function calling, and simple tool-use patterns.",
        categories: [
          { name: "LLM APIs", tools: ["Anthropic API (tool use)", "OpenAI function calling", "Ollama (local models)", "LiteLLM"] },
          { name: "Agent Frameworks", tools: ["LangChain Agents", "LlamaIndex agents", "Phidata", "CrewAI basics"] },
          { name: "Tools & Memory", tools: ["Web search tools", "Python REPL tool", "SQLite memory", "JSON-based state"] },
          { name: "Dev Environment", tools: ["Python 3.11+", "FastAPI", "Pydantic v2", "dotenv / secrets mgmt"] },
        ]
      },
      intermediate: {
        summary: "Design multi-agent systems, build reliable tool pipelines, and add persistent memory.",
        categories: [
          { name: "Agent Orchestration", tools: ["LangGraph", "AutoGen (Microsoft)", "CrewAI advanced", "Prefect / Temporal"] },
          { name: "Memory Systems", tools: ["Chroma / Pinecone (vector)", "Redis (short-term)", "PostgreSQL (episodic)", "Mem0"] },
          { name: "Tool Ecosystem", tools: ["Browser automation (Playwright)", "Code execution sandbox", "MCP (Anthropic)", "REST API wrapping"] },
          { name: "Reliability", tools: ["Structured outputs", "Retry / fallback logic", "Agent observability (LangSmith)", "Rate limiting"] },
        ]
      },
      advanced: {
        summary: "Architect production-grade multi-agent systems with evaluation, safety, and scale.",
        categories: [
          { name: "Advanced Orchestration", tools: ["Custom agent runtimes", "Event-driven agents", "Hierarchical agent graphs", "Stateful workflow engines"] },
          { name: "Evaluation", tools: ["Agent evals (GAIA, SWE-bench)", "Trajectory logging", "Human-in-the-loop feedback", "Automated red teaming"] },
          { name: "Safety & Control", tools: ["Guardrails AI", "Constitutional constraints", "Sandboxed execution (E2B)", "Audit trails"] },
          { name: "Infra", tools: ["Kubernetes agent pods", "Message queues (Kafka)", "Distributed tracing", "Cost tracking dashboards"] },
        ]
      }
    }
  },
  {
    id: "ai-architect",
    title: "AI Architect",
    icon: "◫",
    color: "#F97316",
    desc: "Designs end-to-end AI systems architecture, from data ingestion to model serving.",
    levels: {
      beginner: {
        summary: "Learn system design fundamentals and how AI components fit together.",
        categories: [
          { name: "System Design Basics", tools: ["REST API design", "SQL + NoSQL patterns", "Docker & containers", "Load balancing concepts"] },
          { name: "AI Components", tools: ["LLM APIs overview", "Vector DB concepts", "Embedding pipelines", "Model serving basics"] },
          { name: "Cloud Basics", tools: ["AWS / GCP / Azure fundamentals", "S3 / Cloud Storage", "EC2 / Compute basics", "IAM & security"] },
          { name: "Diagramming", tools: ["Draw.io / Excalidraw", "C4 model", "Architecture decision records", "Lucidchart"] },
        ]
      },
      intermediate: {
        summary: "Design scalable AI pipelines, select the right tools, and document trade-offs.",
        categories: [
          { name: "Data Architecture", tools: ["Data lake patterns", "Feature stores (Feast)", "Delta Lake / Iceberg", "ETL / ELT pipelines"] },
          { name: "Model Architecture", tools: ["Model registry (MLflow)", "A/B testing frameworks", "Shadow deployments", "Multi-model routing"] },
          { name: "Serving Layer", tools: ["Triton Inference Server", "Ray Serve", "BentoML", "API gateways"] },
          { name: "Observability", tools: ["OpenTelemetry", "Prometheus + Grafana", "Datadog / New Relic", "Cost attribution"] },
        ]
      },
      advanced: {
        summary: "Lead org-wide AI platform decisions, define standards, and ensure reliability at scale.",
        categories: [
          { name: "Platform Design", tools: ["Internal developer platforms", "ML platform (Kubeflow, Vertex AI)", "Data mesh architecture", "LLMOps patterns"] },
          { name: "Governance", tools: ["Model cards & documentation", "Data lineage (OpenLineage)", "Compliance frameworks (SOC2, GDPR)", "AI risk assessment"] },
          { name: "Cost & Performance", tools: ["GPU cluster design", "Spot instance strategies", "Model distillation for cost", "FinOps for AI"] },
          { name: "Multi-cloud & Hybrid", tools: ["Terraform / Pulumi", "Multi-cloud strategy", "Edge AI deployment", "Private cloud LLMs"] },
        ]
      }
    }
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "◬",
    color: "#F59E0B",
    desc: "Extracts insights from data, builds predictive models, and communicates findings.",
    levels: {
      beginner: {
        summary: "Master statistics, EDA, and classical ML with Python.",
        categories: [
          { name: "Data Wrangling", tools: ["Pandas", "NumPy", "OpenRefine", "Excel / Google Sheets"] },
          { name: "Visualisation", tools: ["Matplotlib", "Seaborn", "Plotly", "Tableau Public"] },
          { name: "Statistics", tools: ["Hypothesis testing", "Probability distributions", "Correlation / regression", "A/B testing basics"] },
          { name: "ML Basics", tools: ["scikit-learn", "Linear & logistic regression", "Decision trees", "k-means clustering"] },
        ]
      },
      intermediate: {
        summary: "Handle large datasets, build robust models, and deploy to business stakeholders.",
        categories: [
          { name: "Advanced ML", tools: ["XGBoost / LightGBM", "Feature engineering", "SHAP (model explainability)", "Imbalanced datasets"] },
          { name: "Big Data", tools: ["PySpark", "Dask", "DuckDB", "BigQuery / Redshift"] },
          { name: "SQL & Databases", tools: ["Advanced SQL (window functions)", "PostgreSQL", "dbt", "Data warehousing patterns"] },
          { name: "Experimentation", tools: ["Statsmodels", "Bayesian A/B testing", "Power analysis", "Causal inference (DoWhy)"] },
        ]
      },
      advanced: {
        summary: "Lead data strategy, build custom models, and drive business decisions with rigour.",
        categories: [
          { name: "Advanced Modelling", tools: ["Bayesian modelling (PyMC)", "Time series (Prophet, NeuralProphet)", "Survival analysis", "NLP with spaCy / HF"] },
          { name: "ML in Production", tools: ["MLflow / DVC", "Model monitoring (Evidently AI)", "Feature stores", "Automated retraining"] },
          { name: "Causal & Experimental", tools: ["Causal ML (EconML)", "Difference-in-differences", "Instrumental variables", "Synthetic control"] },
          { name: "Communication", tools: ["Streamlit dashboards", "Quarto / R Markdown reports", "Executive storytelling", "Data journalism tools"] },
        ]
      }
    }
  },
  {
    id: "ml-engineer",
    title: "ML Engineer",
    icon: "◉",
    color: "#EC4899",
    desc: "Bridges research and production — trains, evaluates, and deploys ML models reliably.",
    levels: {
      beginner: {
        summary: "Learn PyTorch deeply, understand the training loop, and deploy your first model.",
        categories: [
          { name: "Deep Learning", tools: ["PyTorch", "Torchvision", "HuggingFace Transformers", "Weights & Biases"] },
          { name: "Data Pipelines", tools: ["PyTorch DataLoader", "Albumentations (augmentation)", "HuggingFace Datasets", "Pandas"] },
          { name: "Model Serving", tools: ["FastAPI", "TorchServe basics", "Gradio", "Docker"] },
          { name: "Experimentation", tools: ["Jupyter", "Optuna (hyperparameter tuning)", "Colab / Kaggle GPU", "MLflow basics"] },
        ]
      },
      intermediate: {
        summary: "Optimise training, evaluate rigorously, and run scalable inference.",
        categories: [
          { name: "Training at Scale", tools: ["PyTorch DDP (multi-GPU)", "Mixed precision (bf16/fp16)", "Gradient accumulation", "PyTorch Lightning"] },
          { name: "Model Optimisation", tools: ["ONNX export", "TorchScript", "Quantisation (int8/int4)", "Pruning & distillation"] },
          { name: "Evaluation", tools: ["torchmetrics", "LM Eval Harness", "Confusion matrices + PR curves", "Statistical significance"] },
          { name: "Pipelines", tools: ["DVC (data version control)", "Airflow / Prefect", "Feature stores", "Model registry (MLflow)"] },
        ]
      },
      advanced: {
        summary: "Train large models from scratch, build efficient inference systems, and own model lifecycle.",
        categories: [
          { name: "Large-Scale Training", tools: ["FSDP / DeepSpeed ZeRO", "Megatron-LM (tensor parallel)", "Flash Attention 2", "Gradient checkpointing"] },
          { name: "Inference Optimisation", tools: ["vLLM / TGI", "Continuous batching", "KV cache tuning", "Speculative decoding"] },
          { name: "Custom Kernels", tools: ["Triton (GPU kernels)", "CUDA programming basics", "torch.compile", "Profiling (Nsight, py-spy)"] },
          { name: "Research → Prod", tools: ["Paper reproduction workflow", "Ablation study design", "Benchmark curation", "Open-source contribution"] },
        ]
      }
    }
  },
  {
    id: "mlops-engineer",
    title: "ML Ops Engineer",
    icon: "⬟",
    color: "#06B6D4",
    desc: "Builds and maintains the infrastructure that keeps ML models running reliably in production.",
    levels: {
      beginner: {
        summary: "Learn CI/CD, containerisation, and basic ML pipeline tooling.",
        categories: [
          { name: "DevOps Foundations", tools: ["Git & GitHub Actions", "Docker", "Linux CLI", "Bash scripting"] },
          { name: "ML Experiment Tracking", tools: ["MLflow", "Weights & Biases", "DVC", "Hydra (config)"] },
          { name: "Cloud Basics", tools: ["AWS SageMaker basics", "GCP Vertex AI basics", "S3 / GCS storage", "Cloud IAM"] },
          { name: "Model Serving", tools: ["FastAPI", "Docker Compose", "Gradio", "BentoML basics"] },
        ]
      },
      intermediate: {
        summary: "Automate training pipelines, monitor models in production, and manage infrastructure as code.",
        categories: [
          { name: "Pipeline Orchestration", tools: ["Airflow", "Prefect", "Kubeflow Pipelines", "ZenML"] },
          { name: "Model Registry & Deployment", tools: ["MLflow Model Registry", "Seldon Core", "BentoML", "Canary deployments"] },
          { name: "Monitoring", tools: ["Evidently AI (drift detection)", "WhyLabs", "Prometheus + Grafana", "Arize AI"] },
          { name: "Infrastructure as Code", tools: ["Terraform", "Helm charts", "Kubernetes basics", "Pulumi"] },
        ]
      },
      advanced: {
        summary: "Design ML platforms, manage GPU clusters, and enforce governance at scale.",
        categories: [
          { name: "ML Platform Engineering", tools: ["Kubeflow full stack", "Feast (feature store)", "LakeFS / Delta Lake", "Internal tooling design"] },
          { name: "GPU Cluster Ops", tools: ["NVIDIA GPU Operator", "SLURM scheduling", "Spot instance orchestration", "Cost optimisation"] },
          { name: "LLMOps", tools: ["vLLM / TGI deployment", "Prompt versioning", "LangSmith / Langfuse", "Fine-tune pipelines (LoRA at scale)"] },
          { name: "Governance & Security", tools: ["Model cards automation", "Data lineage (OpenLineage)", "RBAC for ML resources", "Audit logging"] },
        ]
      }
    }
  },
  {
    id: "aiops-engineer",
    title: "AI Ops Engineer",
    icon: "◧",
    color: "#84CC16",
    desc: "Operates and monitors AI systems in production — uptime, reliability, and incident response.",
    levels: {
      beginner: {
        summary: "Learn SRE fundamentals and apply them to AI service operations.",
        categories: [
          { name: "SRE Basics", tools: ["SLOs / SLAs / error budgets", "On-call practices", "Incident management", "Linux sysadmin"] },
          { name: "Monitoring", tools: ["Prometheus", "Grafana", "Alertmanager", "PagerDuty / OpsGenie"] },
          { name: "AI Service Basics", tools: ["LLM API rate limits & retries", "Model latency debugging", "Log aggregation (ELK stack)", "Uptime monitoring"] },
          { name: "Cloud Operations", tools: ["AWS CloudWatch", "GCP Operations Suite", "Azure Monitor", "Cost dashboards"] },
        ]
      },
      intermediate: {
        summary: "Build observability stacks for AI systems and automate incident remediation.",
        categories: [
          { name: "AI-Specific Monitoring", tools: ["LLM output quality metrics", "Token throughput monitoring", "Embedding drift detection", "Latency percentiles (P99)"] },
          { name: "Incident Automation", tools: ["Runbook automation", "Auto-scaling policies", "Circuit breakers", "Chaos engineering (LitmusChaos)"] },
          { name: "Tracing & Profiling", tools: ["OpenTelemetry", "Jaeger / Tempo", "Langfuse (LLM tracing)", "Pyroscope (profiling)"] },
          { name: "Cost Operations", tools: ["GPU utilisation tracking", "FinOps tools (Kubecost)", "Spot/preemptible strategies", "Usage-based alerting"] },
        ]
      },
      advanced: {
        summary: "Design reliability engineering for large-scale AI infrastructure with multi-region resilience.",
        categories: [
          { name: "Large-Scale Reliability", tools: ["Multi-region active-active", "Model fallback routing", "Blue/green LLM deployments", "Traffic shadowing"] },
          { name: "AI-Native Observability", tools: ["Custom LLM dashboards", "RAGAS for continuous eval", "Canary analysis frameworks", "Anomaly detection pipelines"] },
          { name: "Platform Engineering", tools: ["Service mesh (Istio / Linkerd)", "GitOps (ArgoCD / Flux)", "Policy as code (OPA)", "Platform SLO automation"] },
          { name: "Security Operations", tools: ["Prompt injection detection", "API abuse prevention", "Model watermarking", "Compliance reporting (SOC2)"] },
        ]
      }
    }
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    icon: "◑",
    color: "#F472B6",
    desc: "Crafts and optimises prompts to get reliable, high-quality outputs from LLMs.",
    levels: {
      beginner: {
        summary: "Learn prompt fundamentals, zero/few-shot techniques, and basic evaluation.",
        categories: [
          { name: "Core Techniques", tools: ["Zero-shot & few-shot prompting", "Chain-of-thought (CoT)", "Role & persona prompting", "Output format specification"] },
          { name: "LLM Playgrounds", tools: ["Claude.ai", "ChatGPT / playground", "Google AI Studio", "HuggingFace Chat"] },
          { name: "Evaluation Basics", tools: ["Manual prompt testing", "A/B comparing outputs", "Rubric-based scoring", "Latency vs quality trade-offs"] },
          { name: "Resources", tools: ["Anthropic prompt library", "OpenAI cookbook", "PromptingGuide.ai", "Learn Prompting (free book)"] },
        ]
      },
      intermediate: {
        summary: "Build prompt pipelines, evaluate at scale, and optimise for production use cases.",
        categories: [
          { name: "Advanced Techniques", tools: ["ReAct prompting", "Self-consistency sampling", "Tree of Thoughts", "Structured output (JSON mode)"] },
          { name: "Prompt Management", tools: ["LangSmith (prompt versioning)", "Langfuse", "PromptLayer", "Weights & Biases Prompts"] },
          { name: "Automated Evaluation", tools: ["LLM-as-judge pipelines", "RAGAS (RAG evaluation)", "G-Eval", "Custom rubric automation"] },
          { name: "RAG Prompt Design", tools: ["Context window management", "Retrieval-aware prompts", "Citation prompting", "System prompt architecture"] },
        ]
      },
      advanced: {
        summary: "Design prompt systems for production, automate optimisation, and prevent adversarial attacks.",
        categories: [
          { name: "Automated Prompt Optimisation", tools: ["DSPy (Stanford)", "APE (Automatic Prompt Engineer)", "TextGrad", "Evolutionary prompt search"] },
          { name: "Safety & Robustness", tools: ["Red teaming prompts", "Jailbreak resistance testing", "Guardrails AI", "Constitutional AI patterns"] },
          { name: "System Prompt Architecture", tools: ["Multi-turn conversation design", "Dynamic context injection", "Tool-use prompt patterns", "Multi-model prompt routing"] },
          { name: "Evals at Scale", tools: ["Custom eval datasets", "Human annotation pipelines", "Statistical analysis of outputs", "Continuous prompt monitoring"] },
        ]
      }
    }
  },
  {
    id: "ai-cloud-architect",
    title: "AI Cloud Architect",
    icon: "◭",
    color: "#38BDF8",
    desc: "Designs cloud-native AI infrastructure across AWS, GCP, and Azure at enterprise scale.",
    levels: {
      beginner: {
        summary: "Get cloud certified, learn managed AI services, and deploy your first cloud ML pipeline.",
        categories: [
          { name: "Cloud Fundamentals", tools: ["AWS Cloud Practitioner cert", "GCP Associate cert", "Azure AI Fundamentals cert", "Terraform basics"] },
          { name: "Managed AI Services", tools: ["AWS SageMaker basics", "GCP Vertex AI basics", "Azure ML Studio", "AWS Bedrock"] },
          { name: "Storage & Compute", tools: ["S3 / GCS / Azure Blob", "EC2 / GCE / Azure VMs", "GPU instance types", "Auto Scaling Groups"] },
          { name: "Networking Basics", tools: ["VPC / VNet concepts", "Load balancers", "CDN basics", "Cloud DNS"] },
        ]
      },
      intermediate: {
        summary: "Architect scalable AI platforms on cloud, optimise cost, and implement security.",
        categories: [
          { name: "ML Platform Services", tools: ["SageMaker Pipelines", "Vertex AI Pipelines", "Azure ML Pipelines", "Managed Kubeflow"] },
          { name: "Data Platform", tools: ["AWS Glue + Athena", "BigQuery + Dataflow", "Azure Synapse", "Databricks on cloud"] },
          { name: "LLM on Cloud", tools: ["AWS Bedrock (Claude, Titan)", "GCP Vertex AI (Gemini)", "Azure OpenAI Service", "Self-hosted vLLM on K8s"] },
          { name: "Security & Compliance", tools: ["IAM / RBAC design", "Private endpoints / VPC peering", "Encryption at rest & transit", "Cloud Security Posture Mgmt"] },
        ]
      },
      advanced: {
        summary: "Design enterprise AI platforms with multi-cloud, FinOps, and governance at scale.",
        categories: [
          { name: "Multi-Cloud & Hybrid", tools: ["Anthos / Arc / AWS Outposts", "Multi-cloud Kubernetes (Rancher)", "WAN optimisation", "Sovereign cloud patterns"] },
          { name: "FinOps for AI", tools: ["GPU spot/preemptible orchestration", "Reserved instance strategy", "Kubecost / CloudHealth", "Showback / chargeback models"] },
          { name: "Enterprise AI Platform", tools: ["AWS SageMaker Studio Domain", "Vertex AI Workbench + Registry", "Azure AI Foundry", "Internal AI marketplace"] },
          { name: "Resilience & Scale", tools: ["Multi-region active-active", "Disaster recovery for ML", "Chaos engineering on cloud", "10k+ GPU cluster design"] },
        ]
      }
    }
  }
];

const levelColors = {
  beginner: { bg: "#1a2e1a", text: "#4ade80", border: "#166534" },
  intermediate: { bg: "#1e2a3a", text: "#60a5fa", border: "#1d4ed8" },
  advanced: { bg: "#2d1a2e", text: "#c084fc", border: "#7c3aed" }
};

const levelLabels = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

export default function App() {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? roles.filter(r =>
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.desc.toLowerCase().includes(search.toLowerCase())
      )
    : roles;

  const levelData = activeRole.levels[activeLevel];
  const lc = levelColors[activeLevel];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      color: "#e2e8f0",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1e293b",
        padding: "20px 28px 16px",
        background: "#0d0d14"
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 11,
            color: "#475569",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}>AI Career Stack</span>
          <span style={{ color: "#1e293b", fontSize: 12 }}>|</span>
          <span style={{ fontSize: 11, color: "#334155" }}>10 roles · 3 levels · 40+ tool categories</span>
        </div>
        <h1 style={{
          fontSize: 22,
          fontWeight: 600,
          color: "#f1f5f9",
          margin: 0,
          letterSpacing: "-0.3px"
        }}>AI Career Tech Stack Dashboard</h1>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 240,
          flexShrink: 0,
          borderRight: "1px solid #1e293b",
          background: "#0d0d14",
          padding: "16px 12px",
          overflowY: "auto"
        }}>
          <input
            placeholder="Search roles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              background: "#111827",
              border: "1px solid #1e293b",
              borderRadius: 8,
              padding: "7px 11px",
              color: "#e2e8f0",
              fontSize: 12,
              marginBottom: 12,
              outline: "none",
              boxSizing: "border-box"
            }}
          />
          {filtered.map(role => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role)}
              style={{
                width: "100%",
                textAlign: "left",
                background: activeRole.id === role.id ? "#111827" : "transparent",
                border: activeRole.id === role.id
                  ? `1px solid ${role.color}33`
                  : "1px solid transparent",
                borderLeft: activeRole.id === role.id
                  ? `3px solid ${role.color}`
                  : "3px solid transparent",
                borderRadius: 8,
                padding: "9px 11px",
                marginBottom: 3,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 9,
                transition: "all 0.15s"
              }}
            >
              <span style={{ fontSize: 14, color: role.color }}>{role.icon}</span>
              <span style={{
                fontSize: 12,
                fontWeight: activeRole.id === role.id ? 500 : 400,
                color: activeRole.id === role.id ? "#f1f5f9" : "#94a3b8",
                lineHeight: 1.3
              }}>{role.title}</span>
            </button>
          ))}
          {filtered.length === 0 && (
            <div style={{ fontSize: 12, color: "#475569", padding: "8px 4px" }}>No roles found</div>
          )}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {/* Role header */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{
                fontSize: 22,
                color: activeRole.color,
                background: `${activeRole.color}15`,
                borderRadius: 10,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>{activeRole.icon}</span>
              <div>
                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#f1f5f9", letterSpacing: "-0.2px" }}>
                  {activeRole.title}
                </h2>
                <p style={{ margin: 0, fontSize: 13, color: "#64748b", marginTop: 2 }}>{activeRole.desc}</p>
              </div>
            </div>

            {/* Level selector */}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {["beginner", "intermediate", "advanced"].map(lvl => {
                const lci = levelColors[lvl];
                const isActive = activeLevel === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => setActiveLevel(lvl)}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 20,
                      border: isActive ? `1px solid ${lci.border}` : "1px solid #1e293b",
                      background: isActive ? lci.bg : "transparent",
                      color: isActive ? lci.text : "#475569",
                      fontSize: 12,
                      fontWeight: isActive ? 500 : 400,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      letterSpacing: "0.02em"
                    }}
                  >{levelLabels[lvl]}</button>
                );
              })}
            </div>
          </div>

          {/* Summary banner */}
          <div style={{
            background: lc.bg,
            border: `1px solid ${lc.border}33`,
            borderLeft: `3px solid ${lc.border}`,
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 24,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 10,
              color: lc.text,
              opacity: 0.7,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              display: "block",
              marginBottom: 4
            }}>{activeLevel} goal</span>
            <p style={{ margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>
              {levelData.summary}
            </p>
          </div>

          {/* Categories grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16
          }}>
            {levelData.categories.map((cat, ci) => (
              <div
                key={ci}
                style={{
                  background: "#111827",
                  border: "1px solid #1e293b",
                  borderRadius: 12,
                  padding: "16px 18px",
                  transition: "border-color 0.15s"
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14
                }}>
                  <span style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: activeRole.color,
                    flexShrink: 0
                  }} />
                  <span style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#94a3b8",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase"
                  }}>{cat.name}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {cat.tools.map((tool, ti) => (
                    <div
                      key={ti}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "7px 10px",
                        background: "#0f172a",
                        borderRadius: 7,
                        border: "1px solid #1e293b"
                      }}
                    >
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 10,
                        color: activeRole.color,
                        opacity: 0.6,
                        flexShrink: 0,
                        width: 14,
                        textAlign: "center"
                      }}>{ti + 1}</span>
                      <span style={{ fontSize: 12.5, color: "#cbd5e1", lineHeight: 1.3 }}>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{
            marginTop: 32,
            padding: "14px 16px",
            background: "#0d0d14",
            border: "1px solid #1e293b",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            gap: 10
          }}>
            <span style={{ fontSize: 11, color: "#334155", fontFamily: "monospace" }}>ℹ</span>
            <span style={{ fontSize: 11, color: "#475569", lineHeight: 1.5 }}>
              Tools listed reflect the 2025–2026 ecosystem. Levels are cumulative — intermediate assumes beginner foundations. Click any role in the sidebar or use search to navigate.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
