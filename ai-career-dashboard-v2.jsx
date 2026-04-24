import { useState } from "react";

const roles = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    icon: "⬡",
    color: "#5B8DEF",
    desc: "Builds and deploys AI-powered products and features at scale.",
    repos: [
      { name: "athivvat/ai-engineer-guide", stars: "3.2k", desc: "Zero to AI Engineer roadmap — 2025 edition covering Agentic AI, RAG, Multimodal AI", url: "https://github.com/athivvat/ai-engineer-guide", type: "roadmap" },
      { name: "AgenticAiLabs/Ai-Engineering-Roadmap", stars: "1.8k", desc: "Self-taught AI engineer curriculum modelled after OSSU — structured and comprehensive", url: "https://github.com/AgenticAiLabs/Ai-Engineering-Roadmap", type: "roadmap" },
      { name: "dswh/ai-engineer-roadmap", stars: "2.1k", desc: "Skills, learning resources and sample tools — covers LangChain, HuggingFace, Gradio", url: "https://github.com/dswh/ai-engineer-roadmap", type: "roadmap" },
      { name: "Shubhamsaboo/awesome-llm-apps", stars: "22k", desc: "100+ ready-to-run LLM app templates — RAG, agents, MCP, voice AI — clone and ship", url: "https://github.com/Shubhamsaboo/awesome-llm-apps", type: "projects" },
      { name: "krishnaik06/AI-Engineer-Roadmap-2024", stars: "4.5k", desc: "Week-by-week plans from Krish Naik covering GenAI, LLMs and Agentic AI paths", url: "https://github.com/krishnaik06/AI-Engineer-Roadmap-2024", type: "roadmap" },
      { name: "armankhondker/awesome-ai-ml-resources", stars: "2.9k", desc: "Free AI/ML resources and roadmap — curated 2025 edition for beginners", url: "https://github.com/armankhondker/awesome-ai-ml-resources", type: "resources" },
    ],
    projects: [
      { level: "beginner", idea: "Build a Q&A chatbot over your own PDF using LangChain + ChromaDB + Streamlit" },
      { level: "beginner", idea: "Create a text summarisation API with FastAPI + Claude/OpenAI API" },
      { level: "intermediate", idea: "RAG pipeline over a private document corpus with hybrid search (BM25 + vector)" },
      { level: "intermediate", idea: "Fine-tune a small LLM with LoRA on a domain-specific dataset (HuggingFace PEFT)" },
      { level: "advanced", idea: "Build a production-grade AI feature with A/B testing, monitoring (Langfuse), and fallback routing" },
      { level: "advanced", idea: "Deploy a multi-modal AI app (text + image) with vLLM serving on Kubernetes" },
    ],
    levels: {
      beginner: { summary: "Learn Python, ML basics, and how to use pretrained models in applications.", categories: [{ name: "Language & Environment", tools: ["Python 3.11+", "Jupyter / Colab", "VS Code", "Git & GitHub"] }, { name: "ML Foundations", tools: ["scikit-learn", "NumPy / Pandas", "Matplotlib / Seaborn", "HuggingFace Transformers"] }, { name: "LLM Usage", tools: ["OpenAI API", "Anthropic API", "LangChain basics", "Prompt engineering"] }, { name: "Deployment Basics", tools: ["FastAPI", "Gradio / Streamlit", "Docker basics", "HuggingFace Spaces"] }] },
      intermediate: { summary: "Fine-tune models, build RAG pipelines, and ship production AI features.", categories: [{ name: "Deep Learning", tools: ["PyTorch", "HuggingFace PEFT / LoRA", "Weights & Biases", "ONNX"] }, { name: "RAG & Retrieval", tools: ["LangChain / LlamaIndex", "ChromaDB / Pinecone", "pgvector", "Embedding models"] }, { name: "Data & Storage", tools: ["PostgreSQL", "Redis", "SQLAlchemy", "Parquet / DuckDB"] }, { name: "MLOps Basics", tools: ["MLflow", "GitHub Actions CI/CD", "FastAPI + Pydantic", "AWS / GCP basics"] }] },
      advanced: { summary: "Design AI systems at scale, train custom models, and own end-to-end AI infrastructure.", categories: [{ name: "Model Training at Scale", tools: ["PyTorch FSDP / DeepSpeed", "vLLM / TGI serving", "Quantization (GPTQ, AWQ)", "Flash Attention"] }, { name: "System Design", tools: ["Kubernetes + Helm", "Ray / Ray Serve", "Feature stores (Feast)", "Data versioning (DVC, LakeFS)"] }, { name: "Evaluation & Safety", tools: ["RAGAS", "LLM-as-judge pipelines", "Red teaming frameworks", "Guardrails AI"] }, { name: "Infra & Observability", tools: ["Prometheus + Grafana", "OpenTelemetry", "Terraform", "Custom CUDA kernels"] }] },
    }
  },
  {
    id: "ai-researcher",
    title: "AI Researcher",
    icon: "◎",
    color: "#A78BFA",
    desc: "Advances the state of the art through novel algorithms, architectures, and experiments.",
    repos: [
      { name: "kitsumiko/papers", stars: "1.4k", desc: "160+ research papers organized as a curriculum — foundations to cutting-edge, with role-based reading tracks", url: "https://github.com/kitsumiko/papers", type: "papers" },
      { name: "astorfi/Deep-Learning-Roadmap", stars: "26k", desc: "Organized resources for DL researchers — papers, books, and targeted resource categories", url: "https://github.com/astorfi/Deep-Learning-Roadmap", type: "roadmap" },
      { name: "aadi1011/AI-ML-Roadmap-from-scratch", stars: "3.8k", desc: "0 to 100 AI/ML curriculum — DL, NLP, RL, Agentic AI, all with free resources", url: "https://github.com/aadi1011/AI-ML-Roadmap-from-scratch", type: "roadmap" },
      { name: "AMAI-GmbH/AI-Expert-Roadmap", stars: "28k", desc: "Interactive AI Expert roadmap with links for every bullet — data scientist / ML / AI tracks", url: "https://github.com/AMAI-GmbH/AI-Expert-Roadmap", type: "roadmap" },
      { name: "NirDiamant/Prompt_Engineering", stars: "8k", desc: "22 prompt engineering techniques with Jupyter notebooks — foundational to advanced", url: "https://github.com/NirDiamant/Prompt_Engineering", type: "projects" },
      { name: "paperswithcode.com", stars: "platform", desc: "Papers With Code — track SOTA benchmarks, find implementations for any paper", url: "https://paperswithcode.com", type: "resources" },
    ],
    projects: [
      { level: "beginner", idea: "Reproduce a classic paper (Attention is All You Need) from scratch in PyTorch" },
      { level: "beginner", idea: "Train a simple image classifier on CIFAR-10 and write a structured experiment report" },
      { level: "intermediate", idea: "Implement and ablate a recent paper on efficient attention — compare against baseline" },
      { level: "intermediate", idea: "Run a formal benchmark comparison of 3 open LLMs using EleutherAI LM Eval Harness" },
      { level: "advanced", idea: "Propose and validate a novel training objective — write up as an arXiv preprint" },
      { level: "advanced", idea: "Mechanistic interpretability experiment: identify circuits in a small transformer" },
    ],
    levels: {
      beginner: { summary: "Build math foundations, understand core architectures, and reproduce papers.", categories: [{ name: "Math Foundations", tools: ["Linear algebra (3Blue1Brown)", "Calculus & statistics", "Probability theory", "Information theory basics"] }, { name: "ML Core", tools: ["PyTorch from scratch", "scikit-learn", "NumPy", "Jupyter notebooks"] }, { name: "Reading Research", tools: ["arXiv (cs.LG, cs.CL)", "Papers With Code", "Andrej Karpathy tutorials", "Distill.pub"] }, { name: "Experiment Tracking", tools: ["Weights & Biases", "TensorBoard", "Google Colab / Kaggle", "Matplotlib"] }] },
      intermediate: { summary: "Run original experiments, contribute to open-source, and write your own papers.", categories: [{ name: "Research Frameworks", tools: ["PyTorch Lightning", "HuggingFace Trainer", "Hydra (config mgmt)", "einops"] }, { name: "Key Architectures", tools: ["Transformer variants", "Diffusion models", "Graph Neural Nets", "SSMs (Mamba)"] }, { name: "Compute & Scale", tools: ["Multi-GPU training (DDP)", "Mixed precision (bf16)", "Gradient checkpointing", "SLURM / HPC"] }, { name: "Paper Workflow", tools: ["LaTeX / Overleaf", "Semantic Scholar API", "Connected Papers", "Zotero"] }] },
      advanced: { summary: "Lead research directions, design novel architectures, and publish at top venues.", categories: [{ name: "Frontier Methods", tools: ["RLHF / DPO / PPO", "Mechanistic interpretability", "Sparse autoencoders", "Constitutional AI"] }, { name: "Large-Scale Training", tools: ["Megatron-LM", "FairScale", "Flash Attention 2", "Custom CUDA kernels"] }, { name: "Evaluation", tools: ["BIG-Bench / MMLU", "EleutherAI LM Eval", "Human eval design", "Statistical testing"] }, { name: "Venues & Community", tools: ["NeurIPS / ICML / ICLR", "ACL / EMNLP (NLP)", "CVPR / ECCV (vision)", "Alignment Forum"] }] },
    }
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Developer",
    icon: "◈",
    color: "#34D399",
    desc: "Builds autonomous AI agents that plan, use tools, and complete multi-step tasks.",
    repos: [
      { name: "Jenqyang/Awesome-AI-Agents", stars: "15k", desc: "Comprehensive collection of LLM-powered autonomous agents — frameworks, tools, multi-agent systems", url: "https://github.com/Jenqyang/Awesome-AI-Agents", type: "resources" },
      { name: "kaushikb11/awesome-llm-agents", stars: "6k", desc: "Curated list of LLM agent frameworks — CrewAI, LangGraph, AutoGen, Mastra with star counts", url: "https://github.com/kaushikb11/awesome-llm-agents", type: "resources" },
      { name: "Shubhamsaboo/awesome-llm-apps", stars: "22k", desc: "100+ runnable agent templates — single-agent, multi-agent, MCP agents, voice AI agents", url: "https://github.com/Shubhamsaboo/awesome-llm-apps", type: "projects" },
      { name: "ashishpatel26/500-AI-Agents-Projects", stars: "8k", desc: "500 AI agent use cases across industries — healthcare, finance, education, with links", url: "https://github.com/ashishpatel26/500-AI-Agents-Projects", type: "projects" },
      { name: "slavakurilyak/awesome-ai-agents", stars: "4k", desc: "300+ agentic AI resources tracked with star counts — AutoGPT, LangChain, CrewAI, Ollama", url: "https://github.com/slavakurilyak/awesome-ai-agents", type: "resources" },
      { name: "krishnaik06/Complete-RoadMap-To-Learn-AI", stars: "9k", desc: "Three paths: Data Scientist / GenAI Engineer / Agentic AI Developer — week-by-week plans", url: "https://github.com/krishnaik06/Complete-RoadMap-To-Learn-AI", type: "roadmap" },
    ],
    projects: [
      { level: "beginner", idea: "Build a simple ReAct agent with web search + calculator tools using LangChain" },
      { level: "beginner", idea: "Create a document Q&A agent that cites sources and handles follow-up questions" },
      { level: "intermediate", idea: "Multi-agent research pipeline: planner → researcher → writer → reviewer agents" },
      { level: "intermediate", idea: "Autonomous code review agent that reads a PR, runs tests, and posts feedback" },
      { level: "advanced", idea: "Production agent system with persistent memory (Mem0), observability (Langfuse), and safety guardrails" },
      { level: "advanced", idea: "Self-healing data pipeline agent that detects anomalies and auto-remediates using tool use" },
    ],
    levels: {
      beginner: { summary: "Understand LLM APIs, function calling, and simple tool-use patterns.", categories: [{ name: "LLM APIs", tools: ["Anthropic API (tool use)", "OpenAI function calling", "Ollama (local models)", "LiteLLM"] }, { name: "Agent Frameworks", tools: ["LangChain Agents", "LlamaIndex agents", "Phidata", "CrewAI basics"] }, { name: "Tools & Memory", tools: ["Web search tools", "Python REPL tool", "SQLite memory", "JSON-based state"] }, { name: "Dev Environment", tools: ["Python 3.11+", "FastAPI", "Pydantic v2", "dotenv / secrets mgmt"] }] },
      intermediate: { summary: "Design multi-agent systems, build reliable tool pipelines, and add persistent memory.", categories: [{ name: "Agent Orchestration", tools: ["LangGraph", "AutoGen (Microsoft)", "CrewAI advanced", "Prefect / Temporal"] }, { name: "Memory Systems", tools: ["Chroma / Pinecone (vector)", "Redis (short-term)", "PostgreSQL (episodic)", "Mem0"] }, { name: "Tool Ecosystem", tools: ["Browser automation (Playwright)", "Code execution sandbox", "MCP (Anthropic)", "REST API wrapping"] }, { name: "Reliability", tools: ["Structured outputs", "Retry / fallback logic", "Agent observability (LangSmith)", "Rate limiting"] }] },
      advanced: { summary: "Architect production-grade multi-agent systems with evaluation, safety, and scale.", categories: [{ name: "Advanced Orchestration", tools: ["Custom agent runtimes", "Event-driven agents", "Hierarchical agent graphs", "Stateful workflow engines"] }, { name: "Evaluation", tools: ["Agent evals (GAIA, SWE-bench)", "Trajectory logging", "Human-in-the-loop feedback", "Automated red teaming"] }, { name: "Safety & Control", tools: ["Guardrails AI", "Constitutional constraints", "Sandboxed execution (E2B)", "Audit trails"] }, { name: "Infra", tools: ["Kubernetes agent pods", "Message queues (Kafka)", "Distributed tracing", "Cost tracking dashboards"] }] },
    }
  },
  {
    id: "ai-architect",
    title: "AI Architect",
    icon: "◫",
    color: "#F97316",
    desc: "Designs end-to-end AI systems architecture, from data ingestion to model serving.",
    repos: [
      { name: "AMAI-GmbH/AI-Expert-Roadmap", stars: "28k", desc: "Comprehensive AI Expert roadmap — ideal reference for understanding the full AI system landscape", url: "https://github.com/AMAI-GmbH/AI-Expert-Roadmap", type: "roadmap" },
      { name: "athivvat/ai-engineer-guide", stars: "3.2k", desc: "Enterprise AI deployment, advanced RAG, and system design patterns — 2025 edition", url: "https://github.com/athivvat/ai-engineer-guide", type: "roadmap" },
      { name: "marvelousmlops/mlops-roadmap-2024", stars: "2.4k", desc: "MLOps platform components — from version control to feature stores and model registries", url: "https://github.com/marvelousmlops/mlops-roadmap-2024", type: "roadmap" },
      { name: "Pythondeveloper6/Awesome-MLOPS", stars: "3.1k", desc: "All MLOps resources — best practices, tools, frameworks, and real-world projects", url: "https://github.com/Pythondeveloper6/Awesome-MLOPS", type: "resources" },
      { name: "Shubhamsaboo/awesome-llm-apps", stars: "22k", desc: "Production LLM patterns — RAG pipelines, agent architectures, MCP integrations", url: "https://github.com/Shubhamsaboo/awesome-llm-apps", type: "projects" },
      { name: "in28minutes/roadmaps", stars: "5k", desc: "Cloud + AI architecture course roadmaps for AWS, Azure, GCP — structured learning paths", url: "https://github.com/in28minutes/roadmaps", type: "roadmap" },
    ],
    projects: [
      { level: "beginner", idea: "Draw a C4 architecture diagram for a simple RAG chatbot — identify all components" },
      { level: "beginner", idea: "Deploy a model serving stack: FastAPI + Docker + Nginx reverse proxy on a VM" },
      { level: "intermediate", idea: "Design a multi-model routing system with fallback logic and cost tracking" },
      { level: "intermediate", idea: "Architect a feature store with Feast + PostgreSQL for an ML recommendation system" },
      { level: "advanced", idea: "Design an enterprise AI platform: data lake, feature store, model registry, serving layer, monitoring" },
      { level: "advanced", idea: "Write an Architecture Decision Record (ADR) for a real LLMOps platform decision" },
    ],
    levels: {
      beginner: { summary: "Learn system design fundamentals and how AI components fit together.", categories: [{ name: "System Design Basics", tools: ["REST API design", "SQL + NoSQL patterns", "Docker & containers", "Load balancing concepts"] }, { name: "AI Components", tools: ["LLM APIs overview", "Vector DB concepts", "Embedding pipelines", "Model serving basics"] }, { name: "Cloud Basics", tools: ["AWS / GCP / Azure fundamentals", "S3 / Cloud Storage", "EC2 / Compute basics", "IAM & security"] }, { name: "Diagramming", tools: ["Draw.io / Excalidraw", "C4 model", "Architecture decision records", "Lucidchart"] }] },
      intermediate: { summary: "Design scalable AI pipelines, select the right tools, and document trade-offs.", categories: [{ name: "Data Architecture", tools: ["Data lake patterns", "Feature stores (Feast)", "Delta Lake / Iceberg", "ETL / ELT pipelines"] }, { name: "Model Architecture", tools: ["Model registry (MLflow)", "A/B testing frameworks", "Shadow deployments", "Multi-model routing"] }, { name: "Serving Layer", tools: ["Triton Inference Server", "Ray Serve", "BentoML", "API gateways"] }, { name: "Observability", tools: ["OpenTelemetry", "Prometheus + Grafana", "Datadog / New Relic", "Cost attribution"] }] },
      advanced: { summary: "Lead org-wide AI platform decisions, define standards, and ensure reliability at scale.", categories: [{ name: "Platform Design", tools: ["Internal developer platforms", "ML platform (Kubeflow, Vertex AI)", "Data mesh architecture", "LLMOps patterns"] }, { name: "Governance", tools: ["Model cards & documentation", "Data lineage (OpenLineage)", "Compliance frameworks (SOC2, GDPR)", "AI risk assessment"] }, { name: "Cost & Performance", tools: ["GPU cluster design", "Spot instance strategies", "Model distillation for cost", "FinOps for AI"] }, { name: "Multi-cloud & Hybrid", tools: ["Terraform / Pulumi", "Multi-cloud strategy", "Edge AI deployment", "Private cloud LLMs"] }] },
    }
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "◬",
    color: "#F59E0B",
    desc: "Extracts insights from data, builds predictive models, and communicates findings.",
    repos: [
      { name: "Moataz-Elmesmary/Data-Science-Roadmap", stars: "7.8k", desc: "Data Science roadmap from A to Z — stats, Python, ML, DL, NLP, LLMs with free resources", url: "https://github.com/Moataz-Elmesmary/Data-Science-Roadmap", type: "roadmap" },
      { name: "CIS-Team/Data-Science-Roadmap-2025", stars: "4.2k", desc: "Comprehensive 2025 roadmap covering statistics, ML, big data, and LLM integration", url: "https://github.com/CIS-Team/Data-Science-Roadmap-2025", type: "roadmap" },
      { name: "MrMimic/data-scientist-roadmap", stars: "5.6k", desc: "Tutorials and resources following the classic data science roadmap picture", url: "https://github.com/MrMimic/data-scientist-roadmap", type: "roadmap" },
      { name: "mlacademyai/Machine-Learning-Roadmap", stars: "3.1k", desc: "Step-by-step ML/DS guide with best free resources — Python basics to Deep Learning and MLOps", url: "https://github.com/mlacademyai/Machine-Learning-Roadmap", type: "roadmap" },
      { name: "krishnaik06/6-Months-Data-Science-Roadmap-", stars: "6.9k", desc: "6-month structured plan by Krish Naik — one of the most popular DS roadmaps", url: "https://github.com/krishnaik06/6-Months-Data-Science-Roadmap-", type: "roadmap" },
      { name: "xandie985/data-scientist-roadmap2024", stars: "2.3k", desc: "Resources and topics for Data Scientist and ML roles — 2024 edition", url: "https://github.com/xandie985/data-scientist-roadmap2024", type: "resources" },
    ],
    projects: [
      { level: "beginner", idea: "EDA + prediction project on a Kaggle dataset — write a detailed notebook with visualisations" },
      { level: "beginner", idea: "Build a customer churn prediction model with scikit-learn and explain it with SHAP" },
      { level: "intermediate", idea: "A/B test analysis: simulate an experiment, calculate power, and present results with confidence intervals" },
      { level: "intermediate", idea: "Time series forecasting with Prophet/NeuralProphet on real sales or energy data" },
      { level: "advanced", idea: "Causal inference study using DoWhy — estimate treatment effect from observational data" },
      { level: "advanced", idea: "Build a live Streamlit dashboard backed by BigQuery/DuckDB with auto-refresh and alerting" },
    ],
    levels: {
      beginner: { summary: "Master statistics, EDA, and classical ML with Python.", categories: [{ name: "Data Wrangling", tools: ["Pandas", "NumPy", "OpenRefine", "Excel / Google Sheets"] }, { name: "Visualisation", tools: ["Matplotlib", "Seaborn", "Plotly", "Tableau Public"] }, { name: "Statistics", tools: ["Hypothesis testing", "Probability distributions", "Correlation / regression", "A/B testing basics"] }, { name: "ML Basics", tools: ["scikit-learn", "Linear & logistic regression", "Decision trees", "k-means clustering"] }] },
      intermediate: { summary: "Handle large datasets, build robust models, and deploy to business stakeholders.", categories: [{ name: "Advanced ML", tools: ["XGBoost / LightGBM", "Feature engineering", "SHAP (model explainability)", "Imbalanced datasets"] }, { name: "Big Data", tools: ["PySpark", "Dask", "DuckDB", "BigQuery / Redshift"] }, { name: "SQL & Databases", tools: ["Advanced SQL (window functions)", "PostgreSQL", "dbt", "Data warehousing patterns"] }, { name: "Experimentation", tools: ["Statsmodels", "Bayesian A/B testing", "Power analysis", "Causal inference (DoWhy)"] }] },
      advanced: { summary: "Lead data strategy, build custom models, and drive business decisions with rigour.", categories: [{ name: "Advanced Modelling", tools: ["Bayesian modelling (PyMC)", "Time series (Prophet, NeuralProphet)", "Survival analysis", "NLP with spaCy / HF"] }, { name: "ML in Production", tools: ["MLflow / DVC", "Model monitoring (Evidently AI)", "Feature stores", "Automated retraining"] }, { name: "Causal & Experimental", tools: ["Causal ML (EconML)", "Difference-in-differences", "Instrumental variables", "Synthetic control"] }, { name: "Communication", tools: ["Streamlit dashboards", "Quarto / R Markdown reports", "Executive storytelling", "Data journalism tools"] }] },
    }
  },
  {
    id: "ml-engineer",
    title: "ML Engineer",
    icon: "◉",
    color: "#EC4899",
    desc: "Bridges research and production — trains, evaluates, and deploys ML models reliably.",
    repos: [
      { name: "shanmukh05/Machine-Learning-Roadmap", stars: "3.4k", desc: "ML roadmap with tools like PyTorch Lightning, HF, AutoML — by an AI Engineer at KLA", url: "https://github.com/shanmukh05/Machine-Learning-Roadmap", type: "roadmap" },
      { name: "ArianAmani/DL-RoadMap", stars: "2.8k", desc: "Deep learning mastery roadmap — books, courses (Andrew Ng, fast.ai), and frameworks", url: "https://github.com/ArianAmani/DL-RoadMap", type: "roadmap" },
      { name: "AMAI-GmbH/AI-Expert-Roadmap", stars: "28k", desc: "AI expert roadmap with interactive links — ML engineer track well defined", url: "https://github.com/AMAI-GmbH/AI-Expert-Roadmap", type: "roadmap" },
      { name: "aadi1011/AI-ML-Roadmap-from-scratch", stars: "3.8k", desc: "Complete 0-to-100 curriculum covering ML, DL, RL, GenAI, Agentic AI with free resources", url: "https://github.com/aadi1011/AI-ML-Roadmap-from-scratch", type: "roadmap" },
      { name: "ashishpatel26/500-AI-Agents-Projects", stars: "8k", desc: "500 projects spanning ML, agents, fine-tuning, RAG — great for portfolio building", url: "https://github.com/ashishpatel26/500-AI-Agents-Projects", type: "projects" },
      { name: "mlacademyai/Machine-Learning-Roadmap", stars: "3.1k", desc: "Free step-by-step ML guide from Python basics to MLOps — personally tested resources", url: "https://github.com/mlacademyai/Machine-Learning-Roadmap", type: "roadmap" },
    ],
    projects: [
      { level: "beginner", idea: "Implement a neural net from scratch in NumPy (no PyTorch) — backprop, activations, training loop" },
      { level: "beginner", idea: "Train a BERT-based text classifier on a custom dataset with HuggingFace Trainer" },
      { level: "intermediate", idea: "Fine-tune a ViT for image classification with mixed precision + track with W&B" },
      { level: "intermediate", idea: "Export a model to ONNX, benchmark latency, and deploy with TorchServe" },
      { level: "advanced", idea: "Train a language model from scratch with multi-GPU DDP — implement custom training loop" },
      { level: "advanced", idea: "Quantise a 7B LLM with GPTQ and benchmark perplexity + throughput vs full precision" },
    ],
    levels: {
      beginner: { summary: "Learn PyTorch deeply, understand the training loop, and deploy your first model.", categories: [{ name: "Deep Learning", tools: ["PyTorch", "Torchvision", "HuggingFace Transformers", "Weights & Biases"] }, { name: "Data Pipelines", tools: ["PyTorch DataLoader", "Albumentations (augmentation)", "HuggingFace Datasets", "Pandas"] }, { name: "Model Serving", tools: ["FastAPI", "TorchServe basics", "Gradio", "Docker"] }, { name: "Experimentation", tools: ["Jupyter", "Optuna (hyperparameter tuning)", "Colab / Kaggle GPU", "MLflow basics"] }] },
      intermediate: { summary: "Optimise training, evaluate rigorously, and run scalable inference.", categories: [{ name: "Training at Scale", tools: ["PyTorch DDP (multi-GPU)", "Mixed precision (bf16/fp16)", "Gradient accumulation", "PyTorch Lightning"] }, { name: "Model Optimisation", tools: ["ONNX export", "TorchScript", "Quantisation (int8/int4)", "Pruning & distillation"] }, { name: "Evaluation", tools: ["torchmetrics", "LM Eval Harness", "Confusion matrices + PR curves", "Statistical significance"] }, { name: "Pipelines", tools: ["DVC (data version control)", "Airflow / Prefect", "Feature stores", "Model registry (MLflow)"] }] },
      advanced: { summary: "Train large models from scratch, build efficient inference systems, and own model lifecycle.", categories: [{ name: "Large-Scale Training", tools: ["FSDP / DeepSpeed ZeRO", "Megatron-LM (tensor parallel)", "Flash Attention 2", "Gradient checkpointing"] }, { name: "Inference Optimisation", tools: ["vLLM / TGI", "Continuous batching", "KV cache tuning", "Speculative decoding"] }, { name: "Custom Kernels", tools: ["Triton (GPU kernels)", "CUDA programming basics", "torch.compile", "Profiling (Nsight, py-spy)"] }, { name: "Research → Prod", tools: ["Paper reproduction workflow", "Ablation study design", "Benchmark curation", "Open-source contribution"] }] },
    }
  },
  {
    id: "mlops-engineer",
    title: "ML Ops Engineer",
    icon: "⬟",
    color: "#06B6D4",
    desc: "Builds and maintains the infrastructure that keeps ML models running reliably in production.",
    repos: [
      { name: "marvelousmlops/mlops-roadmap-2024", stars: "2.4k", desc: "Comprehensive MLOps roadmap — programming, Docker, K8s, feature stores, model serving", url: "https://github.com/marvelousmlops/mlops-roadmap-2024", type: "roadmap" },
      { name: "ApexIQ/MLOPs-Roadmap-2025", stars: "1.9k", desc: "MLOps 2025 roadmap — pipelines, monitoring, drift detection, retraining, cloud MLOps", url: "https://github.com/ApexIQ/MLOPs-Roadmap-2025", type: "roadmap" },
      { name: "harish303118/MLOps-Engineering-with-Roadmap-and-Free-Learning-Resources", stars: "2.1k", desc: "Free video tutorials + docs to become a production-ready MLOps Engineer in 2026", url: "https://github.com/harish303118/MLOps-Engineering-with-Roadmap-and-Free-Learning-Resources", type: "roadmap" },
      { name: "Pythondeveloper6/Awesome-MLOPS", stars: "3.1k", desc: "All MLOps resources — dagshub, Docker, ZenML, SageMaker, best practices and projects", url: "https://github.com/Pythondeveloper6/Awesome-MLOPS", type: "resources" },
      { name: "trojrobert/MLOps_roadmap_and_curriculum", stars: "1.6k", desc: "Curriculum from 0 to MLOps mastery — Docker deployment, model tracking, FastAPI, Streamlit", url: "https://github.com/trojrobert/MLOps_roadmap_and_curriculum", type: "roadmap" },
      { name: "ayush714/mlops-roadmap", stars: "3.5k", desc: "Comprehensive MLOps guide with YouTube resources — from SDLC to DevOps to full MLOps", url: "https://github.com/ayush714/mlops-roadmap", type: "roadmap" },
    ],
    projects: [
      { level: "beginner", idea: "Set up an experiment tracking pipeline: train a model, log to MLflow, compare 3 runs" },
      { level: "beginner", idea: "Containerise a model with Docker and deploy behind a FastAPI endpoint with health checks" },
      { level: "intermediate", idea: "Build a full CI/CD pipeline: GitHub Actions → test → build Docker image → deploy to cloud" },
      { level: "intermediate", idea: "Set up model drift detection with Evidently AI — alert when distribution shifts" },
      { level: "advanced", idea: "Build a full MLOps platform: Kubeflow Pipelines + MLflow + feature store + monitoring" },
      { level: "advanced", idea: "Implement automated model retraining triggered by drift detection with data quality gates" },
    ],
    levels: {
      beginner: { summary: "Learn CI/CD, containerisation, and basic ML pipeline tooling.", categories: [{ name: "DevOps Foundations", tools: ["Git & GitHub Actions", "Docker", "Linux CLI", "Bash scripting"] }, { name: "ML Experiment Tracking", tools: ["MLflow", "Weights & Biases", "DVC", "Hydra (config)"] }, { name: "Cloud Basics", tools: ["AWS SageMaker basics", "GCP Vertex AI basics", "S3 / GCS storage", "Cloud IAM"] }, { name: "Model Serving", tools: ["FastAPI", "Docker Compose", "Gradio", "BentoML basics"] }] },
      intermediate: { summary: "Automate training pipelines, monitor models in production, and manage infrastructure as code.", categories: [{ name: "Pipeline Orchestration", tools: ["Airflow", "Prefect", "Kubeflow Pipelines", "ZenML"] }, { name: "Model Registry & Deployment", tools: ["MLflow Model Registry", "Seldon Core", "BentoML", "Canary deployments"] }, { name: "Monitoring", tools: ["Evidently AI (drift detection)", "WhyLabs", "Prometheus + Grafana", "Arize AI"] }, { name: "Infrastructure as Code", tools: ["Terraform", "Helm charts", "Kubernetes basics", "Pulumi"] }] },
      advanced: { summary: "Design ML platforms, manage GPU clusters, and enforce governance at scale.", categories: [{ name: "ML Platform Engineering", tools: ["Kubeflow full stack", "Feast (feature store)", "LakeFS / Delta Lake", "Internal tooling design"] }, { name: "GPU Cluster Ops", tools: ["NVIDIA GPU Operator", "SLURM scheduling", "Spot instance orchestration", "Cost optimisation"] }, { name: "LLMOps", tools: ["vLLM / TGI deployment", "Prompt versioning", "LangSmith / Langfuse", "Fine-tune pipelines (LoRA at scale)"] }, { name: "Governance & Security", tools: ["Model cards automation", "Data lineage (OpenLineage)", "RBAC for ML resources", "Audit logging"] }] },
    }
  },
  {
    id: "aiops-engineer",
    title: "AI Ops Engineer",
    icon: "◧",
    color: "#84CC16",
    desc: "Operates and monitors AI systems in production — uptime, reliability, and incident response.",
    repos: [
      { name: "Pythondeveloper6/Awesome-MLOPS", stars: "3.1k", desc: "MLOps/AIOps resources — monitoring, observability, serving infrastructure", url: "https://github.com/Pythondeveloper6/Awesome-MLOPS", type: "resources" },
      { name: "marvelousmlops/mlops-roadmap-2024", stars: "2.4k", desc: "Production ML operations — monitoring, deployment, reliability engineering", url: "https://github.com/marvelousmlops/mlops-roadmap-2024", type: "roadmap" },
      { name: "harish303118/MLOps-Engineering-with-Roadmap-and-Free-Learning-Resources", stars: "2.1k", desc: "Free resources for production-grade AI operations — Docker, K8s, cloud, monitoring", url: "https://github.com/harish303118/MLOps-Engineering-with-Roadmap-and-Free-Learning-Resources", type: "roadmap" },
      { name: "ApexIQ/MLOPs-Roadmap-2025", stars: "1.9k", desc: "Responsible AI practices, governance, monitoring and retraining workflows", url: "https://github.com/ApexIQ/MLOPs-Roadmap-2025", type: "roadmap" },
      { name: "cdfoundation/sig-mlops", stars: "1.2k", desc: "CDF SIG MLOps official roadmap — governance, Continuous Delivery for ML, compliance", url: "https://github.com/cdfoundation/sig-mlops", type: "roadmap" },
      { name: "athivvat/ai-engineer-guide", stars: "3.2k", desc: "Enterprise AI deployment and operational patterns — production reliability focus", url: "https://github.com/athivvat/ai-engineer-guide", type: "roadmap" },
    ],
    projects: [
      { level: "beginner", idea: "Set up Prometheus + Grafana to monitor a FastAPI model endpoint — track latency, error rate" },
      { level: "beginner", idea: "Write a runbook for a common LLM API failure — timeout, rate limit, bad output" },
      { level: "intermediate", idea: "Build an LLM tracing dashboard with Langfuse — trace every request end-to-end" },
      { level: "intermediate", idea: "Implement circuit breaker + fallback routing between two LLM providers" },
      { level: "advanced", idea: "Design and run a chaos engineering experiment on an AI serving stack — inject failures" },
      { level: "advanced", idea: "Build a real-time AI output quality monitoring system with automated alerting on degradation" },
    ],
    levels: {
      beginner: { summary: "Learn SRE fundamentals and apply them to AI service operations.", categories: [{ name: "SRE Basics", tools: ["SLOs / SLAs / error budgets", "On-call practices", "Incident management", "Linux sysadmin"] }, { name: "Monitoring", tools: ["Prometheus", "Grafana", "Alertmanager", "PagerDuty / OpsGenie"] }, { name: "AI Service Basics", tools: ["LLM API rate limits & retries", "Model latency debugging", "Log aggregation (ELK stack)", "Uptime monitoring"] }, { name: "Cloud Operations", tools: ["AWS CloudWatch", "GCP Operations Suite", "Azure Monitor", "Cost dashboards"] }] },
      intermediate: { summary: "Build observability stacks for AI systems and automate incident remediation.", categories: [{ name: "AI-Specific Monitoring", tools: ["LLM output quality metrics", "Token throughput monitoring", "Embedding drift detection", "Latency percentiles (P99)"] }, { name: "Incident Automation", tools: ["Runbook automation", "Auto-scaling policies", "Circuit breakers", "Chaos engineering (LitmusChaos)"] }, { name: "Tracing & Profiling", tools: ["OpenTelemetry", "Jaeger / Tempo", "Langfuse (LLM tracing)", "Pyroscope (profiling)"] }, { name: "Cost Operations", tools: ["GPU utilisation tracking", "FinOps tools (Kubecost)", "Spot/preemptible strategies", "Usage-based alerting"] }] },
      advanced: { summary: "Design reliability engineering for large-scale AI infrastructure with multi-region resilience.", categories: [{ name: "Large-Scale Reliability", tools: ["Multi-region active-active", "Model fallback routing", "Blue/green LLM deployments", "Traffic shadowing"] }, { name: "AI-Native Observability", tools: ["Custom LLM dashboards", "RAGAS for continuous eval", "Canary analysis frameworks", "Anomaly detection pipelines"] }, { name: "Platform Engineering", tools: ["Service mesh (Istio / Linkerd)", "GitOps (ArgoCD / Flux)", "Policy as code (OPA)", "Platform SLO automation"] }, { name: "Security Operations", tools: ["Prompt injection detection", "API abuse prevention", "Model watermarking", "Compliance reporting (SOC2)"] }] },
    }
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    icon: "◑",
    color: "#F472B6",
    desc: "Crafts and optimises prompts to get reliable, high-quality outputs from LLMs.",
    repos: [
      { name: "dair-ai/Prompt-Engineering-Guide", stars: "55k", desc: "The definitive prompt engineering guide — 3M+ learners, all techniques, papers, and tools", url: "https://github.com/dair-ai/Prompt-Engineering-Guide", type: "roadmap" },
      { name: "NirDiamant/Prompt_Engineering", stars: "8k", desc: "22 hands-on Jupyter notebook tutorials — CoT, self-consistency, tree-of-thought, and more", url: "https://github.com/NirDiamant/Prompt_Engineering", type: "projects" },
      { name: "promptslab/Awesome-Prompt-Engineering", stars: "12k", desc: "Hand-curated resources for prompt engineering — GPT, Claude, PaLM, MCP, RAG tools", url: "https://github.com/promptslab/Awesome-Prompt-Engineering", type: "resources" },
      { name: "snwfdhmp/awesome-gpt-prompt-engineering", stars: "6.8k", desc: "Curated tools and resources — includes a step-by-step Prompt Engineering Roadmap link", url: "https://github.com/snwfdhmp/awesome-gpt-prompt-engineering", type: "resources" },
      { name: "ai-boost/awesome-prompts", stars: "9.5k", desc: "Top-rated GPT Store prompts + advanced PE papers, agent prompts, MCP, A2A resources", url: "https://github.com/ai-boost/awesome-prompts", type: "resources" },
      { name: "Shubhamsaboo/awesome-llm-apps", stars: "22k", desc: "Production LLM apps — learn prompt patterns from real-world deployed agents and RAG apps", url: "https://github.com/Shubhamsaboo/awesome-llm-apps", type: "projects" },
    ],
    projects: [
      { level: "beginner", idea: "Build a prompt library: 20 reusable prompts for different tasks, tested across 3 models" },
      { level: "beginner", idea: "Implement CoT, zero-shot, and few-shot variants for a reasoning task — compare outputs" },
      { level: "intermediate", idea: "Build an automated prompt evaluation pipeline using LLM-as-judge with custom rubrics" },
      { level: "intermediate", idea: "Design a system prompt for a production customer support bot — test for jailbreaks" },
      { level: "advanced", idea: "Implement DSPy to automatically optimise prompts for a multi-step reasoning task" },
      { level: "advanced", idea: "Build a red teaming suite: 50+ adversarial prompts with automated detection scoring" },
    ],
    levels: {
      beginner: { summary: "Learn prompt fundamentals, zero/few-shot techniques, and basic evaluation.", categories: [{ name: "Core Techniques", tools: ["Zero-shot & few-shot prompting", "Chain-of-thought (CoT)", "Role & persona prompting", "Output format specification"] }, { name: "LLM Playgrounds", tools: ["Claude.ai", "ChatGPT / playground", "Google AI Studio", "HuggingFace Chat"] }, { name: "Evaluation Basics", tools: ["Manual prompt testing", "A/B comparing outputs", "Rubric-based scoring", "Latency vs quality trade-offs"] }, { name: "Resources", tools: ["Anthropic prompt library", "OpenAI cookbook", "PromptingGuide.ai", "Learn Prompting (free book)"] }] },
      intermediate: { summary: "Build prompt pipelines, evaluate at scale, and optimise for production use cases.", categories: [{ name: "Advanced Techniques", tools: ["ReAct prompting", "Self-consistency sampling", "Tree of Thoughts", "Structured output (JSON mode)"] }, { name: "Prompt Management", tools: ["LangSmith (prompt versioning)", "Langfuse", "PromptLayer", "Weights & Biases Prompts"] }, { name: "Automated Evaluation", tools: ["LLM-as-judge pipelines", "RAGAS (RAG evaluation)", "G-Eval", "Custom rubric automation"] }, { name: "RAG Prompt Design", tools: ["Context window management", "Retrieval-aware prompts", "Citation prompting", "System prompt architecture"] }] },
      advanced: { summary: "Design prompt systems for production, automate optimisation, and prevent adversarial attacks.", categories: [{ name: "Automated Prompt Optimisation", tools: ["DSPy (Stanford)", "APE (Automatic Prompt Engineer)", "TextGrad", "Evolutionary prompt search"] }, { name: "Safety & Robustness", tools: ["Red teaming prompts", "Jailbreak resistance testing", "Guardrails AI", "Constitutional AI patterns"] }, { name: "System Prompt Architecture", tools: ["Multi-turn conversation design", "Dynamic context injection", "Tool-use prompt patterns", "Multi-model prompt routing"] }, { name: "Evals at Scale", tools: ["Custom eval datasets", "Human annotation pipelines", "Statistical analysis of outputs", "Continuous prompt monitoring"] }] },
    }
  },
  {
    id: "ai-cloud-architect",
    title: "AI Cloud Architect",
    icon: "◭",
    color: "#38BDF8",
    desc: "Designs cloud-native AI infrastructure across AWS, GCP, and Azure at enterprise scale.",
    repos: [
      { name: "in28minutes/roadmaps", stars: "5k", desc: "AWS, Azure, GCP certification roadmaps with courses — AI-900, GCP ML Engineer, SageMaker", url: "https://github.com/in28minutes/roadmaps", type: "roadmap" },
      { name: "marvelousmlops/mlops-roadmap-2024", stars: "2.4k", desc: "Cloud MLOps — SageMaker Pipelines, Vertex AI, model serving on cloud Kubernetes", url: "https://github.com/marvelousmlops/mlops-roadmap-2024", type: "roadmap" },
      { name: "Pythondeveloper6/Awesome-MLOPS", stars: "3.1k", desc: "Cloud ML platforms — SageMaker, Vertex AI, Azure ML resources and best practices", url: "https://github.com/Pythondeveloper6/Awesome-MLOPS", type: "resources" },
      { name: "athivvat/ai-engineer-guide", stars: "3.2k", desc: "Enterprise AI deployment patterns — cloud infrastructure, multi-model routing, governance", url: "https://github.com/athivvat/ai-engineer-guide", type: "roadmap" },
      { name: "ApexIQ/MLOPs-Roadmap-2025", stars: "1.9k", desc: "Azure, GCP, hybrid cloud MLOps deployment and responsible AI governance", url: "https://github.com/ApexIQ/MLOPs-Roadmap-2025", type: "roadmap" },
      { name: "AMAI-GmbH/AI-Expert-Roadmap", stars: "28k", desc: "Full AI Expert roadmap — cloud deployment, serving, and enterprise AI architecture paths", url: "https://github.com/AMAI-GmbH/AI-Expert-Roadmap", type: "roadmap" },
    ],
    projects: [
      { level: "beginner", idea: "Deploy a Gradio ML app to AWS EC2 with a proper IAM role and S3 model storage" },
      { level: "beginner", idea: "Set up a SageMaker or Vertex AI Notebook and run a training job — compare cost" },
      { level: "intermediate", idea: "Build an end-to-end ML pipeline on Vertex AI Pipelines or SageMaker Pipelines" },
      { level: "intermediate", idea: "Deploy a private LLM (Llama 3) on AWS EC2 with vLLM and put CloudFront in front" },
      { level: "advanced", idea: "Design a multi-region AI platform with active-active failover and GPU spot orchestration" },
      { level: "advanced", idea: "Build a FinOps dashboard for an AI workload — track GPU cost per inference per model" },
    ],
    levels: {
      beginner: { summary: "Get cloud certified, learn managed AI services, and deploy your first cloud ML pipeline.", categories: [{ name: "Cloud Fundamentals", tools: ["AWS Cloud Practitioner cert", "GCP Associate cert", "Azure AI Fundamentals cert", "Terraform basics"] }, { name: "Managed AI Services", tools: ["AWS SageMaker basics", "GCP Vertex AI basics", "Azure ML Studio", "AWS Bedrock"] }, { name: "Storage & Compute", tools: ["S3 / GCS / Azure Blob", "EC2 / GCE / Azure VMs", "GPU instance types", "Auto Scaling Groups"] }, { name: "Networking Basics", tools: ["VPC / VNet concepts", "Load balancers", "CDN basics", "Cloud DNS"] }] },
      intermediate: { summary: "Architect scalable AI platforms on cloud, optimise cost, and implement security.", categories: [{ name: "ML Platform Services", tools: ["SageMaker Pipelines", "Vertex AI Pipelines", "Azure ML Pipelines", "Managed Kubeflow"] }, { name: "Data Platform", tools: ["AWS Glue + Athena", "BigQuery + Dataflow", "Azure Synapse", "Databricks on cloud"] }, { name: "LLM on Cloud", tools: ["AWS Bedrock (Claude, Titan)", "GCP Vertex AI (Gemini)", "Azure OpenAI Service", "Self-hosted vLLM on K8s"] }, { name: "Security & Compliance", tools: ["IAM / RBAC design", "Private endpoints / VPC peering", "Encryption at rest & transit", "Cloud Security Posture Mgmt"] }] },
      advanced: { summary: "Design enterprise AI platforms with multi-cloud, FinOps, and governance at scale.", categories: [{ name: "Multi-Cloud & Hybrid", tools: ["Anthos / Arc / AWS Outposts", "Multi-cloud Kubernetes (Rancher)", "WAN optimisation", "Sovereign cloud patterns"] }, { name: "FinOps for AI", tools: ["GPU spot/preemptible orchestration", "Reserved instance strategy", "Kubecost / CloudHealth", "Showback / chargeback models"] }, { name: "Enterprise AI Platform", tools: ["AWS SageMaker Studio Domain", "Vertex AI Workbench + Registry", "Azure AI Foundry", "Internal AI marketplace"] }, { name: "Resilience & Scale", tools: ["Multi-region active-active", "Disaster recovery for ML", "Chaos engineering on cloud", "10k+ GPU cluster design"] }] },
    }
  }
];

