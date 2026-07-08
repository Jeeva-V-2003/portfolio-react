import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowLeft } from 'react-icons/fa';
import profileImg from './assets/profile.jpg';
import illuWorkflow    from './assets/illustration-workflow.png';
import illuDev         from './assets/illustration-developer.png';
import illuCollab      from './assets/illustration-collaboration.png';
import illuRocket      from './assets/illustration-rocket.png';

/* ── animation helpers ─────────────────────────────── */
const fadeUp   = { initial: { opacity: 0, y: 40 },  whileInView: { opacity: 1, y: 0 }, transition: { duration: .6 }, viewport: { once: true } };
const fadeLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: .7 }, viewport: { once: true } };
const scaleIn  = { initial: { opacity: 0, scale: .88 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: .6 }, viewport: { once: true } };

/* ── custom cursor ─────────────────────────────────── */
function CustomCursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const mouse  = useRef({ x: -200, y: -200 });
  const smooth = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) dot.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    };
    let raf;
    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * .09;
      smooth.current.y += (mouse.current.y - smooth.current.y) * .09;
      if (ring.current) ring.current.style.transform = `translate(${smooth.current.x}px,${smooth.current.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const show = () => { if (dot.current) dot.current.style.opacity = '1'; if (ring.current) ring.current.style.opacity = '1'; };
    const hide = () => { if (dot.current) dot.current.style.opacity = '0'; if (ring.current) ring.current.style.opacity = '0'; };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);
    raf = requestAnimationFrame(tick);

    const grow   = () => ring.current?.classList.add('cursor-ring--hover');
    const shrink = () => ring.current?.classList.remove('cursor-ring--hover');
    const els = document.querySelectorAll('a,button,[role="button"]');
    els.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink); });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseleave', hide);
      cancelAnimationFrame(raf);
      els.forEach(el => { el.removeEventListener('mouseenter', grow); el.removeEventListener('mouseleave', shrink); });
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

/* ── scroll progress ───────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const tot = document.documentElement.scrollHeight - window.innerHeight;
      setPct(tot > 0 ? (window.scrollY / tot) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

/* ── decorative SVGs ───────────────────────────────── */
const Sparkle4 = ({ size = 20, style = {}, opacity = 1 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
    style={{ position:'absolute', width:size, height:size, pointerEvents:'none', opacity, ...style }}>
    <path d="M12 0l1.8 8.4L22 12l-8.2 3.6L12 24l-1.8-8.4L2 12l8.2-3.6L12 0z"/>
  </svg>
);
const PlusSvg = ({ size = 14, style = {}, opacity = .18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"
    style={{ position:'absolute', width:size, height:size, pointerEvents:'none', opacity, ...style }}>
    <line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>
  </svg>
);
const DotGrid = ({ rows=5, cols=6, gap=14, style={} }) => {
  const pad=4, w=(cols-1)*gap+pad*2, h=(rows-1)*gap+pad*2;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true"
      style={{ position:'absolute', width:w, height:h, pointerEvents:'none', ...style }}>
      {Array.from({length:rows*cols}).map((_,i)=>{
        const r=Math.floor(i/cols), c=i%cols;
        return <circle key={i} cx={c*gap+pad} cy={r*gap+pad} r={2} fill="currentColor" opacity={.28}/>;
      })}
    </svg>
  );
};
const DashedCircle = ({ size=140, style={} }) => (
  <svg viewBox="0 0 120 120" aria-hidden="true"
    style={{ position:'absolute', width:size, height:size, pointerEvents:'none', ...style }}>
    <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" fill="none"/>
  </svg>
);
const WavyLine = ({ style={} }) => (
  <svg viewBox="0 0 120 20" fill="none" aria-hidden="true"
    style={{ position:'absolute', width:120, height:20, pointerEvents:'none', ...style }}>
    <path d="M2 10 C 15 2, 25 18, 38 10 C 51 2, 61 18, 74 10 C 87 2, 97 18, 110 10"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

/* ── marquee data ─────────────────────────────────── */
const MARQUEE = [
  { text:'AI-NATIVE DATA ENGINEER', color:'#8b7d6e' },
  { text:'OPEN TO WORK',            color:'#6b8c6b' },
  { text:'DATA PIPELINE ARCHITECT', color:'#8b7d6e' },
  { text:'AI SYSTEMS BUILDER',      color:'#7d7890' },
  { text:'PYTHON  ·  GO  ·  SQL',   color:'#8b7d6e' },
  { text:'SNOWFLAKE  ·  BIGQUERY',  color:'#6b7a8c' },
  { text:'JEEVA VINCENT',           color:'#8b6b6b' },
];

/* ── skills list ──────────────────────────────────── */
const SKILLS = [
  'Python','Go','SQL','TypeScript','JavaScript',
  'Apache Kafka','Apache Airflow','Apache Spark','dbt','dlt','RabbitMQ','Airbyte','Meltano',
  'Anthropic Claude','OpenAI GPT-4','Pydantic AI','XGBoost','scikit-learn','K-Means','RFM Modelling','sentence-transformers','Ollama',
  'BigQuery','PostgreSQL','Snowflake','DuckDB','Redis','Qdrant','LanceDB','asyncpg',
  'GCP BigQuery','GCS','Cloud Run','AWS Lambda','AWS S3','AWS Glue','AWS ECR','Docker','Boto3',
  'FastAPI','NestJS','Express.js','Cobra (Go CLI)','Streamlit','React','Next.js',
  'LangChain','LangGraph','Zyte API','BrightData','Apollo.io','ReverseContact','Selenium','Playwright','BeautifulSoup',
  'LookML / Looker','Salesforce (SFDC)','Pandas','NumPy','Plotly','AES-256-CBC',
];

/* ═══════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════ */
export default function App() {
  return (
    <div>
      <CustomCursor />
      <ScrollProgress />

      {/* ── NAV ── */}
      <motion.header
        style={{ position:'fixed', top:0, left:0, right:0, zIndex:1000,
          padding:'1rem 5%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1rem' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
      >
        {/* avatar */}
        <a href="#home" className="nav-avatar" aria-label="Home">
          <img src={profileImg} alt="Jeeva Vincent" />
        </a>

        {/* pill nav */}
        <nav className="nav-pill">
          {[['#home','Home'],['#about','About'],['#experience','Experience'],
            ['#projects','Projects'],['#skills','Skills'],['#education','Education'],['#contact','Contact']].map(([href,label])=>(
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        {/* social icons */}
        <div className="nav-socials">
          <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="GitHub">
            <FaGithub size={18}/>
          </a>
          <a href="https://www.linkedin.com/in/jeeva280503/" target="_blank" rel="noopener noreferrer" className="nav-social-btn" aria-label="LinkedIn">
            <FaLinkedin size={18}/>
          </a>
          <a href="/Jeeva_Vincent_Resume.pdf" download className="nav-social-btn" aria-label="Resume">
            <FaDownload size={16}/>
          </a>
        </div>
      </motion.header>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section id="home" className="noise">
        {/* decorative SVGs */}
        <DotGrid rows={6} cols={7} style={{ top:'10%', right:'1%', color:'rgba(26,26,26,.09)' }}/>
        <DashedCircle size={240} style={{ bottom:'5%', left:'-2%', color:'rgba(26,26,26,.06)' }}/>
        <Sparkle4 size={18} style={{ top:'22%', right:'28%', color:'rgba(26,26,26,.18)' }}/>
        <Sparkle4 size={11} style={{ top:'62%', right:'22%', color:'rgba(26,26,26,.12)' }}/>
        <PlusSvg size={18} style={{ top:'28%', left:'1%',   color:'rgba(26,26,26,.9)' }} opacity={.16}/>
        <PlusSvg size={12} style={{ bottom:'22%', left:'4%',color:'rgba(26,26,26,.9)' }} opacity={.12}/>

        <div className="hero-grid">
          {/* ── left: text ── */}
          <div style={{ position:'relative' }}>
            {/* sparkle decorators near HELLO */}
            <Sparkle4 size={22} style={{ top:8, left:-24, color:'rgba(26,26,26,.65)' }}/>
            <Sparkle4 size={12} style={{ top:-6, left:'42%', color:'rgba(26,26,26,.45)' }}/>
            <Sparkle4 size={30} style={{ top:12, right:4, color:'rgba(26,26,26,.55)' }}/>

            <motion.div {...fadeUp}>
              <h1 className="hero-hello">
                HELLO<span className="hello-faint"> !</span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration:.6, delay:.1 }}>
              <p className="hero-name">I am Jeeva Vincent,</p>
              <div className="hero-title-wrap">
                <p className="hero-title">AI-Native Data Engineer</p>
                {/* wavy underline */}
                <svg className="hero-wavy" viewBox="0 0 320 16" preserveAspectRatio="none"
                  fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M4 10 C 60 2, 130 16, 200 7 S 300 2, 316 9"/>
                  <path d="M14 14 C 80 8, 160 16, 240 10 S 300 12, 314 12" opacity=".5"/>
                </svg>
              </div>
            </motion.div>

            <motion.p className="hero-desc" {...fadeUp} transition={{ duration:.6, delay:.2 }}>
              AI-Native Data Engineer at iCustomer — promoted from Junior DE to leading
              AI-powered scoring engines, agentic enrichment pipelines, and ML-driven
              segmentation systems on GCP & AWS. Building production-grade systems that
              translate complex B2B data challenges into real outcomes.
            </motion.p>

            <motion.div className="hero-tags" {...fadeUp} transition={{ duration:.6, delay:.28 }}>
              {['B2B AI Systems','Data Pipelines','Scoring Engines','Open to Work'].map(t=>(
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </motion.div>

            <motion.div className="hero-btns" {...fadeUp} transition={{ duration:.6, delay:.36 }}>
              <a href="#projects" className="btn-primary">See My Work</a>
              <a href="#contact"  className="btn-outline">Get In Touch</a>
            </motion.div>
          </div>

          {/* ── right: photo ── */}
          <motion.div className="hero-photo-col" {...scaleIn} transition={{ duration:.8, delay:.2 }}>
            <div className="photo-frame-wrap">
              {/* decorative cursor arrow top-right */}
              <svg className="deco-cursor" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 1L4 18.5L8.5 14L14 22L17 20.5L11.5 12.5L18 11L4 1Z"/>
              </svg>

              {/* wavy lines flanking photo */}
              <WavyLine style={{ left:'-3.5rem', top:'44%', color:'rgba(26,26,26,.22)' }}/>
              <WavyLine style={{ right:'-2.5rem', bottom:'28%', color:'rgba(184,169,154,.55)' }}/>

              {/* rotating "OPEN TO WORK" badge */}
              <div className="rotating-badge">
                <svg className="badge-text-ring" viewBox="0 0 200 200">
                  <defs>
                    <path id="bp" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/>
                  </defs>
                  <text style={{ fontSize:'20px', letterSpacing:'4px', fontWeight:'700', fontFamily:'Inter,sans-serif', fill:'#1a1a1a' }}>
                    <textPath href="#bp" startOffset="0">✦ OPEN TO WORK ✦ OPEN TO WORK ✦</textPath>
                  </text>
                </svg>
                {/* arrow icon center */}
                <svg className="badge-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </div>

              {/* photo */}
              <div className="photo-frame">
                <img src={profileImg} alt="Jeeva Vincent" />
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
              <span className="marquee-star" style={{ color:item.color }}>✦</span>
              <span className="marquee-text">{item.text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        <div className="stats-grid">
          {[
            { num:'1+',  label:'Year of Experience' },
            { num:'50+', label:'Technologies Used' },
            { num:'20+', label:'Production Services' },
            { num:'4',   label:'Personal Projects' },
          ].map((s,i)=>(
            <motion.div key={i} className="stat-card" {...fadeUp} transition={{ duration:.5, delay:i*.08 }}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════
          ABOUT
      ═══════════════════════════════ */}
      <section id="about">
        {/* decorators */}
        <Sparkle4 size={18} style={{ top:'8%', right:'12%',  color:'rgba(26,26,26,.12)' }}/>
        <Sparkle4 size={11} style={{ bottom:'12%', left:'9%', color:'rgba(184,169,154,.5)' }}/>
        <DotGrid rows={4} cols={3} style={{ left:'-1%', top:'38%', color:'rgba(26,26,26,.07)' }}/>
        <PlusSvg size={16} style={{ top:'22%', right:'5%', color:'rgba(26,26,26,.9)' }} opacity={.12}/>

        <div className="section-max">
          <div className="about-grid">
            <div>
              <motion.div {...fadeUp}>
                <div className="section-label"><span>✦</span> About</div>
                <h2 className="section-heading">More about <em>me.</em></h2>
              </motion.div>

              <motion.p style={{ fontSize:'1.05rem', color:'var(--fg-muted)', lineHeight:1.8, maxWidth:560, marginBottom:'1.2rem' }} {...fadeUp} transition={{ duration:.6, delay:.1 }}>
                I build AI systems end-to-end — from raw B2B data to deployed production services.
                My work sits at the intersection of data engineering and intelligence: scoring engines,
                enrichment pipelines, vector search systems, and agentic workflows.
              </motion.p>
              <motion.p style={{ fontSize:'1.05rem', color:'var(--fg-muted)', lineHeight:1.8, maxWidth:560, marginBottom:'1.8rem' }} {...fadeUp} transition={{ duration:.6, delay:.15 }}>
                I've built FIRE scoring, RFM segmentation on 83K+ Shopify orders, a Lookalike Engine
                across 18M+ companies, and migrated OneSource from Python to Go solo in under 3 weeks.
                I enjoy making complex systems simple and fast.
              </motion.p>

              <motion.div className="about-highlight-card" {...fadeUp} transition={{ duration:.6, delay:.2 }}>
                <h4>Currently at iCustomer</h4>
                <p>
                  B2B Audience Intelligence Platform — Cambridge, MA (Remote).
                  Promoted from Junior DE to AI-Native DE, Feb 2026. Leading AI-powered
                  scoring, segmentation, and enrichment infrastructure.
                </p>
              </motion.div>

              <motion.div className="about-skills-grid" {...fadeUp} transition={{ duration:.6, delay:.28 }}>
                {[
                  { title:'AI Systems',       body:'Build and deploy ML models — scoring engines, clustering, vector search, LLM agents.' },
                  { title:'Data Pipelines',   body:'End-to-end ETL/ELT pipelines with Kafka, dbt, RabbitMQ, BigQuery, and Snowflake.' },
                  { title:'Enrichment APIs',  body:'Multi-provider waterfall enrichment with Apollo, PDL, ReverseContact, TrestleIQ.' },
                  { title:'Full-Stack Data',  body:'Go APIs, FastAPI microservices, Streamlit UIs — production, not just notebooks.' },
                ].map((c,i)=>(
                  <div key={i} className="about-skill-card">
                    <h5>{c.title}</h5>
                    <p>{c.body}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* illustration */}
            <motion.div className="about-illustration" {...fadeLeft} transition={{ duration:.7, delay:.1 }}>
              <img src={illuWorkflow} alt="workflow illustration" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          EXPERIENCE
      ═══════════════════════════════ */}
      <section id="experience" style={{ background:'rgba(255,255,255,.30)' }}>
        {/* decorators */}
        <PlusSvg size={18} style={{ top:'8%', right:'10%', color:'rgba(26,26,26,.9)' }} opacity={.14}/>
        <DashedCircle size={180} style={{ right:'-3%', bottom:'8%', color:'rgba(26,26,26,.06)' }}/>
        <Sparkle4 size={14} style={{ bottom:'10%', left:'10%', color:'rgba(184,169,154,.5)' }}/>

        <div className="section-max">
          {/* top grid: illustration + heading */}
          <div className="exp-grid">
            <motion.div className="exp-illustration" {...fadeLeft} transition={{ duration:.7 }}>
              <img src={illuDev} alt="developer illustration" />
              <span className="float-badge top-left">Python</span>
              <span className="float-badge top-right">FastAPI</span>
              <span className="float-badge mid-left">Go</span>
              <span className="float-badge bot-right">LangChain</span>
            </motion.div>

            <div>
              <motion.div {...fadeUp}>
                <div className="section-label"><span>✦</span> Experience</div>
                <h2 className="section-heading">My experiences</h2>
              </motion.div>
              <motion.p style={{ fontSize:'1rem', color:'var(--fg-muted)', lineHeight:1.75, maxWidth:440, marginTop:'.5rem' }} {...fadeUp} transition={{ delay:.1 }}>
                Gained hands-on experience building production B2B data and AI systems,
                continuously expanding expertise across data engineering and ML.
              </motion.p>
              <WavyLine style={{ position:'relative', marginTop:'1.4rem', color:'rgba(26,26,26,.18)' }}/>
            </div>
          </div>

          {/* timeline */}
          <div className="timeline-wrap">
            {/* AI-Native DE */}
            <motion.div className="timeline-entry" {...fadeUp} transition={{ delay:.05 }}>
              <div style={{ textAlign:'right', paddingTop:'.3rem' }} className="tl-left">
                <span className="tl-date">Feb 2026 – Present</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:0 }}>
                <div className="tl-dot"/>
              </div>
              <div>
                <div className="exp-card">
                  <h3>AI-Native Data Engineer — iCustomer</h3>
                  <p className="company">Promoted ↑ · Cambridge, MA (Remote)</p>
                  <p className="desc">Leading AI-powered scoring engines, agentic enrichment pipelines, and ML-driven segmentation systems on GCP & AWS. Translating complex B2B data challenges into production-grade Python microservices.</p>
                  <div className="exp-sub-grid" style={{ marginTop:'1rem' }}>
                    {[
                      { icon:'🔥', title:'FIRE Scoring Engine',       desc:'Fit, Intent, Recency, Engagement scoring via RabbitMQ, dbt on BigQuery' },
                      { icon:'🤖', title:'ICP Scoring Engine',        desc:'Two-agent system (Claude Sonnet + Haiku) parsing docs into ICP scores 0–100' },
                      { icon:'📊', title:'RFM Segmentation',          desc:'K-Means clustering on 83K+ Shopify orders; live FastAPI prediction service' },
                      { icon:'🏗️', title:'Provider Orchestrator',     desc:'Intelligent enrichment routing with cascading fallback — zero-downtime swaps' },
                      { icon:'❄️', title:'Snowflake Native App',       desc:'iCustomer CDO — Streamlit UI + Snowpark Python ETL for identity resolution' },
                      { icon:'🦫', title:'OneSource Go API',           desc:'chi HTTP router, 20+ CLI commands — Apollo, PDL, ReverseContact, TrestleIQ' },
                      { icon:'🔍', title:'Lookalike Engine',           desc:'18M+ companies, 580-dim vectors, XGBoost re-ranking, Qdrant — sub-second' },
                      { icon:'📈', title:'LookML Analytics Suite',    desc:'20+ LookML views — cohort heatmaps, LTV, RFM clusters, fiscal calendar' },
                      { icon:'🧠', title:'Unified Enrichment Agent',  desc:'50 rows parallel SSE streaming, AWS ECS/Fargate, CloudWatch logging' },
                    ].map((s,i)=>(
                      <div key={i} className="exp-sub-card">
                        <div className="sub-icon">{s.icon}</div>
                        <h5>{s.title}</h5>
                        <p>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Junior DE */}
            <motion.div className="timeline-entry" {...fadeUp} transition={{ delay:.1 }}>
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
                  <div className="exp-sub-grid" style={{ marginTop:'1rem' }}>
                    {[
                      { icon:'⚡', title:'B2B Realtime Signal Tracker',  desc:'Async FastAPI + aiohttp scraping company websites for tech stacks & job signals' },
                      { icon:'☁️', title:'AWS Lambda Tag Identification', desc:'Detects 1,000+ app fingerprints, extracts social handles from live websites' },
                      { icon:'🔐', title:'Contact Discovery API',         desc:'PostgreSQL + BigQuery queries with AES-256-CBC decryption' },
                      { icon:'📡', title:'RB2B Webhook Receiver',         desc:'Real-time B2B visitor de-anonymization into per-tenant BigQuery tables' },
                      { icon:'🎯', title:'DJ Graffiti Event Discovery',   desc:'Weekly LLM pipeline classifying events (conferences, webinars) to BigQuery' },
                      { icon:'🔍', title:'SEO Keywords Finder',           desc:'FastAPI on AWS Lambda — generates B2B keywords via OpenAI GPT' },
                    ].map((s,i)=>(
                      <div key={i} className="exp-sub-card">
                        <div className="sub-icon">{s.icon}</div>
                        <h5>{s.title}</h5>
                        <p>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PROJECTS
      ═══════════════════════════════ */}
      <section id="projects">
        {/* decorators */}
        <DotGrid rows={5} cols={4} style={{ right:'-1%', bottom:'5%', color:'rgba(26,26,26,.07)' }}/>
        <Sparkle4 size={16} style={{ top:'8%', left:'8%', color:'rgba(26,26,26,.14)' }}/>
        <PlusSvg size={14} style={{ bottom:'12%', right:'8%', color:'rgba(26,26,26,.9)' }} opacity={.13}/>

        <div className="section-max">
          <motion.div {...fadeUp}>
            <div className="section-label"><span>✦</span> My Works</div>
            <h2 className="section-heading">Some of my <em>awesome</em> projects.</h2>
          </motion.div>

          <div className="projects-layout">
            {/* row 1 — featured (wide + narrow) */}
            <div className="project-row featured">
              <motion.div className="project-card" {...fadeUp} transition={{ delay:.05 }}>
                <div className="project-img-wrap">
                  <img src={illuRocket} alt="Tech Intelligence Pipeline"/>
                  <span className="project-num-badge">01</span>
                  <span className="project-cat-badge">Kafka · Data</span>
                </div>
                <div className="project-body">
                  <h3>Tech Intelligence Pipeline</h3>
                  <p>End-to-end market intelligence pipeline ingesting live crypto/stock data, Reddit posts, and news via Kafka, transforming with dbt, storing in DuckDB, and exposing sentiment & trend APIs via FastAPI.</p>
                  <div className="project-tech">
                    {['Apache Kafka','Airflow','dbt','DuckDB','FastAPI','Python'].map(t=><span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>

              <motion.div className="project-card" {...fadeUp} transition={{ delay:.1 }}>
                <div className="project-img-wrap" style={{ height:180 }}>
                  <img src={illuWorkflow} alt="Sentinel Shield"/>
                  <span className="project-num-badge">02</span>
                  <span className="project-cat-badge">AI · Security</span>
                </div>
                <div className="project-body">
                  <h3>Sentinel Shield — Network Privacy Guard</h3>
                  <p>Real-time network intrusion detection capturing packets with Scapy, processing streams with Bytewax, analyzing with local Ollama AI, storing embeddings in LanceDB.</p>
                  <div className="project-tech">
                    {['Scapy','Bytewax','Ollama','LanceDB','FastAPI','Python'].map(t=><span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* row 2 — equal 2-col */}
            <div className="project-row">
              <motion.div className="project-card" {...fadeUp} transition={{ delay:.12 }}>
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

              <motion.div className="project-card" {...fadeUp} transition={{ delay:.16 }}>
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

      {/* ═══════════════════════════════
          SKILLS / STACK
      ═══════════════════════════════ */}
      <section id="skills" style={{ background:'rgba(255,255,255,.30)' }}>
        {/* decorators */}
        <DashedCircle size={160} style={{ left:'-2%', top:'8%', color:'rgba(26,26,26,.06)' }}/>
        <Sparkle4 size={14} style={{ top:'12%', right:'6%', color:'rgba(26,26,26,.13)' }}/>
        <PlusSvg size={14} style={{ bottom:'14%', right:'18%', color:'rgba(26,26,26,.9)' }} opacity={.12}/>

        <div className="section-max">
          <motion.div {...fadeUp}>
            <div className="section-label"><span>✦</span> Technologies &amp; Tools</div>
            <h2 className="section-heading">The stack I <em>build</em> with.</h2>
            <p style={{ fontSize:'1rem', color:'var(--fg-muted)', lineHeight:1.75, maxWidth:580, marginTop:'.5rem' }}>
              A combination of modern data engineering and AI tools for building performant,
              production-grade intelligent systems.
            </p>
          </motion.div>

          <motion.div className="skills-tags" {...fadeUp} transition={{ delay:.12 }}>
            {SKILLS.map((s,i)=>(
              <span key={i} className="skill-pill">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════
          EDUCATION
      ═══════════════════════════════ */}
      <section id="education">
        <Sparkle4 size={14} style={{ top:'10%', right:'8%', color:'rgba(26,26,26,.13)' }}/>
        <PlusSvg size={14} style={{ bottom:'12%', left:'5%', color:'rgba(26,26,26,.9)' }} opacity={.12}/>

        <div className="section-max">
          <motion.div {...fadeUp}>
            <div className="section-label"><span>✦</span> Education</div>
            <h2 className="section-heading">Academic <em>background.</em></h2>
          </motion.div>

          <div className="edu-list">
            {[
              { degree:'MBA in Human Resource Management', school:'Bharathidasan University, Tiruchirappalli', gpa:'Pursuing', year:'2025 – 2027' },
              { degree:'Bachelor of Computer Applications (BCA)',    school:'Providence College for Women, Coonoor',        gpa:'GPA: 8.47 / 10.00', year:'2022 – 2025' },
              { degree:'Diploma in Cyber Security (DCS)',            school:'Bharathiar University, Coimbatore',            gpa:'Completed',         year:'2022 – 2025' },
            ].map((e,i)=>(
              <motion.div key={i} className="edu-card" {...fadeUp} transition={{ delay:i*.08 }}>
                <div>
                  <h3>{e.degree}</h3>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-gpa">{e.gpa}</p>
                </div>
                <span className="edu-year">{e.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CONTACT
      ═══════════════════════════════ */}
      <section id="contact" className="noise">
        {/* decorators */}
        <DashedCircle size={200} style={{ left:'2%', top:'5%', color:'rgba(26,26,26,.06)' }}/>
        <DashedCircle size={160} style={{ right:'-2%', top:'-3%', color:'rgba(184,169,154,.2)' }}/>
        <Sparkle4 size={20} style={{ bottom:'20%', left:'18%', color:'rgba(26,26,26,.14)' }}/>
        <PlusSvg size={14} style={{ top:'18%', right:'8%', color:'rgba(26,26,26,.9)' }} opacity={.13}/>
        <Sparkle4 size={11} style={{ top:'14%', right:'28%', color:'rgba(26,26,26,.15)' }}/>

        <div className="section-max" style={{ textAlign:'center' }}>
          <motion.div className="contact-illustration" {...scaleIn} transition={{ duration:.6 }}>
            <img src={illuCollab} alt="collaboration"/>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay:.05 }}>
            <div className="section-label" style={{ justifyContent:'center' }}><span>✦</span> Contact</div>
          </motion.div>

          <motion.h2 className="contact-heading" {...fadeUp} transition={{ delay:.1 }}>
            Let's build something<br/><em>extraordinary.</em>
          </motion.h2>

          <motion.p className="contact-sub" {...fadeUp} transition={{ delay:.15 }}>
            If you're working on something interesting in AI, data engineering, or B2B intelligence, let's talk.
          </motion.p>

          <motion.div className="contact-actions" {...fadeUp} transition={{ delay:.2 }}>
            <a href="mailto:jeevavincent.2003@gmail.com" className="contact-email-btn">
              jeevavincent.2003@gmail.com <span>→</span>
            </a>
            <a href="/Jeeva_Vincent_Resume.pdf" download className="contact-resume-btn">
              <FaDownload size={14}/> Download Resume
            </a>
          </motion.div>

          <motion.div className="contact-links" {...fadeUp} transition={{ delay:.25 }}>
            <a href="https://github.com/Jeeva-V-2003" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jeeva280503/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:jeevavincent.2003@gmail.com">Email</a>
          </motion.div>

          <motion.footer className="footer" style={{ marginTop:'3rem', border:'none' }} {...fadeUp} transition={{ delay:.3 }}>
            © 2026 Jeeva Vincent — AI-Native Data Engineer. Crafted with care.
          </motion.footer>
        </div>
      </section>
    </div>
  );
}
