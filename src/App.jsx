import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaCloud, FaCode, FaBrain, FaServer, FaChartLine, FaRocket, FaTools } from 'react-icons/fa';
import { SiApachekafka, SiApachespark, SiApacheairflow, SiSnowflake, SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiDocker, SiKubernetes, SiTerraform, SiPython, SiJavascript, SiReact, SiFastapi, SiDbt, SiAmazons3, SiGooglecloud } from 'react-icons/si';
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

function App() {
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
            <h1>Data Engineer & AI Developer</h1>
            <p className="tagline">Building Scalable Data Pipelines & Intelligent Systems</p>
            <p className="description">
              Data Engineer at iCustomer with 8+ months of experience building enterprise-scale data infrastructure. 
              Specialized in real-time ETL, cloud data warehousing, and AI-powered solutions. 
              Currently pursuing MBA in HRM while working on cutting-edge data engineering projects.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                <FaRocket /> View Projects
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
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>8+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Months Experience</p>
            </motion.div>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(255, 0, 255, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--secondary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Technologies Used</p>
            </motion.div>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--accent), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>20+</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Enterprise Projects</p>
            </motion.div>
            <motion.div variants={fadeIn} style={{ padding: '2rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '15px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <h3 style={{ fontSize: '3rem', background: 'linear-gradient(135deg, var(--purple), var(--pink))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>5</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Personal Projects</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
        <motion.h2 className="section-title" {...fadeIn}>Work Experience</motion.h2>
        <motion.div 
          style={{ maxWidth: '1100px', margin: '0 auto' }}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
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
            <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255, 0, 255, 0.1), transparent)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '0.8rem', background: 'linear-gradient(135deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Data Engineer</h3>
                <p style={{ color: 'var(--primary)', fontSize: '1.4rem', fontWeight: '700', textShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}>iCustomer</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1rem', marginTop: '0.5rem' }}>Customer Data Platform & AI Solutions</p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(255, 0, 255, 0.2))', padding: '1rem 2rem', borderRadius: '25px', border: '2px solid var(--primary)', boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}>
                <p style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem' }}>June 2025 - Present</p>
                <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginTop: '0.3rem' }}>8+ Months</p>
              </div>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '2rem', lineHeight: '1.8', fontWeight: '500' }}>
                Building enterprise-scale data infrastructure and AI-powered solutions for customer data platforms, 
                processing millions of records daily with cutting-edge technologies.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(0, 245, 255, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Real-Time Data Pipelines</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>Architected ETL pipelines using Apache Kafka, Spark, and Airflow processing millions of records daily</p>
                </div>
                
                <div style={{ background: 'rgba(255, 0, 255, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255, 0, 255, 0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☁️</div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cloud Data Warehouses</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>Built cloud-native warehouses on Snowflake and BigQuery with optimized dbt models</p>
                </div>
                
                <div style={{ background: 'rgba(0, 255, 136, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔗</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Data Integration</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>Developed 15+ integration pipelines connecting Salesforce, HubSpot, and custom APIs</p>
                </div>
                
                <div style={{ background: 'rgba(168, 85, 247, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤖</div>
                  <h4 style={{ color: 'var(--purple)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI-Powered Solutions</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>Implemented LLM-based data enrichment for automated quality and normalization</p>
                </div>
                
                <div style={{ background: 'rgba(0, 245, 255, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>ID Resolution Systems</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>Created systems processing 10M+ records with 95%+ accuracy using UUIDv5 matching</p>
                </div>
                
                <div style={{ background: 'rgba(255, 0, 255, 0.05)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255, 0, 255, 0.2)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Performance Optimization</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>Reduced BigQuery costs by 40% through partitioning and clustering strategies</p>
                </div>
              </div>
              
              <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>🛠️ Technologies & Tools</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 245, 255, 0.1))', border: '1px solid var(--primary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 245, 255, 0.2)' }}>Apache Kafka</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 245, 255, 0.1))', border: '1px solid var(--primary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 245, 255, 0.2)' }}>Apache Spark</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 245, 255, 0.1))', border: '1px solid var(--primary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 245, 255, 0.2)' }}>Apache Airflow</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))', border: '1px solid var(--secondary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(255, 0, 255, 0.2)' }}>Snowflake</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))', border: '1px solid var(--secondary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(255, 0, 255, 0.2)' }}>BigQuery</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1))', border: '1px solid var(--accent)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 255, 136, 0.2)' }}>dbt</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1))', border: '1px solid var(--accent)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 255, 136, 0.2)' }}>dlt</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))', border: '1px solid var(--purple)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)' }}>FastAPI</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 245, 255, 0.1))', border: '1px solid var(--primary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 245, 255, 0.2)' }}>AWS</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))', border: '1px solid var(--secondary)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(255, 0, 255, 0.2)' }}>GCP</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1))', border: '1px solid var(--accent)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(0, 255, 136, 0.2)' }}>PostgreSQL</span>
                  <span style={{ padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.1))', border: '1px solid var(--purple)', borderRadius: '20px', fontSize: '0.9rem', color: '#fff', fontWeight: '600', boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)' }}>Python</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Technical Expertise
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaCode /></div>
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Shell/Bash</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaDatabase /></div>
            <h3>Data Engineering</h3>
            <div className="skill-tags">
              <span className="skill-tag">Apache Kafka</span>
              <span className="skill-tag">Apache Spark</span>
              <span className="skill-tag">Apache Airflow</span>
              <span className="skill-tag">dlt (Data Load Tool)</span>
              <span className="skill-tag">dbt (Data Build Tool)</span>
              <span className="skill-tag">ETL/ELT Pipelines</span>
              <span className="skill-tag">Reverse ETL</span>
              <span className="skill-tag">DAG Orchestration</span>
              <span className="skill-tag">Real-time Streaming</span>
              <span className="skill-tag">Batch Processing</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaServer /></div>
            <h3>Databases & Warehouses</h3>
            <div className="skill-tags">
              <span className="skill-tag">Snowflake</span>
              <span className="skill-tag">BigQuery</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">DuckDB</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">Elasticsearch</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaCloud /></div>
            <h3>Cloud Platforms</h3>
            <div className="skill-tags">
              <span className="skill-tag">AWS S3</span>
              <span className="skill-tag">AWS Glue</span>
              <span className="skill-tag">AWS Athena</span>
              <span className="skill-tag">AWS EC2</span>
              <span className="skill-tag">AWS Lambda</span>
              <span className="skill-tag">GCP BigQuery</span>
              <span className="skill-tag">GCS</span>
              <span className="skill-tag">GCP Elastic</span>
              <span className="skill-tag">Cloud Functions</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaBrain /></div>
            <h3>AI & Machine Learning</h3>
            <div className="skill-tags">
              <span className="skill-tag">LLMs (LLaMA, GPT)</span>
              <span className="skill-tag">Ollama</span>
              <span className="skill-tag">LM Studio</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">OCR</span>
              <span className="skill-tag">Clustering</span>
              <span className="skill-tag">RFM Analysis</span>
              <span className="skill-tag">Lookalike Modeling</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaTools /></div>
            <h3>Frameworks & Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">MERN Stack</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Electron.js</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Terraform</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">CI/CD</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><FaChartLine /></div>
            <h3>Data Integration & APIs</h3>
            <div className="skill-tags">
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">Webhooks</span>
              <span className="skill-tag">Airbyte</span>
              <span className="skill-tag">Stitch</span>
              <span className="skill-tag">Salesforce Integration</span>
              <span className="skill-tag">HubSpot Integration</span>
              <span className="skill-tag">Web Scraping</span>
              <span className="skill-tag">Data Enrichment</span>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={fadeIn}>
            <div className="skill-icon"><SiDbt /></div>
            <h3>Data Modeling & Analytics</h3>
            <div className="skill-tags">
              <span className="skill-tag">Data Modeling</span>
              <span className="skill-tag">Schema Design</span>
              <span className="skill-tag">Data Cataloging</span>
              <span className="skill-tag">Data Quality</span>
              <span className="skill-tag">Data Governance</span>
              <span className="skill-tag">ID Resolution</span>
              <span className="skill-tag">Deduplication</span>
              <span className="skill-tag">Normalization</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><SiApachekafka /></div>
            <h3>Real-Time Stock Market Data Pipeline</h3>
            <p>
              Built a real-time ETL pipeline using Apache Kafka, Python, and AWS (S3, Glue, Athena) 
              to ingest, process, and analyze stock market data with serverless SQL-based analysis.
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
              Developed a batch processing pipeline using Apache Spark and BigQuery. Orchestrated 
              ETL with Apache Airflow DAGs for automated daily ingestion and transformation.
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

          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><FaBrain /></div>
            <h3>IngestAI - LLM-Powered Web Scraper</h3>
            <p>
              AI-powered web scraping tool with PyQt5 GUI, featuring HTML parsing and OCR. 
              Integrated with LM Studio (LLaMA 3.1) for intelligent summarization and deduplication.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">PyQt5</span>
              <span className="tech-tag">LLM</span>
              <span className="tech-tag">OCR</span>
              <span className="tech-tag">Web Scraping</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><FaRocket /></div>
            <h3>AskJeeva - AI Browser Assistant</h3>
            <p>
              Custom desktop browser built with Electron.js and Python, featuring an AI-driven 
              Video Search Module with intelligent summarization using local LLMs via Ollama.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Electron.js</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Ollama</span>
              <span className="tech-tag">LLM</span>
              <span className="tech-tag">AI</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>

          <motion.div className="project-card" variants={fadeIn}>
            <div className="project-icon"><SiApacheairflow /></div>
            <h3>AI Market Intelligence Hub</h3>
            <p>
              Modern data pipeline extracting live crypto/stock data and AI news. Built with dlt for ingestion, 
              dbt for transformation, DuckDB warehouse, and FastAPI for serving analytics via REST endpoints.
            </p>
            <div className="project-tech">
              <span className="tech-tag">dlt</span>
              <span className="tech-tag">dbt</span>
              <span className="tech-tag">Apache Airflow</span>
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
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education">
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Education
        </motion.h2>
        
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
              <p className="duration">2025 - 2027 (Pursuing)</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p className="institution">Providence College for Women, Coonoor</p>
              <p className="duration">2022 - 2025 | GPA: 8.47/10.00</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Diploma in Cyber Security (DCS)</h3>
              <p className="institution">Bharathiar University, Coimbatore</p>
              <p className="duration">2022 - 2025</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Get In Touch
        </motion.h2>
        
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
            <div className="contact-icon"><FaPhone /></div>
            <h4>Phone</h4>
            <a href="tel:+919962126629">+91 9962126629</a>
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
        <p>&copy; 2025 Jeeva Vincent. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
