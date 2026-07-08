import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import profileImg   from './assets/profile.jpg';
import illuWorkflow from './assets/illustration-workflow.png';
import illuDev      from './assets/illustration-developer.png';
import illuCollab   from './assets/illustration-collaboration.png';
import illuRocket   from './assets/illustration-rocket.png';

/* ── animation presets ─────────────────────── */
const up   = { initial:{opacity:0,y:40},  whileInView:{opacity:1,y:0},  transition:{duration:.6}, viewport:{once:true} };
const left = { initial:{opacity:0,x:-50}, whileInView:{opacity:1,x:0},  transition:{duration:.7}, viewport:{once:true} };
const pop  = { initial:{opacity:0,scale:.88}, whileInView:{opacity:1,scale:1}, transition:{duration:.6}, viewport:{once:true} };

/* ── custom cursor ─────────────────────────── */
function CustomCursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const m  = useRef({ x:-200, y:-200 });
  const sm = useRef({ x:-200, y:-200 });

  useEffect(() => {
    const move = e => {
      m.current = { x:e.clientX, y:e.clientY };
      if (dot.current) dot.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    };
    let raf;
    const tick = () => {
      sm.current.x += (m.current.x - sm.current.x) * .09;
      sm.current.y += (m.current.y - sm.current.y) * .09;
      if (ring.current) ring.current.style.transform = `translate(${sm.current.x}px,${sm.current.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const show = () => { dot.current && (dot.current.style.opacity='1'); ring.current && (ring.current.style.opacity='1'); };
    const hide = () => { dot.current && (dot.current.style.opacity='0'); ring.current && (ring.current.style.opacity='0'); };
    const grow   = () => ring.current?.classList.add('cursor-ring--hover');
    const shrink = () => ring.current?.classList.remove('cursor-ring--hover');
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);
    raf = requestAnimationFrame(tick);
    const els = document.querySelectorAll('a,button,[role="button"]');
    els.forEach(el => { el.addEventListener('mouseenter',grow); el.addEventListener('mouseleave',shrink); });
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
      cancelAnimationFrame(raf);
      els.forEach(el => { el.removeEventListener('mouseenter',grow); el.removeEventListener('mouseleave',shrink); });
    };
  }, []);
  return (<><div ref={dot} className="cursor-dot"/><div ref={ring} className="cursor-ring"/></>);
}

/* ── scroll progress ───────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      setPct(t > 0 ? (window.scrollY / t) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive:true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div className="scroll-progress" style={{ width:`${pct}%` }}/>;
}

/* ── SVG decorators ────────────────────────── */
const Star4 = ({ size=20, style={}, op=1 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
    style={{ position:'absolute', width:size, height:size, pointerEvents:'none', opacity:op, ...style }}>
    <path d="M12 0l1.8 8.4L22 12l-8.2 3.6L12 24l-1.8-8.4L2 12l8.2-3.6L12 0z"/>
  </svg>
);
const Plus = ({ size=14, style={}, op=.15 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"
    style={{ position:'absolute', width:size, height:size, pointerEvents:'none', opacity:op, ...style }}>
    <line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>
  </svg>
);
const DotGrid = ({ rows=5, cols=6, gap=14, style={} }) => {
  const pad=4, w=(cols-1)*gap+pad*2, h=(rows-1)*gap+pad*2;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true"
      style={{ position:'absolute', width:w, height:h, pointerEvents:'none', ...style }}>
      {Array.from({length:rows*cols}).map((_,i) => {
        const r=Math.floor(i/cols), c=i%cols;
        return <circle key={i} cx={c*gap+pad} cy={r*gap+pad} r={2} fill="currentColor" opacity={.28}/>;
      })}
    </svg>
  );
};
const DashCircle = ({ size=140, style={} }) => (
  <svg viewBox="0 0 120 120" aria-hidden="true"
    style={{ position:'absolute', width:size, height:size, pointerEvents:'none', ...style }}>
    <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" fill="none"/>
  </svg>
);

/* ── marquee ───────────────────────────────── */
const MARQUEE = [
  { text:'AI-NATIVE DATA ENGINEER', c:'#6366f1' },
  { text:'OPEN TO WORK',            c:'#059669' },
  { text:'DATA PIPELINE ARCHITECT', c:'#8b7d6e' },
  { text:'AI SYSTEMS BUILDER',      c:'#7c3aed' },
  { text:'PYTHON  ·  GO  ·  SQL',   c:'#6366f1' },
  { text:'SNOWFLAKE  ·  BIGQUERY',  c:'#d97706' },
  { text:'JEEVA VINCENT',           c:'#1a1a1a' },
];

/* ── grouped skills ────────────────────────── */
const SKILL_GROUPS = [
  { label:'Languages',         skills:['Python','Go','SQL','TypeScript','JavaScript'] },
  { label:'Data Engineering',  skills:['Apache Kafka','Apache Airflow','Apache Spark','dbt','dlt','RabbitMQ','Airbyte','Meltano','Pyarrow','ETL / ELT Pipelines'] },
  { label:'AI / ML',           skills:['Anthropic Claude','OpenAI GPT-4','Pydantic AI','LangChain','LangGraph','XGBoost','scikit-learn','K-Means Clustering','RFM Modelling','sentence-transformers','Ollama','LLM Prompt Engineering'] },
  { label:'Databases & Warehouses', skills:['BigQuery','PostgreSQL','Snowflake','DuckDB','Redis','Qdrant (Vector DB)','LanceDB','SQLAlchemy','asyncpg'] },
  { label:'Cloud & DevOps',    skills:['GCP BigQuery','GCS','Cloud Run','AWS Lambda','AWS S3','AWS Glue','AWS Athena','AWS ECR','Docker','Boto3'] },
  { label:'Backend & APIs',    skills:['FastAPI','NestJS','Express.js','Cobra (Go CLI)','Mangum','Streamlit','React','Next.js'] },
  { label:'Data Enrichment',   skills:['Zyte API','BrightData SERP','BuiltWith / Wappalyzer','Apollo.io','ReverseContact','Lusha','Dropcontact','ZeroBounce','TrestleIQ'] },
  { label:'Scraping & Analytics', skills:['Selenium','Playwright','BeautifulSoup','aiohttp','httpx','Scapy','Bytewax','LookML / Looker','Salesforce (SFDC)','Pandas','NumPy','Plotly'] },
];

/* ═══════════════════════════════════════════════
   APP
═══════════════════════════════════════════════ */
export default function App() {
  return (
    <div>
      <CustomCursor/>
      <ScrollProgress/>

      {/* ── NAVBAR ── */}
      <motion.header
        style={{ position:'fixed', top:0, left:0, right:0, zIndex:1000,
          padding:'1rem 5%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}
        initial={{ y:-80, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ duration:.5 }}
      >
        <a href="#home" className="nav-avatar" aria-label="Home">
          <img src={profileImg} alt="Jeeva Vincent"/>
        </a>
        <nav className="nav-pill">
          {[['#home','Home'],['#about','About'],['#experience','Experience'],
            ['#projects','Projects'],['#skills','Skills'],['#education','Education'],['#contact','Contact']].map(([h,l])=>(
            <a key={h} href={h}>{l}</a>
          ))}
        </nav>
        <div className="nav-socials">
          <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="GitHub"><FaGithub size={17}/></a>
          <a href="https://www.linkedin.com/in/jeeva280503/" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="LinkedIn"><FaLinkedin size={17}/></a>
          <a href="/Jeeva_Vincent_Resume.pdf" download className="nav-social-btn" aria-label="Resume"><FaDownload size={15}/></a>
        </div>
      </motion.header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" className="noise">
        <DotGrid rows={6} cols={8} style={{ top:'10%', right:'0%', color:'rgba(26,26,26,.08)' }}/>
        <DashCircle size={260} style={{ bottom:'4%', left:'-3%', color:'rgba(26,26,26,.05)' }}/>
        <Star4 size={18} style={{ top:'24%', right:'30%', color:'rgba(99,102,241,.35)' }} op={1}/>
        <Star4 size={11} style={{ top:'64%', right:'24%', color:'rgba(26,26,26,.15)' }} op={1}/>
        <Plus size={18} style={{ top:'30%', left:'1%',   color:'rgba(26,26,26,.9)' }} op={.15}/>
        <Plus size={12} style={{ bottom:'24%', left:'4%',color:'rgba(26,26,26,.9)' }} op={.11}/>

        <div className="hero-grid">
          {/* text column */}
          <div style={{ position:'relative' }}>
            {/* sparkles near HELLO */}
            <Star4 size={24} style={{ top:6,  left:-26, color:'rgba(26,26,26,.6)' }} op={1}/>
            <Star4 size={12} style={{ top:-8, left:'44%', color:'rgba(26,26,26,.4)' }} op={1}/>
            <Star4 size={32} style={{ top:10, right:0, color:'rgba(99,102,241,.25)' }} op={1}/>

            <motion.div {...up}>
              <h1 className="hero-hello">
                HELLO<span className="hello-accent"> !</span>
              </h1>
            </motion.div>

            <motion.div {...up} transition={{ duration:.6, delay:.1 }}>
              <p className="hero-name">I am Jeeva Vincent,</p>
              <div className="hero-title-wrap">
                <p className="hero-title">AI-Native Data Engineer</p>
                <svg className="hero-wavy" viewBox="0 0 320 16" preserveAspectRatio="none"
                  fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M4 10 C 60 2, 130 16, 200 7 S 300 2, 316 9"/>
                  <path d="M14 14 C 80 8, 160 16, 240 10 S 300 12, 314 12" opacity=".5"/>
                </svg>
              </div>
            </motion.div>

            <motion.p className="hero-desc" {...up} transition={{ duration:.6, delay:.18 }}>
              AI-Native Data Engineer at iCustomer — promoted from Junior DE to leading
              AI-powered scoring engines, agentic enrichment pipelines, and ML-driven
              segmentation systems on GCP & AWS. Building production-grade systems that
              translate complex B2B data challenges into real outcomes.
            </motion.p>

            <motion.div className="hero-tags" {...up} transition={{ duration:.6, delay:.26 }}>
              {['B2B AI Systems','Data Pipelines','Scoring Engines','Open to Work'].map(t=>(
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </motion.div>

            <motion.div className="hero-btns" {...up} transition={{ duration:.6, delay:.34 }}>
              <a href="#projects" className="btn-primary">See My Work</a>
              <a href="#contact"  className="btn-outline">Get In Touch</a>
            </motion.div>
          </div>

          {/* photo column */}
          <motion.div className="hero-photo-col" {...pop} transition={{ duration:.8, delay:.2 }}>
            <div className="photo-frame-wrap">
              {/* decorative cursor top-right */}
              <svg className="deco-cursor" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 1L4 18.5L8.5 14L14 22L17 20.5L11.5 12.5L18 11L4 1Z"/>
              </svg>

              {/* wavy lines flanking */}
              <svg style={{ position:'absolute', left:'-3.2rem', top:'43%', width:120, height:20, pointerEvents:'none', color:'rgba(26,26,26,.2)' }}
                viewBox="0 0 120 20" fill="none">
                <path d="M2 10 C 15 2, 25 18, 38 10 C 51 2, 61 18, 74 10 C 87 2, 97 18, 110 10"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <svg style={{ position:'absolute', right:'-2.2rem', bottom:'28%', width:100, height:18, pointerEvents:'none', color:'rgba(184,169,154,.55)' }}
                viewBox="0 0 120 20" fill="none">
                <path d="M2 10 C 15 2, 25 18, 38 10 C 51 2, 61 18, 74 10 C 87 2, 97 18, 110 10"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>

              {/* rotating OPEN TO WORK badge */}
              <div className="rotating-badge">
                <svg className="badge-text-ring" viewBox="0 0 200 200">
                  <defs>
                    <path id="bp" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/>
                  </defs>
                  <text style={{ fontSize:'19px', letterSpacing:'3.5px', fontWeight:'700', fontFamily:'Inter,sans-serif', fill:'#1a1a1a' }}>
                    <textPath href="#bp">✦ OPEN TO WORK ✦ OPEN TO WORK ✦</textPath>
                  </text>
                </svg>
                <svg className="badge-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </div>

              <div className="photo-frame">
                <img src={profileImg} alt="Jeeva Vincent"/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-inner">
          {[...MARQUEE,...MARQUEE].map((item,i)=>(
            <span key={i} className="marquee-item">
              <span className="marquee-star" style={{ color:item.c }}>✦</span>
              <span className="marquee-text">{item.text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-strip">
        <div className="stats-grid">
          {[
            { num:'1+',  label:'Year of Experience' },
            { num:'50+', label:'Technologies Used' },
            { num:'20+', label:'Production Services' },
            { num:'4',   label:'Personal Projects' },
          ].map((s,i)=>(
            <motion.div key={i} className="stat-card" {...up} transition={{ duration:.5, delay:i*.07 }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about">
        <Star4 size={17} style={{ top:'8%',  right:'12%', color:'rgba(99,102,241,.25)' }} op={1}/>
        <Star4 size={10} style={{ bottom:'12%', left:'8%',  color:'rgba(217,119,6,.3)' }} op={1}/>
        <DotGrid rows={4} cols={3} style={{ left:'-1%', top:'38%', color:'rgba(26,26,26,.07)' }}/>
        <Plus size={16} style={{ top:'22%', right:'4%', color:'rgba(26,26,26,.9)' }} op={.12}/>

        <div className="section-max">
          <div className="about-grid">
            <div>
              <motion.div {...up}>
                <div className="section-label"><span className="label-star">✦</span> About</div>
                <h2 className="section-heading">More about <em>me.</em></h2>
              </motion.div>

              <motion.p className="about-body-text" {...up} transition={{ delay:.08 }}>
                I build AI systems end-to-end — from raw B2B data to deployed production services.
                My work sits at the intersection of data engineering and intelligence: scoring engines,
                enrichment pipelines, vector search, and agentic workflows.
              </motion.p>
              <motion.p className="about-body-text" {...up} transition={{ delay:.14 }}>
                I've built FIRE scoring, RFM segmentation on 83K+ Shopify orders, a Lookalike Engine
                across 18M+ companies, and migrated OneSource from Python to Go — solo, in under 3 weeks.
                I enjoy making complex systems simple, fast, and production-ready.
              </motion.p>

              <motion.div className="about-highlight-card" {...up} transition={{ delay:.2 }}>
                <h4>Currently at iCustomer</h4>
                <p>
                  B2B Audience Intelligence Platform — Cambridge, MA (Remote). Promoted Feb 2026.
                  Leading AI-powered scoring, segmentation, and enrichment infrastructure.
                </p>
              </motion.div>

              <motion.div className="about-skills-grid" {...up} transition={{ delay:.28 }}>
                {[
                  { title:'AI Systems',      body:'Scoring engines, clustering, vector search, LLM agents — all in production.' },
                  { title:'Data Pipelines',  body:'End-to-end ETL/ELT with Kafka, dbt, RabbitMQ, BigQuery, and Snowflake.' },
                  { title:'Enrichment APIs', body:'Multi-provider waterfall enrichment — Apollo, PDL, ReverseContact, TrestleIQ.' },
                  { title:'Go & Python',     body:'Go APIs, FastAPI microservices, Streamlit UIs — not just notebooks.' },
                ].map((c,i)=>(
                  <div key={i} className="about-skill-card">
                    <h5>{c.title}</h5>
                    <p>{c.body}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div className="about-illustration" {...left} transition={{ duration:.7, delay:.1 }}>
              <img src={illuWorkflow} alt="workflow illustration"/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPERIENCE ═══════════════ */}
      <section id="experience" style={{ background:'rgba(255,255,255,.28)' }}>
        <Plus size={18} style={{ top:'6%', right:'10%', color:'rgba(26,26,26,.9)' }} op={.13}/>
        <DashCircle size={200} style={{ right:'-3%', bottom:'6%', color:'rgba(99,102,241,.07)' }}/>
        <Star4 size={13} style={{ bottom:'10%', left:'8%', color:'rgba(217,119,6,.3)' }} op={1}/>

        <div className="section-max">
          <div className="exp-grid">
            <motion.div className="exp-illustration" {...left}>
              <img src={illuDev} alt="developer illustration"/>
              <span className="float-badge top-left">Python</span>
              <span className="float-badge top-right">FastAPI</span>
              <span className="float-badge mid-left">Go</span>
              <span className="float-badge bot-right">LangChain</span>
            </motion.div>
            <div>
              <motion.div {...up}>
                <div className="section-label"><span className="label-star">✦</span> Experience</div>
                <h2 className="section-heading">My experiences</h2>
              </motion.div>
              <motion.p style={{ fontSize:'1rem', color:'var(--fg-muted)', lineHeight:1.75, maxWidth:420, marginTop:'.5rem' }} {...up} transition={{ delay:.1 }}>
                Gained hands-on experience building production B2B data and AI systems,
                continuously expanding expertise across data engineering and ML.
              </motion.p>
              {/* wavy separator */}
              <svg style={{ display:'block', marginTop:'1.4rem', color:'rgba(99,102,241,.3)', width:120, height:20 }}
                viewBox="0 0 120 20" fill="none">
                <path d="M2 10 C 15 2, 25 18, 38 10 C 51 2, 61 18, 74 10 C 87 2, 97 18, 110 10"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* ── timeline ── */}
          <div className="timeline-wrap">
            {/* AI-Native DE */}
            <motion.div className="timeline-entry" {...up} transition={{ delay:.05 }}>
              <div style={{ textAlign:'right', paddingTop:'.3rem' }} className="tl-left">
                <span className="tl-date">Feb 2026 – Present</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div className="tl-dot"/>
              </div>
              <div>
                <div className="exp-card">
                  <h3>AI-Native Data Engineer — iCustomer</h3>
                  <p className="company">Promoted ↑ · Cambridge, MA (Remote)</p>
                  <p className="desc">Leading AI-powered scoring engines, agentic enrichment pipelines, and ML-driven segmentation systems on GCP & AWS.</p>
                  <div className="exp-sub-grid">
                    {[
                      { i:'🔥', t:'FIRE Scoring Engine',      d:'Fit, Intent, Recency, Engagement via RabbitMQ, dbt on BigQuery' },
                      { i:'🤖', t:'ICP Scoring Engine',       d:'Two-agent system (Claude Sonnet + Haiku) — ICP scores 0–100' },
                      { i:'📊', t:'RFM Segmentation',         d:'K-Means on 83K+ Shopify orders — live FastAPI prediction service' },
                      { i:'🏗️', t:'Provider Orchestrator',    d:'Cascading fallback across ReverseContact & Pubrio' },
                      { i:'❄️', t:'Snowflake Native App',      d:'Streamlit UI + Snowpark Python for identity resolution' },
                      { i:'🦫', t:'OneSource Go API',          d:'chi router, 20+ CLI commands — Apollo, PDL, TrestleIQ' },
                      { i:'🔍', t:'Lookalike Engine',          d:'18M+ companies, 580-dim vectors, XGBoost + Qdrant' },
                      { i:'📈', t:'LookML Analytics Suite',   d:'20+ LookML views — cohort heatmaps, LTV, RFM, fiscal calendar' },
                      { i:'🧠', t:'Unified Enrichment Agent', d:'50 rows parallel, SSE streaming, AWS ECS/Fargate' },
                    ].map((s,i)=>(
                      <div key={i} className="exp-sub-card">
                        <div className="sub-icon">{s.i}</div>
                        <h5>{s.t}</h5>
                        <p>{s.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Junior DE */}
            <motion.div className="timeline-entry exp-junior" {...up} transition={{ delay:.1 }}>
              <div style={{ textAlign:'right', paddingTop:'.3rem' }} className="tl-left">
                <span className="tl-date">Jun 2025 – Jan 2026</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                <div className="tl-dot"/>
              </div>
              <div>
                <div className="exp-card">
                  <h3>Junior Data Engineer — iCustomer</h3>
                  <p className="company">Founding DE · Sole contributor building production microservices</p>
                  <p className="desc">Built the full data infrastructure from scratch — scrapers, APIs, webhook receivers, and enrichment pipelines powering the core B2B platform.</p>
                  <div className="exp-sub-grid">
                    {[
                      { i:'⚡', t:'B2B Realtime Signal Tracker',  d:'FastAPI + aiohttp scraping tech stacks & job signals in real time' },
                      { i:'☁️', t:'AWS Lambda Tag Identification', d:'Detects 1,000+ app fingerprints from live websites' },
                      { i:'🔐', t:'Contact Discovery API',         d:'PostgreSQL + BigQuery with AES-256-CBC decryption' },
                      { i:'📡', t:'RB2B Webhook Receiver',         d:'Real-time B2B visitor de-anonymization to BigQuery' },
                      { i:'🎯', t:'DJ Graffiti Event Discovery',   d:'Weekly LLM pipeline classifying events to BigQuery every Monday' },
                      { i:'🔍', t:'SEO Keywords Finder',           d:'FastAPI on AWS Lambda — B2B keywords via OpenAI GPT' },
                    ].map((s,i)=>(
                      <div key={i} className="exp-sub-card">
                        <div className="sub-icon">{s.i}</div>
                        <h5>{s.t}</h5>
                        <p>{s.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section id="projects">
        <DotGrid rows={5} cols={4} style={{ right:'-1%', bottom:'4%', color:'rgba(26,26,26,.07)' }}/>
        <Star4 size={16} style={{ top:'7%',  left:'8%',  color:'rgba(99,102,241,.25)' }} op={1}/>
        <Plus size={14} style={{ bottom:'12%', right:'7%', color:'rgba(26,26,26,.9)' }} op={.12}/>

        <div className="section-max">
          <motion.div {...up}>
            <div className="section-label"><span className="label-star">✦</span> My Works</div>
            <h2 className="section-heading">Some of my <em>awesome</em> projects.</h2>
          </motion.div>

          <div className="projects-layout">
            <div className="project-row featured">
              <motion.div className="project-card" {...up} transition={{ delay:.05 }}>
                <div className="project-img-wrap">
                  <img src={illuRocket} alt="Tech Intelligence Pipeline"/>
                  <span className="project-num-badge">01</span>
                  <span className="project-cat-badge">Kafka · Data</span>
                </div>
                <div className="project-body">
                  <h3>Tech Intelligence Pipeline</h3>
                  <p>End-to-end market intelligence pipeline ingesting live crypto/stock data, Reddit posts, and news via Kafka, transforming with dbt, storing in DuckDB, exposing sentiment & trend APIs via FastAPI.</p>
                  <div className="project-tech">
                    {['Apache Kafka','Airflow','dbt','DuckDB','FastAPI','Python'].map(t=><span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>

              <motion.div className="project-card" {...up} transition={{ delay:.1 }}>
                <div className="project-img-wrap" style={{ height:180 }}>
                  <img src={illuWorkflow} alt="Sentinel Shield"/>
                  <span className="project-num-badge">02</span>
                  <span className="project-cat-badge">AI · Security</span>
                </div>
                <div className="project-body">
                  <h3>Sentinel Shield — Network Privacy Guard</h3>
                  <p>Real-time network intrusion detection capturing packets with Scapy, processing streams with Bytewax, analyzing with local Ollama AI, and storing embeddings in LanceDB.</p>
                  <div className="project-tech">
                    {['Scapy','Bytewax','Ollama','LanceDB','FastAPI','Python'].map(t=><span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="project-row">
              <motion.div className="project-card" {...up} transition={{ delay:.12 }}>
                <div className="project-img-wrap">
                  <img src={illuDev} alt="Stock Market Pipeline"/>
                  <span className="project-num-badge">03</span>
                  <span className="project-cat-badge">Kafka · AWS</span>
                </div>
                <div className="project-body">
                  <h3>Real-Time Stock Market Pipeline</h3>
                  <p>Kafka-based ETL pipeline streaming stock market data from CSV to JSON, storing in AWS S3, cataloging metadata with Glue, and querying market trends via Athena.</p>
                  <div className="project-tech">
                    {['Apache Kafka','AWS S3','AWS Glue','Athena','Python'].map(t=><span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>

              <motion.div className="project-card" {...up} transition={{ delay:.16 }}>
                <div className="project-img-wrap">
                  <img src={illuCollab} alt="Uber Data Pipeline"/>
                  <span className="project-num-badge">04</span>
                  <span className="project-cat-badge">Spark · BigQuery</span>
                </div>
                <div className="project-body">
                  <h3>Uber Data Engineering Pipeline</h3>
                  <p>Batch processing pipeline analyzing Uber ride data with Spark, orchestrated by Airflow DAGs, generating insights on peak hours, location heatmaps, and revenue trends in BigQuery.</p>
                  <div className="project-tech">
                    {['Apache Spark','Airflow','BigQuery','Python','DAGs'].map(t=><span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <section id="skills" className="skills-section-bg">
        <DashCircle size={170} style={{ left:'-2%', top:'6%', color:'rgba(99,102,241,.07)' }}/>
        <Star4 size={14} style={{ top:'10%', right:'5%', color:'rgba(217,119,6,.28)' }} op={1}/>
        <Plus size={14} style={{ bottom:'14%', right:'16%', color:'rgba(26,26,26,.9)' }} op={.11}/>

        <div className="section-max">
          <motion.div {...up}>
            <div className="section-label"><span className="label-star">✦</span> Technologies &amp; Tools</div>
            <h2 className="section-heading">The stack I <em>build</em> with.</h2>
            <p style={{ fontSize:'1rem', color:'var(--fg-muted)', lineHeight:1.75, maxWidth:560, marginTop:'.4rem' }}>
              A combination of modern data engineering and AI tools for building performant,
              production-grade intelligent systems.
            </p>
          </motion.div>

          <motion.div className="skill-groups" {...up} transition={{ delay:.1 }}>
            {SKILL_GROUPS.map((g,gi)=>(
              <div key={gi} className="skill-group">
                <div className="skill-group-label">{g.label}</div>
                <div className="skill-tags">
                  {g.skills.map((s,si)=>(
                    <span key={si} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ EDUCATION ═══════════════ */}
      <section id="education">
        <Star4 size={14} style={{ top:'10%', right:'7%', color:'rgba(99,102,241,.22)' }} op={1}/>
        <Plus size={14} style={{ bottom:'12%', left:'4%', color:'rgba(26,26,26,.9)' }} op={.11}/>

        <div className="section-max">
          <motion.div {...up}>
            <div className="section-label"><span className="label-star">✦</span> Education</div>
            <h2 className="section-heading">Academic <em>background.</em></h2>
          </motion.div>

          <div className="edu-list">
            {[
              { d:'MBA in Human Resource Management',       s:'Bharathidasan University, Tiruchirappalli', g:'Pursuing',         y:'2025 – 2027' },
              { d:'Bachelor of Computer Applications (BCA)', s:'Providence College for Women, Coonoor',    g:'GPA: 8.47 / 10.00',y:'2022 – 2025' },
              { d:'Diploma in Cyber Security (DCS)',          s:'Bharathiar University, Coimbatore',        g:'Completed',        y:'2022 – 2025' },
            ].map((e,i)=>(
              <motion.div key={i} className="edu-card" {...up} transition={{ delay:i*.07 }}>
                <div>
                  <h3>{e.d}</h3>
                  <p className="edu-school">{e.s}</p>
                  <p className="edu-gpa">{e.g}</p>
                </div>
                <span className="edu-year">{e.y}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="noise">
        <DashCircle size={220} style={{ left:'1%',  top:'3%',  color:'rgba(26,26,26,.05)' }}/>
        <DashCircle size={170} style={{ right:'-2%',top:'-3%', color:'rgba(99,102,241,.06)' }}/>
        <Star4 size={20} style={{ bottom:'22%', left:'16%', color:'rgba(99,102,241,.2)' }} op={1}/>
        <Plus size={14} style={{ top:'17%', right:'7%',     color:'rgba(26,26,26,.9)' }} op={.12}/>
        <Star4 size={11} style={{ top:'12%', right:'27%',   color:'rgba(217,119,6,.25)' }} op={1}/>

        <div className="section-max" style={{ textAlign:'center', position:'relative', zIndex:1 }}>
          <motion.div className="contact-illustration" {...pop} transition={{ duration:.6 }}>
            <img src={illuCollab} alt="collaboration"/>
          </motion.div>

          <motion.div {...up} transition={{ delay:.05 }}>
            <div className="section-label" style={{ justifyContent:'center' }}><span className="label-star">✦</span> Contact</div>
          </motion.div>

          <motion.h2 className="contact-heading" {...up} transition={{ delay:.1 }}>
            Let's build something<br/><em>extraordinary.</em>
          </motion.h2>

          <motion.p className="contact-sub" {...up} transition={{ delay:.16 }}>
            If you're working on something interesting in AI, data engineering, or B2B intelligence, let's talk.
          </motion.p>

          <motion.div className="contact-actions" {...up} transition={{ delay:.22 }}>
            <a href="mailto:jeevavincent.2003@gmail.com" className="contact-email-btn">
              jeevavincent.2003@gmail.com <span>→</span>
            </a>
            <a href="/Jeeva_Vincent_Resume.pdf" download className="contact-resume-btn">
              <FaDownload size={13}/> Download Resume
            </a>
          </motion.div>

          <motion.div className="contact-links" {...up} transition={{ delay:.28 }}>
            <a href="https://github.com/Jeeva-V-2003"             target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jeeva280503/"    target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:jeevavincent.2003@gmail.com">Email</a>
          </motion.div>

          <motion.footer className="footer" style={{ marginTop:'3rem', border:'none' }} {...up} transition={{ delay:.34 }}>
            © 2026 Jeeva Vincent — AI-Native Data Engineer. Crafted with care.
          </motion.footer>
        </div>
      </section>
    </div>
  );
}
