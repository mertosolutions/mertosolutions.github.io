// Edit these to update the site.
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/merto-solutions-98268a43b/',
  fiverr: 'https://www.fiverr.com/merto_speaks',
  freelancer: 'https://www.freelancer.in/',
};
export const CONTACT_EMAIL = 'mervinjoseph2002@gmail.com';

export const TYPED = ['AI automations', 'agentic workflows', 'RAG systems', 'data pipelines', 'ML models', 'React experiences', 'brands that pop'];

export const STATS = [
  { to: 9, label: 'Service areas' },
  { to: 30, suffix: '+', label: 'Tools & frameworks' },
  { to: 3, label: 'Cloud & API platforms' },
  { to: 1, label: 'Team, end to end' },
];

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'data', label: 'Data & Cloud' },
  { id: 'build', label: 'Build & Design' },
];

export const SERVICES = [
  { cat: 'ai', icon: '⚡', title: 'AI Automation Pipelines', text: 'End-to-end automations that connect your tools, documents and APIs and remove repetitive manual work.', tags: ['Workflow orchestration', 'LLM-powered steps', 'Monitoring & retries'] },
  { cat: 'ai', icon: '🤖', title: 'Agentic AI & AI Workflows', text: 'Tool-using agents and multi-step workflows that plan, act and hand off to humans when it matters.', tags: ['Multi-agent systems', 'Tool & API calling', 'Human-in-the-loop'] },
  { cat: 'ai', icon: '🔎', title: 'RAG Systems', text: 'Chat with your own knowledge: ingestion, chunking, embeddings, vector search and grounded answers.', tags: ['Vector databases', 'Hybrid retrieval', 'Evaluation & guardrails'] },
  { cat: 'ai', icon: '📈', title: 'ML Models', text: 'Classical and deep learning models trained, validated and shipped with scikit-learn and TensorFlow.', tags: ['scikit-learn', 'TensorFlow', 'Feature engineering & MLOps'] },
  { cat: 'data', icon: '🛢️', title: 'Data Engineering', text: 'Reliable batch and streaming pipelines, warehouses and transformations your analytics can trust.', tags: ['ETL / ELT', 'Warehousing', 'Data quality'] },
  { cat: 'data', icon: '☁️', title: 'GCP & Azure Cloud', text: 'Cloud architecture, deployment and cost-aware scaling on Google Cloud and Microsoft Azure.', tags: ['Infra & deployment', 'Serverless & containers', 'Security basics'] },
  { cat: 'data', icon: '🔌', title: 'Apache & APIs', text: 'Apache-based data tooling and clean, documented APIs that plug your systems together.', tags: ['REST API design', 'Apache stack', 'Integrations'] },
  { cat: 'build', icon: '⚛️', title: 'React Front-Ends', text: 'Fast, accessible, animated React applications and dashboards that make your data usable.', tags: ['React apps', 'Dashboards', 'Motion & interaction'] },
  { cat: 'build', icon: '🎨', title: 'Content, Branding & Figma', text: 'Posters, brand identity and content creation, designed in Figma and ready for web and print.', tags: ['Branding & posters', 'Figma UI design', 'Social content'] },
];

export const STAGES = [
  { title: 'Ingest', text: 'Pull data from APIs, databases, files, documents and web sources into one reliable entry point.', pills: ['REST APIs', 'Apache Kafka / Airflow', 'Cloud Storage', 'Webhooks'] },
  { title: 'Transform', text: 'Clean, validate and model your data so downstream AI and analytics can trust it.', pills: ['Python', 'SQL', 'Spark', 'dbt-style models', 'Data quality checks'] },
  { title: 'Embed / Train', text: 'Create embeddings for retrieval, or train and tune ML models on your prepared data.', pills: ['Vector DB', 'scikit-learn', 'TensorFlow', 'Evaluation'] },
  { title: 'Agents', text: 'LLM-powered agents reason over your knowledge, call tools and trigger actions, with humans in the loop.', pills: ['RAG', 'Tool calling', 'Multi-agent', 'Guardrails'] },
  { title: 'Deliver', text: 'Expose results through APIs, dashboards and polished React apps, deployed on GCP or Azure.', pills: ['React', 'FastAPI', 'GCP', 'Azure', 'Monitoring'] },
];

export const STACK = {
  'AI & ML': ['LLMs', 'RAG', 'LangChain', 'Agents', 'scikit-learn', 'TensorFlow', 'Embeddings'],
  Data: ['Python', 'SQL', 'Apache Spark', 'Apache Airflow', 'Apache Kafka', 'ETL / ELT'],
  'Cloud & APIs': ['GCP', 'Azure', 'Docker', 'REST APIs', 'FastAPI', 'CI/CD'],
  'Front-end & Design': ['React', 'JavaScript', 'Figma', 'Tailwind', 'Branding', 'Posters'],
};

// [label, ring radius out of 460, orbit seconds]
export const ORBIT = [
  [['React', 'Python', 'GCP'], 120, 22],
  [['RAG', 'Azure', 'Figma', 'Spark'], 168, 38],
  [['TensorFlow', 'scikit-learn', 'Agents', 'Airflow'], 215, 60],
];

export const STEPS = [
  { n: '01', title: 'Discover', text: 'We map your goals, data and constraints, then agree a clear scope.' },
  { n: '02', title: 'Design', text: 'Architecture and Figma prototypes so you see it before we build it.' },
  { n: '03', title: 'Build', text: 'Our team ships in short iterations with demos along the way.' },
  { n: '04', title: 'Launch & Grow', text: 'Deployment, monitoring and handover, plus support as it scales.' },
];
