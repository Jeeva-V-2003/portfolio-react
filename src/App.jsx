import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDatabase, FaCloud, FaCode, FaBrain, FaServer, FaChartLine, FaRocket, FaTools, FaDownload, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { SiApachekafka, SiApachespark, SiApacheairflow, SiSnowflake, SiPostgresql, SiFastapi, SiDbt, SiAmazons3, SiGooglecloud, SiDocker, SiGo, SiPython } from 'react-icons/si';
import profileImg from './assets/profile.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Typewriter hook
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex(i => i + 1);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

function App() {
  const typedText = useTypewriter([
    'AI-Native Data Engineer',
    'Data Pipeline Architect',
    'AI Systems Builder',
  ]);

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-content">
          <div className="logo">Jeeva Vincent</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="/Jeeva_Vincent_Resume.pdf" download className="nav-resume-btn">
                <FaDownload /> Resume
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-greeting">Jeeva Vincent</p>
            <h1>
              <span className="typewriter-text">{typedText}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="tagline">Building Scalable Data Pipelines & Intelligent AI Systems</p>
            <p className="description">
              AI-Native Data Engineer at iCustomer — promoted from Junior DE to leading AI-powered scoring engines,
              agentic enrichment pipelines, and ML-driven segmentation systems on GCP & AWS.
              Translating complex B2B data challenges into production-grade Python microservices.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <FaRocket /> View Projects
              </a>
              <a href="/Jeeva_Vincent_Resume.pdf" download className="btn btn-resume">
                <FaDownload /> Download Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                <FaEnvelope /> Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-container">
              <div className="profile-glow"></div>
              <img src={profileImg} alt="Jeeva Vincent" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" style={{ padding: '4rem 5%', background: 'rgba(0, 245, 255, 0.03)' }}>
        <motion.div
          style={{ maxWidth: '1400px', margin: '0 auto' }}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" {...fadeIn}>Impact & Achievements</motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>1+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Year Experience</p>
            </motion.div>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(255, 0, 255, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--secondary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Technologies Used</p>
            </motion.div>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--accent), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>20+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Production Services</p>
            </motion.div>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--purple), var(--pink))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>4</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Personal Projects</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <motion.h2 className="section-title" {...fadeIn}>Work Experience</motion.h2>
        <motion.div
          style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Role 1: AI-Native DE */}
          <motion.div
            variants={fadeIn}
            style={{
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(255, 0, 255, 0.05))',
              backdropFilter: 'blur(20px)',
              border: '2px solid transparent',
              borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1',
              borderRadius: '25px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0, 245, 255, 0.1), transparent)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI-Native Data Engineer</h3>
                <p style={{ color: 'var(--primary)', fontSize: '1.3rem', fontWeight: '700' }}>iCustomer</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '0.3rem' }}>B2B Audience Intelligence Platform · Cambridge, MA (Remote)</p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(255, 0, 255, 0.2))', padding: '0.8rem 1.5rem', borderRadius: '20px', border: '2px solid var(--primary)', textAlign: 'center' }}>
                <p style={{ color: '#fff', fontWeight: '700' }}>Feb 2026 – Present</p>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '0.2rem' }}>Promoted ↑</p>
              </div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              {[
                { icon: '🔥', color: 'var(--primary)', bg: 'rgba(0,245,255,0.05)', border: 'rgba(0,245,255,0.2)', title: 'FIRE Scoring Engine', desc: 'Fit, Intent, Recency, Engagement scoring triggered via RabbitMQ, dbt on BigQuery, persisted to PostgreSQL' },
                { icon: '🤖', color: 'var(--secondary)', bg: 'rgba(255,0,255,0.05)', border: 'rgba(255,0,255,0.2)', title: 'ICP Scoring Engine', desc: 'Two-agent system (Claude Sonnet + Haiku) parsing PPTX/DOCX/PDF into structured ICP scores 0–100' },
                { icon: '📊', color: 'var(--accent)', bg: 'rgba(0,255,136,0.05)', border: 'rgba(0,255,136,0.2)', title: 'RFM Segmentation', desc: 'K-Means clustering on 83K+ Shopify orders for Todd Snyder / American Eagle; live FastAPI prediction service' },
                { icon: '🏗️', color: 'var(--purple)', bg: 'rgba(168,85,247,0.05)', border: 'rgba(168,85,247,0.2)', title: 'Provider Orchestrator', desc: 'Intelligent enrichment routing with cascading fallback across ReverseContact & Pubrio — zero-downtime swaps' },
                { icon: '❄️', color: 'var(--primary)', bg: 'rgba(0,245,255,0.05)', border: 'rgba(0,245,255,0.2)', title: 'Snowflake Native App', desc: 'iCustomer CDO — Streamlit UI + Snowpark Python ETL for deterministic identity resolution inside Snowflake' },
                { icon: '🦫', color: 'var(--secondary)', bg: 'rgba(255,0,255,0.05)', border: 'rgba(255,0,255,0.2)', title: 'OneSource Go API', desc: 'chi HTTP router, multi-provider waterfall enrichment, 20+ CLI commands — Apollo, PDL, ReverseContact, TrestleIQ' },
              ].map((item, i) => (
                <div key={i} style={{ background: item.bg, padding: '1.2rem', borderRadius: '12px', border: `1px solid ${item.border}` }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                  <h4 style={{ color: item.color, marginBottom: '0.4rem', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Role 2: Junior DE */}
          <motion.div
            variants={fadeIn}
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.04), rgba(0,245,255,0.04))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: '25px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #fff, var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Junior Data Engineer</h3>
                <p style={{ color: 'var(--accent)', fontSize: '1.3rem', fontWeight: '700' }}>iCustomer</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '0.3rem' }}>Founding DE — Sole contributor building production microservices</p>
              </div>
              <div style={{ background: 'rgba(0,255,136,0.1)', padding: '0.8rem 1.5rem', borderRadius: '20px', border: '2px solid var(--accent)', textAlign: 'center' }}>
                <p style={{ color: '#fff', fontWeight: '700' }}>Jun 2025 – Jan 2026</p>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '0.2rem' }}>1+ Year</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              {[
                { icon: '⚡', title: 'B2B Realtime Signal Tracker', desc: 'Async FastAPI + aiohttp scraping company websites for tech stacks, social handles & job signals in real time' },
                { icon: '☁️', title: 'AWS Lambda Tag Identification', desc: 'Detects 1,000+ app fingerprints, extracts social handles & job signals from live websites' },
                { icon: '🔐', title: 'Contact Discovery API', desc: 'PostgreSQL + BigQuery queries with AES-256-CBC decryption returning enriched contact profiles' },
                { icon: '📡', title: 'RB2B Webhook Receiver', desc: 'Real-time anonymous B2B visitor de-anonymization inserting into per-tenant BigQuery tables' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'rgba(0,255,136,0.04)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(0,255,136,0.15)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.4rem', fontSize: '1rem' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <motion.h2 className="section-title" {...fadeIn}>Technical Expertise</motion.h2>
        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaCode /></div>
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Go</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaDatabase /></div>
            <h3>Data Engineering</h3>
            <div className="skill-tags">
              <span className="skill-tag">Apache Kafka</span>
              <span className="skill-tag">Apache Spark</span>
              <span className="skill-tag">Apache Airflow</span>
              <span className="skill-tag">dbt</span>
              <span className="skill-tag">dlt</span>
              <span className="skill-tag">Meltano (ELT)</span>
              <span className="skill-tag">Airbyte</span>
              <span className="skill-tag">RabbitMQ</span>
              <span className="skill-tag">Pyarrow</span>
              <span className="skill-tag">ETL / ELT Pipelines</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaBrain /></div>
            <h3>AI / ML</h3>
            <div className="skill-tags">
              <span className="skill-tag">Anthropic Claude</span>
              <span className="skill-tag">OpenAI GPT-4</span>
              <span className="skill-tag">Pydantic AI</span>
              <span className="skill-tag">LLM Prompt Engineering</span>
              <span className="skill-tag">K-Means Clustering</span>
              <span className="skill-tag">RFM Modelling</span>
              <span className="skill-tag">XGBoost</span>
              <span className="skill-tag">scikit-learn</span>
              <span className="skill-tag">sentence-transformers</span>
              <span className="skill-tag">Ollama</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaServer /></div>
            <h3>Databases & Warehouses</h3>
            <div className="skill-tags">
              <span className="skill-tag">BigQuery</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Snowflake</span>
              <span className="skill-tag">DuckDB</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">Qdrant (Vector DB)</span>
              <span className="skill-tag">LanceDB</span>
              <span className="skill-tag">SQLAlchemy</span>
              <span className="skill-tag">asyncpg</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaCloud /></div>
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              <span className="skill-tag">GCP BigQuery</span>
              <span className="skill-tag">GCS</span>
              <span className="skill-tag">Cloud Run</span>
              <span className="skill-tag">AWS Lambda</span>
              <span className="skill-tag">AWS S3</span>
              <span className="skill-tag">AWS Glue</span>
              <span className="skill-tag">AWS Athena</span>
              <span className="skill-tag">AWS ECR</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Boto3</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaTools /></div>
            <h3>Backend Frameworks</h3>
            <div className="skill-tags">
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">NestJS</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Cobra (Go CLI)</span>
              <span className="skill-tag">Mangum</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Streamlit</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaChartLine /></div>
            <h3>Data Enrichment & APIs</h3>
            <div className="skill-tags">
              <span className="skill-tag">Zyte API</span>
              <span className="skill-tag">BrightData SERP</span>
              <span className="skill-tag">BuiltWith / Wappalyzer</span>
              <span className="skill-tag">Apollo.io</span>
              <span className="skill-tag">ReverseContact</span>
              <span className="skill-tag">Lusha</span>
              <span className="skill-tag">Dropcontact</span>
              <span className="skill-tag">ZeroBounce</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaShieldAlt /></div>
            <h3>Scraping & Automation</h3>
            <div className="skill-tags">
              <span className="skill-tag">Selenium</span>
              <span className="skill-tag">Playwright</span>
              <span className="skill-tag">BeautifulSoup</span>
              <span className="skill-tag">aiohttp</span>
              <span className="skill-tag">httpx</span>
              <span className="skill-tag">Scapy</span>
              <span className="skill-tag">Bytewax</span>
              <span className="skill-tag">lxml</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaCogs /></div>
            <h3>Analytics & Platforms</h3>
            <div className="skill-tags">
              <span className="skill-tag">LookML / Looker</span>
              <span className="skill-tag">Salesforce (SFDC)</span>
              <span className="skill-tag">Plotly</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Matplotlib</span>
              <span className="skill-tag">JWT / OAuth 2.0</span>
              <span className="skill-tag">AES-256-CBC</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <motion.h2 className="section-title" {...fadeIn}>Personal Projects</motion.h2>
        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><SiApachekafka /></div>
            <h3>Tech Intelligence Pipeline</h3>
            <p>
              End-to-end market intelligence pipeline ingesting live crypto/stock data, Reddit posts, and news articles
              via Kafka producers, transforming with dbt, storing in DuckDB, and exposing sentiment & trend APIs via FastAPI.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Apache Kafka</span>
              <span className="tech-tag">Apache Airflow</span>
              <span className="tech-tag">dbt</span>
              <span className="tech-tag">DuckDB</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Python</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><FaShieldAlt /></div>
            <h3>Sentinel Shield — Network Privacy Guard</h3>
            <p>
              Real-time network intrusion detection system capturing packets with Scapy, processing streams with Bytewax,
              analyzing traffic with a local AI model (Ollama), storing embeddings in LanceDB, and sending instant alerts.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Scapy</span>
              <span className="tech-tag">Bytewax</span>
              <span className="tech-tag">Ollama (LLM)</span>
              <span className="tech-tag">LanceDB</span>
              <span className="tech-tag">FastAPI</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><SiAmazons3 /></div>
            <h3>Real-Time Stock Market Pipeline</h3>
            <p>
              Kafka-based ETL pipeline streaming stock market data from CSV to JSON, storing in AWS S3,
              cataloging metadata with AWS Glue, and querying market trends via Athena with serverless SQL.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Apache Kafka</span>
              <span className="tech-tag">AWS S3</span>
              <span className="tech-tag">AWS Glue</span>
              <span className="tech-tag">AWS Athena</span>
              <span className="tech-tag">Python</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><SiApachespark /></div>
            <h3>Uber Data Engineering Pipeline</h3>
            <p>
              Batch processing pipeline analyzing Uber ride data with Spark, orchestrated by Airflow DAGs,
              generating insights on peak hours, location heatmaps, and revenue trends in BigQuery.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Apache Spark</span>
              <span className="tech-tag">Apache Airflow</span>
              <span className="tech-tag">BigQuery</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">DAG</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education">
        <motion.h2 className="section-title" {...fadeIn}>Education</motion.h2>
        <motion.div
          className="timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>MBA in Human Resource Management</h3>
              <p className="institution">Bharathidasan University, Tiruchirappalli</p>
              <p className="duration">2025 – 2027 (Pursuing)</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p className="institution">Providence College for Women, Coonoor</p>
              <p className="duration">2022 – 2025 · GPA: 8.47 / 10.00</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Diploma in Cyber Security (DCS)</h3>
              <p className="institution">Bharathiar University, Coimbatore</p>
              <p className="duration">2022 – 2025</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <motion.h2 className="section-title" {...fadeIn}>Get In Touch</motion.h2>
        <motion.div
          className="contact-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="contact-card" variants={fadeIn}>
            <div className="contact-icon"><FaEnvelope /></div>
            <h4>Email</h4>
            <a href="mailto:jeevavincent.2003@gmail.com">jeevavincent.2003@gmail.com</a>
          </motion.div>

          <motion.div className="contact-card" variants={fadeIn}>
            <div className="contact-icon"><FaLinkedin /></div>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/jeeva280503/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/jeeva280503
            </a>
          </motion.div>

          <motion.div className="contact-card" variants={fadeIn}>
            <div className="contact-icon"><FaGithub /></div>
            <h4>GitHub</h4>
            <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer">
              github.com/Jeeva-V-2003
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Jeeva Vincent &mdash; AI-Native Data Engineer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