const levelMeta = {
  beginner:     { label: "Beginner",     bg: "#1a2e1a", text: "#4ade80", border: "#166534" },
  intermediate: { label: "Intermediate", bg: "#1e2a3a", text: "#60a5fa", border: "#1d4ed8" },
  advanced:     { label: "Advanced",     bg: "#2d1a2e", text: "#c084fc", border: "#7c3aed" },
};

const typeLabels = { roadmap: "Roadmap", projects: "Projects", resources: "Resources", papers: "Papers" };
const typeDotColor = { roadmap: "#5B8DEF", projects: "#34D399", resources: "#F59E0B", papers: "#A78BFA" };

export default function App() {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [activeTab, setActiveTab] = useState("stack");
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? roles.filter(r => r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase()))
    : roles;

  const lm = levelMeta[activeLevel];
  const levelData = activeRole.levels[activeLevel];
  const projectsForLevel = activeRole.projects.filter(p => p.level === activeLevel);

  return (
    <div style={{ minHeight: "100vh", background: "#09090f", fontFamily: "'DM Sans','Segoe UI',sans-serif", color: "#e2e8f0", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e293b", padding: "18px 28px 14px", background: "#0d0d15", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ fontFamily: "'Courier New',monospace", fontSize: 10, color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 3 }}>AI Career Stack Dashboard</div>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: "#f1f5f9", margin: 0, letterSpacing: "-0.3px" }}>10 roles · 3 levels · GitHub repos · Project ideas</h1>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {Object.entries(typeLabels).map(([k, v]) => (
            <span key={k} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#64748b" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: typeDotColor[k], display: "inline-block" }} />{v}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>

        {/* Sidebar */}
        <div style={{ width: 230, flexShrink: 0, borderRight: "1px solid #1e293b", background: "#0d0d15", padding: "14px 10px", overflowY: "auto" }}>
          <input placeholder="Search roles..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ width: "100%", background: "#111827", border: "1px solid #1e293b", borderRadius: 8, padding: "7px 10px", color: "#e2e8f0", fontSize: 12, marginBottom: 10, outline: "none", boxSizing: "border-box" }} />
          {filtered.map(r => (
            <button key={r.id} onClick={() => setActiveRole(r)}
              style={{ width: "100%", textAlign: "left", background: activeRole.id === r.id ? "#111827" : "transparent", border: activeRole.id === r.id ? `1px solid ${r.color}33` : "1px solid transparent", borderLeft: activeRole.id === r.id ? `3px solid ${r.color}` : "3px solid transparent", borderRadius: 8, padding: "8px 10px", marginBottom: 3, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, color: r.color }}>{r.icon}</span>
              <span style={{ fontSize: 12, fontWeight: activeRole.id === r.id ? 500 : 400, color: activeRole.id === r.id ? "#f1f5f9" : "#94a3b8", lineHeight: 1.3 }}>{r.title}</span>
            </button>
          ))}
          {!filtered.length && <div style={{ fontSize: 12, color: "#475569", padding: "8px 4px" }}>No roles found</div>}
        </div>

        {/* Main */}
        <div style={{ flex: 1, overflowY: "auto", padding: "22px 26px" }}>

          {/* Role header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: 20, color: activeRole.color, background: `${activeRole.color}15`, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>{activeRole.icon}</span>
            <div>
              <h2 style={{ margin: 0, fontSize: 19, fontWeight: 600, color: "#f1f5f9", letterSpacing: "-0.2px" }}>{activeRole.title}</h2>
              <p style={{ margin: 0, fontSize: 12, color: "#64748b", marginTop: 2 }}>{activeRole.desc}</p>
            </div>
          </div>

          {/* Level tabs */}
          <div style={{ display: "flex", gap: 7, marginBottom: 20 }}>
            {Object.entries(levelMeta).map(([k, v]) => (
              <button key={k} onClick={() => setActiveLevel(k)}
                style={{ padding: "5px 15px", borderRadius: 20, border: activeLevel === k ? `1px solid ${v.border}` : "1px solid #1e293b", background: activeLevel === k ? v.bg : "transparent", color: activeLevel === k ? v.text : "#475569", fontSize: 12, fontWeight: activeLevel === k ? 500 : 400, cursor: "pointer" }}>
                {v.label}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, borderBottom: "1px solid #1e293b", marginBottom: 20 }}>
            {[["stack", "Tech Stack"], ["repos", "GitHub Repos"], ["projects", "Project Ideas"]].map(([k, label]) => (
              <button key={k} onClick={() => setActiveTab(k)}
                style={{ padding: "7px 16px", fontSize: 12, fontWeight: activeTab === k ? 500 : 400, color: activeTab === k ? "#f1f5f9" : "#64748b", background: "transparent", border: "none", borderBottom: activeTab === k ? `2px solid ${activeRole.color}` : "2px solid transparent", cursor: "pointer", marginBottom: -1 }}>
                {label}
              </button>
            ))}
          </div>

          {/* TECH STACK TAB */}
          {activeTab === "stack" && (
            <>
              <div style={{ background: lm.bg, borderLeft: `3px solid ${lm.border}`, borderRadius: "0 10px 10px 0", padding: "11px 15px", marginBottom: 20 }}>
                <span style={{ fontFamily: "'Courier New',monospace", fontSize: 9, color: lm.text, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: 3 }}>{lm.label} goal</span>
                <p style={{ margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>{levelData.summary}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {levelData.categories.map((cat, ci) => (
                  <div key={ci} style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: activeRole.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 10, fontWeight: 500, color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}>{cat.name}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {cat.tools.map((t, ti) => (
                        <div key={ti} style={{ display: "flex", alignItems: "center", gap: 9, padding: "6px 9px", background: "#0f172a", borderRadius: 7, border: "1px solid #1e293b" }}>
                          <span style={{ fontFamily: "'Courier New',monospace", fontSize: 9, color: activeRole.color, opacity: 0.55, flexShrink: 0, width: 12, textAlign: "center" }}>{ti + 1}</span>
                          <span style={{ fontSize: 12, color: "#cbd5e1" }}>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* GITHUB REPOS TAB */}
          {activeTab === "repos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ margin: "0 0 8px", fontSize: 12, color: "#64748b" }}>Curated GitHub repositories for <strong style={{ color: "#94a3b8" }}>{activeRole.title}</strong> — click any to open.</p>
              {activeRole.repos.map((repo, i) => (
                <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer"
                  style={{ background: "#111827", border: "1px solid #1e293b", borderRadius: 12, padding: "13px 16px", display: "flex", alignItems: "flex-start", gap: 14, textDecoration: "none", transition: "border-color 0.15s", cursor: "pointer" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = activeRole.color + "66"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#1e293b"}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 6, background: typeDotColor[repo.type] + "22", color: typeDotColor[repo.type], fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em", whiteSpace: "nowrap" }}>{typeLabels[repo.type]}</span>
                    {repo.stars !== "platform" && (
                      <span style={{ fontFamily: "'Courier New',monospace", fontSize: 10, color: "#F59E0B", opacity: 0.8 }}>★ {repo.stars}</span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Courier New',monospace", fontSize: 12, color: activeRole.color, marginBottom: 4, wordBreak: "break-all" }}>{repo.name}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{repo.desc}</div>
                  </div>
                  <span style={{ color: "#334155", fontSize: 14, flexShrink: 0 }}>↗</span>
                </a>
              ))}
            </div>
          )}

          {/* PROJECT IDEAS TAB */}
          {activeTab === "projects" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ margin: "0 0 8px", fontSize: 12, color: "#64748b" }}>Portfolio project ideas for <strong style={{ color: "#94a3b8" }}>{activeRole.title}</strong> at <strong style={{ color: lm.text }}>{lm.label}</strong> level.</p>
              {projectsForLevel.length === 0 && <div style={{ fontSize: 13, color: "#475569" }}>No projects found for this level.</div>}
              {projectsForLevel.map((p, i) => (
                <div key={i} style={{ background: "#111827", border: `1px solid ${lm.border}33`, borderLeft: `3px solid ${lm.border}`, borderRadius: "0 12px 12px 0", padding: "13px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: 11, color: lm.text, opacity: 0.7, marginTop: 1, flexShrink: 0 }}>#{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ margin: 0, fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>{p.idea}</p>
                </div>
              ))}
              <div style={{ marginTop: 10, padding: "12px 14px", background: "#0d0d15", border: "1px solid #1e293b", borderRadius: 10 }}>
                <p style={{ margin: 0, fontSize: 11, color: "#475569", lineHeight: 1.5 }}>
                  💡 <strong style={{ color: "#64748b" }}>Tip:</strong> For each project, create a public GitHub repo with a detailed README, a demo (Gradio / Streamlit / HF Spaces), and a write-up of what you learned. This is your portfolio.
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div style={{ marginTop: 28, padding: "12px 14px", background: "#0d0d15", border: "1px solid #1e293b", borderRadius: 10 }}>
            <p style={{ margin: 0, fontSize: 11, color: "#475569", lineHeight: 1.5 }}>Stack reflects the 2025–2026 ecosystem. GitHub repo stars are approximate at time of curation. Levels are cumulative — intermediate assumes beginner foundations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
