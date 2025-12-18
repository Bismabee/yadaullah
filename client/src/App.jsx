import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  HardHat, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Trophy,
  Hammer,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Public Infrastructure Hub",
      location: "Nowgam, Srinagar",
      description: "State-mandated civil works focused on enhancing district-level connectivity and structural resilience.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600"
    },
    {
      id: 2,
      title: "Village Development Project",
      location: "Lasjan, Srinagar",
      description: "Comprehensive drainage systems and pathway engineering for enhanced rural accessibility.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Institutional Structural Works",
      location: "Tral, Pulwama",
      description: "Design and execution of government facility upgrades with precision and uncompromised safety.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const faqs = [
    {
      question: "Are your services available for private residential projects?",
      answer: "While we prioritize government infrastructure, we offer consulting and construction services for high-end residential projects that require government-standard structural integrity."
    },
    {
      question: "What is your primary regional focus?",
      answer: "We are based in Srinagar and primarily serve the central and southern districts of the Kashmir valley, including Pulwama and Anantnag."
    },
    {
      question: "What registration status does the firm hold?",
      answer: "Yadaullah Constructions is a Class-A registered government contractor, fully compliant with all state and central PWD regulatory frameworks."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#0071e3] selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5' : 'bg-transparent'}`}>
        <div className="max-w-[1100px] mx-auto px-6 h-14 md:h-20 flex justify-between items-center font-medium text-[12px] md:text-[13px] tracking-wide">
          <div className="flex items-center space-x-2 group cursor-pointer">
            
           <div className="bg-black p-1 rounded-full">
  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
    <img
      src="/yadaullah_constructions_logo.png"
      alt="Yadaullah Constructions logo"
      className="w-6 h-6 object-contain"
    />
  </div>
</div>


            <div className="flex flex-col">
              <span className="font-bold text-[14px] leading-tight tracking-tight uppercase">Yadaullah</span>
              
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] -mt-0.5">Constructions</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12 opacity-80">
            <a href="#home" className="hover:text-black transition-colors">Home</a>
            <a href="#works" className="hover:text-black transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-[#0071e3] text-white px-5 py-2 rounded-full font-bold hover:bg-[#0077ed] transition-colors">Inquiry</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 p-8 pt-24 space-y-6 text-xl font-semibold animate-in slide-in-from-top duration-300">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block border-b border-slate-100 pb-4">Home</a>
            <a href="#works" onClick={() => setIsMenuOpen(false)} className="block border-b border-slate-100 pb-4">Portfolio</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block border-b border-slate-100 pb-4">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-20 bg-[#f5f5f7] overflow-hidden">
        <div className="max-w-[980px] mx-auto px-6 w-full text-center relative z-10">
          <span className="inline-block text-[14px] md:text-[17px] font-bold text-[#f56300] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom duration-700 uppercase">
            Grade-A Government Registered Contractor
          </span>
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight leading-[1.05] text-[#1d1d1f] mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
            Precision engineering for construction in Srinagar. <br />
            <span className="text-slate-400">Built with integrity and expertise.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Professional construction contractor serving Srinagar, Pulwama, and Kashmir. Specializing in residential, commercial, and public infrastructure projects with government-certified quality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a href="#contact" className="bg-[#1d1d1f] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all flex items-center">
              Request a Quotation <ArrowRight className="ml-3 w-4 h-4" />
            </a>
            <a href="#works" className="text-[#0066cc] font-bold hover:underline flex items-center text-lg">
              Explore our work <ChevronDown className="ml-1 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Decorative Graphic Elements */}
        <div className="absolute top-[20%] left-[10%] w-[15%] h-[20%] opacity-5 pointer-events-none">
          <Hammer className="w-full h-full" />
        </div>
        <div className="absolute bottom-[10%] right-[10%] w-[15%] h-[20%] opacity-5 pointer-events-none">
          <ShieldCheck className="w-full h-full" />
        </div>
      </section>

      {/* Corporate Strip */}
      <div className="bg-white py-14 border-y border-black/5">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Credentials", val: "Grade-A Registered", detail: "Licensed Contractor" },
              { label: "Portfolio", val: "200+ Delivered", detail: "Public Contracts" },
              { label: "Experience", val: "12+ Years", detail: "Industry Presence" },
              { label: "Compliance", val: "100% Certified", detail: "Safety Audited" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight">{stat.val}</h4>
                <p className="text-[12px] font-medium text-slate-400">{stat.detail}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section id="works" className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-[56px] font-bold tracking-tight mb-6">Our construction portfolio & projects.</h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium">Completed projects across Srinagar, Pulwama, and Kashmir valley. View our work in residential, commercial, and infrastructure development.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
            {projects.map((project, idx) => (
              <article key={project.id} className={`group cursor-pointer ${idx === 0 ? 'md:col-span-2' : ''}`}>
                <div className="relative aspect-[16/9] bg-[#f5f5f7] rounded-[30px] overflow-hidden mb-8 transition-transform duration-700 ease-out group-hover:scale-[1.01] shadow-sm">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.location}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">{project.year}</span>
                    <span className="bg-black/80 text-white backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Government Project</span>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                    <div className="p-2 bg-[#f5f5f7] rounded-full text-[#1d1d1f]">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  <div className="flex items-center text-slate-400 font-bold text-[13px] tracking-tight mb-4">
                    <MapPin className="w-4 h-4 mr-2" /> {project.location}
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-xl">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="py-24 bg-[#1d1d1f] text-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-[56px] font-bold tracking-tight mb-12 leading-none">Construction services built to endure.</h2>
              <div className="space-y-14">
                {[
                  { title: "Public Infrastructure & Roads", desc: "Specialized in road connectivity projects, drainage systems networks, and vital pathways for growing communities throughout Srinagar and Kashmir.", icon: <Hammer /> },
                  { title: "Civil Engineering & Buildings", desc: "Constructing institutional facilities with architectural precision, high-grade materials, and government-standard structural integrity for residential and commercial use.", icon: <Building2 /> },
                  { title: "Safety Audits & Compliance", desc: "Rigorous adherence to PWD and central regulatory safety benchmarks for structural longevity, ensuring all projects meet government construction standards." , icon: <ShieldCheck /> }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-8 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/50 group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300">
                        {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#0071e3] transition-colors">{item.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-[#2d2d2f] rounded-[40px] p-16 text-center border border-white/5 relative z-10">
                <Trophy size={60} className="text-[#0071e3] mx-auto mb-8" />
                <h3 className="text-5xl font-bold tracking-tighter mb-4 italic">Est. 2012</h3>
                <p className="text-slate-400 text-lg font-medium">Over a decade of trust, <br/>built brick by brick in Srinagar and Kashmir.</p>
                <div className="mt-10 pt-10 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-3xl font-bold tracking-tight">15k+</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Man Hours Invested</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold tracking-tight">05+</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Districts Served</p>
                    </div>
                </div>
              </div>
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0071e3]/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Center */}
      <section id="faq" className="py-24 bg-[#f5f5f7]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-[56px] font-bold tracking-tight">Construction questions answered.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <article key={index} className="bg-white rounded-[24px] overflow-hidden shadow-sm transition-all hover:shadow-md">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-8 text-left group"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-bold text-lg md:text-xl tracking-tight">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className={activeFaq === index ? 'text-[#0071e3]' : 'text-slate-300'} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="px-8 pb-8 text-slate-500 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-[#1d1d1f] pt-24 pb-12 border-t border-black/5">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Building2 className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-[16px] tracking-tight uppercase italic">Yadaullah Constructions</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-8">Crafting Kashmir's <br/>Essential Infrastructure.</h3>
              <p className="text-slate-500 mb-6">Professional construction and civil engineering contractor serving Srinagar, Pulwama, Anantnag, and across Kashmir valley.</p>
              <div className="flex space-x-6 text-slate-400">
                <a href="https://facebook.com/yadaullah" rel="noopener noreferrer" title="Yadaullah Constructions on Facebook" className="hover:text-[#0071e3] transition-colors"><Facebook size={20} /></a>
                <a href="https://instagram.com/yadaullah" rel="noopener noreferrer" title="Yadaullah Constructions on Instagram" className="hover:text-[#0071e3] transition-colors"><Instagram size={20} /></a>
                <a href="https://linkedin.com/company/yadaullah" rel="noopener noreferrer" title="Yadaullah Constructions on LinkedIn" className="hover:text-[#0071e3] transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">Explore</h4>
              <ul className="space-y-4 font-bold text-[14px]">
                <li><a href="#home" className="hover:text-[#0071e3] transition-colors">Home</a></li>
                <li><a href="#works" className="hover:text-[#0071e3] transition-colors">Portfolio</a></li>
                <li><a href="#services" className="hover:text-[#0071e3] transition-colors">Services</a></li>
                <li><a href="#faq" className="hover:text-[#0071e3] transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-[#0071e3] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">Office Location</h4>
              <ul className="space-y-6 text-[15px] font-medium text-slate-500 italic">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#f56300] mr-4 shrink-0 mt-0.5" />
                  <span>Nowgam Bypass, Industrial Zone,<br />Srinagar, Jammu & Kashmir 190015<br />India</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#f56300] mr-4 shrink-0" />
                  <a href="tel:+919XXXXXXXXX" className="hover:text-[#0071e3] transition-colors">+91 9XX-XXX-XXXX</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[#f56300] mr-4 shrink-0" />
                  <a href="mailto:inquiry@yadaullah.com" className="font-bold not-italic text-black hover:text-[#0071e3] transition-colors">inquiry@yadaullah.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">
            <p>&copy; {new Date().getFullYear()} Yadaullah Constructions. All rights reserved. | Serving Srinagar, Pulwama, Kashmir</p>
            <div className="flex space-x-12">
                <span className="text-[#1d1d1f]">GSTIN: 01AABFY2024L1Z1</span>
                <span>REG: Grade-A Contractor</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;