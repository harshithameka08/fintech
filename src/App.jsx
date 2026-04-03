import React from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  CheckCircle2, 
  Lock, 
  Clock, 
  ShieldCheck, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowUpRight,
  User,
  Zap,
  Briefcase,
  Building2,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import local images
import homeLogo from './home.logo.png';
import homeImg1 from './home.image 1.png'; // Banner
import homeImg2 from './home.image 2.png'; // Expense Blob & Cards
import homeImg3 from './home.image 3.png'; // Transactions List
import homeImg4 from './home.image 4.png'; // Avatar
import phonePoster from './phone.poster.png'; 
import img256 from './256-bit Encryption.png';
import img2FA from './Two-factor Auth.png';
import img247 from './247 Monitoring.png';
import imgGDPR from './GDPR Compliant.png';
import imgInd from './Individuals.png';
import imgFree from './Freelancers.png';
import imgSmall from './Small teams.png';
import bgEllipse from './backgroung.ellipse.png';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Navbar = () => (
  <nav className="nav">
    <div className="container nav-content">
      <div className="logo logo-img">
        <img src={homeLogo} alt="FINTRACK" />
      </div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#insights">Insights</a>
        <a href="#security">Security</a>
      </div>
      <div className="nav-actions">
        <button className="btn-primary">Get Started</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="glow-bg"></div>
    <div className="container hero-content">
      <motion.h1 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="hero-title"
      >
        Your money.<br />Clearly understood.
      </motion.h1>
      <motion.p 
        initial="hidden"
        animate="visible"
        variants={{
          ...fadeInUp,
          visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } }
        }}
        className="hero-subtitle"
      >
        Smart expense tracking for modern life.
      </motion.p>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          ...fadeInUp,
          visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.4 } }
        }}
        className="hero-btns"
      >
        <button className="btn-primary large">Start Tracking</button>
        <button className="btn-outline large">View Demo</button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hero-dashboard-preview techworld"
      >
        <div className="dashboard-frame-modern glass">
          <div className="dash-nav-modern">
            <div className="dash-brand">
              <Zap size={18} color="#cbfb5e" fill="#cbfb5e"/>
              <span>TechWorld</span>
            </div>
            <div className="dash-menu-modern">
              <span className="active">Dashboard</span>
              <span>Stocks</span>
              <span>Analysis</span>
              <span>Settings</span>
            </div>
            <div className="dash-user-modern">
              <div className="dash-notifications">
                <Bell size={18} />
                <span className="unread-dot"></span>
              </div>
              <div className="modern-avatar">
                 <img src={homeImg4} alt="User" />
                 <ChevronDown size={14} />
              </div>
            </div>
          </div>
          
          <div className="dash-content-modern">
             <div className="dash-left-modern">
                  <div className="cashback-banner-container">
                     <img src={homeImg1} alt="Promo Banner" className="full-width-img banner-rounded" />
                  </div>
                  <div className="transactions-section">
                      <div className="section-header-mini">
                         <h4 className="active-tab">Transactions</h4>
                      </div>
                      <div className="transactions-container">
                        <img src={homeImg3} alt="Transactions" className="full-width-img" />
                      </div>
                  </div>
             </div>
             <div className="dash-right-modern">
                <div className="expense-blob-section">
                   <div className="stat-header-modern">
                      <h4>Expense</h4>
                      <div className="month-chip">Month <ChevronDown size={12}/></div>
                   </div>
                   <div className="blob-graphic-container">
                      <img src={homeImg2} alt="Expense Analytics" className="full-width-img" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Insights = () => {
  const barData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const barHeights = [40, 60, 50, 45, 90, 55];

  return (
    <section className="insights" id="insights">
      <div className="container">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="section-title center"
        >
          See patterns you didn't<br />know existed.
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="insights-grid"
        >
          {/* Card 1: Average Daily Spending */}
          <motion.div variants={fadeInUp} className="insight-card glass">
             <span className="insight-label">Average Daily Spending</span>
             <h3 className="insight-value lime">$147.50</h3>
             <span className="insight-sub small">↓ 8.2% from last month</span>
             <div className="bar-chart-mini">
                {barData.map((day, i) => (
                  <div key={day} className="bar-wrapper">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${barHeights[i]}px` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className={`bar ${day === 'Fri' ? 'active' : ''}`}
                    ></motion.div>
                    <span className="bar-day">{day}</span>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Card 2: Top Category */}
          <motion.div variants={fadeInUp} className="insight-card glass">
             <span className="insight-label">Top Category</span>
             <h3 className="insight-value purple">Food</h3>
             <span className="insight-sub small">$2,340 spent</span>
             <div className="category-stats">
                <div className="progress-container">
                   <motion.div 
                     initial={{ width: 0 }} 
                     whileInView={{ width: '65%' }} 
                     transition={{ duration: 1.2, ease: "easeOut" }} 
                     className="progress-bar purple"
                   ></motion.div>
                </div>
                <span className="progress-label-mini">65% of budget</span>
             </div>
          </motion.div>

          {/* Card 3: Savings Rate */}
          <motion.div variants={fadeInUp} className="insight-card glass">
             <span className="insight-label">Savings Rate</span>
             <h3 className="insight-value lime">33%</h3>
             <span className="insight-sub small">Above average</span>
             <div className="circle-chart-container insight-chart">
                <svg className="circle-chart-svg" width="140" height="140" viewBox="0 0 140 140">
                   <circle className="circle-bg" cx="70" cy="70" r="55" fill="transparent" stroke="rgba(203, 251, 94, 0.05)" strokeWidth="12" />
                   <motion.circle 
                     className="circle-progress" cx="70" cy="70" r="55" fill="transparent" stroke="var(--primary)" strokeWidth="12" 
                     strokeDasharray="345.5" initial={{ strokeDashoffset: 345.5 }} whileInView={{ strokeDashoffset: 345.5 - (345.5 * 0.33) }} 
                     transition={{ duration: 1.5, ease: "easeInOut" }} strokeLinecap="round" transform="rotate(-90 70 70)"
                   />
                </svg>
             </div>
          </motion.div>

          {/* Card 4: Monthly Growth */}
          <motion.div variants={fadeInUp} className="insight-card glass">
             <span className="insight-label">Monthly Growth</span>
             <h3 className="insight-value lime">+$1,240</h3>
             <span className="insight-sub small">vs last month</span>
             <div className="mini-bars-simple">
                {[30, 50, 70, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}px` }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`bar-simple ${i === 3 ? 'active' : ''}`}
                  ></motion.div>
                ))}
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <div className="features-container">
        <motion.div 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true }} 
           variants={staggerContainer} 
           className="features-text"
        >
          <motion.div variants={fadeInUp} className="feature-item">
            <h2>Track.</h2>
            <p>Every transaction, automatically categorized and synced across all your devices.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="feature-item">
            <h2>Categorize.</h2>
            <p>Smart AI learns your spending patterns and organizes everything automatically.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="feature-item">
            <h2>Analyze.</h2>
            <p>Get actionable insights that help you make smarter financial decisions.</p>
          </motion.div>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0, x: 50 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           viewport={{ once: true }} 
           transition={{ duration: 0.8 }} 
           className="features-visual"
        >
          <img src={bgEllipse} alt="" className="features-ellipse-bg" />
          <img src={phonePoster} alt="Mobile App" className="phone-mockup-img" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section className="security" id="security">
    <div className="container">
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="section-title center"
      >
        Security is built in.<br/>Not added later.
      </motion.h2>
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="security-grid"
      >
        {[
          { img: img256, t: "256-bit Encryption", p: "Military-grade security" },
          { img: img2FA, t: "Two-factor Auth", p: "Extra layer of protection" },
          { img: img247, t: "24/7 Monitoring", p: "Always protected" },
          { img: imgGDPR, t: "GDPR Compliant", p: "Privacy guaranteed" }
        ].map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp} 
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="sec-item"
          >
            <div className="sec-icon-img"><img src={item.img} alt={item.t} /></div>
            <h4>{item.t}</h4>
            <p>{item.p}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Audience = () => (
  <section className="audience">
    <div className="container">
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="section-title center regular-title"
      >
        Built for everyone.
      </motion.h2>
      <motion.div 
         initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
         className="audience-grid"
      >
        {[
           { img: imgInd, t: "Individuals", p: "Take control of personal finances and reach savings goals." },
           { img: imgFree, t: "Freelancers", p: "Manage project income and business expenses effortlessly." },
           { img: imgSmall, t: "Small teams", p: "Collaborate and manage shared expenses with transparency." }
        ].map((item, idx) => (
           <motion.div 
             key={idx} 
             variants={fadeInUp} 
             whileHover={{ y: -10, transition: { duration: 0.3 } }}
             className="audience-card glass"
           >
              <div className="aud-icon-img"><img src={item.img} alt={item.t} /></div>
              <h4>{item.t}</h4>
              <p>{item.p}</p>
           </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="cta">
     <img src={bgEllipse} alt="" className="cta-ellipse-bg" />
     <div className="container cta-content">
        <motion.h2 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
           className="section-title"
        >
          Start understanding your money today.
        </motion.h2>
        <motion.p 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 0.5, y: 0 }} 
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="cta-sub"
        >
          Join thousands who've taken control of their financial future.
        </motion.p>
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
           className="cta-btns"
        >
           <button className="btn-primary">Get Started Free</button>
           <button className="btn-outline">Book A Demo</button>
        </motion.div>
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
           className="cta-checks"
        >
           {["No credit card required", "14-day free trial", "Cancel anytime"].map((t, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="check-item">
                 <CheckCircle2 size={16} color="#cbfb5e" /> {t}
              </motion.div>
           ))}
        </motion.div>
     </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
     <div className="container">
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
           className="footer-grid"
        >
           <motion.div variants={fadeInUp} className="footer-brand">
              <div className="logo logo-img">
                 <img src={homeLogo} alt="FINTRACK" />
              </div>
              <p className="footer-slogan">Smart expense tracking for modern life.</p>
           </motion.div>
           <motion.div variants={fadeInUp} className="footer-links-section">
              <h5>QUICK NAVIGATION</h5>
              <div className="footer-links">
                 <a href="/" className="active">Home</a>
                 <a href="/">Features</a>
                 <a href="/">Platform</a>
                 <a href="/">Contact us</a>
              </div>
           </motion.div>
           <motion.div variants={fadeInUp} className="footer-contact-section">
              <h5>QUICK CONTACT</h5>
              <div className="social-bubbles">
                 {[Linkedin, Facebook, Instagram, Youtube].map((Icon, idx) => (
                    <motion.div 
                       key={idx} 
                       whileHover={{ y: -4, scale: 1.1 }} 
                       className="social-bubble"
                    >
                       <Icon size={18} />
                    </motion.div>
                 ))}
              </div>
           </motion.div>
        </motion.div>
        <div className="copyright-container">
           <div className="copyright-content">
              <p>© 2025fintrack. All rights reserved.</p>
              <div className="footer-line"></div>
           </div>
        </div>
     </div>
  </footer>
);

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Insights />
      <Features />
      <Security />
      <Audience />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
